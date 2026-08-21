import { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { PresentationSlides } from './components/PresentationSlides';
import { DashboardView } from './components/DashboardView';
import { TopPostsGallery } from './components/TopPostsGallery';
import { MediaKitCalculator } from './components/MediaKitCalculator';
import { PdfSlideDeck } from './components/PdfSlideDeck';
import { PdfExportModal } from './components/PdfExportModal';
import { exportPresentationToPdf, ExportProgress } from './utils/pdfExport';
import { openStandalonePresentationInNewTab } from './components/SingleHtmlExporter';
import { JP_PROFILE_SUMMARY } from './data/profileData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'presentation' | 'dashboard' | 'posts' | 'mediakit'>('presentation');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<ExportProgress>({
    step: 0,
    total: 5,
    message: '',
    isGenerating: false,
  });

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const handleOpenPdfModal = () => {
    // Reset any previous state
    setPdfProgress({
      step: 0,
      total: 5,
      message: '',
      isGenerating: false,
      blobUrl: undefined,
      error: undefined,
    });
    setIsPdfModalOpen(true);
  };

  const handleClosePdfModal = () => {
    if (!pdfProgress.isGenerating) {
      setIsPdfModalOpen(false);
    }
  };

  const handleStartPdfExport = async () => {
    try {
      await exportPresentationToPdf((progress) => {
        setPdfProgress(progress);
      });
    } catch (err: any) {
      console.error('Falha na geração do PDF:', err);
    }
  };

  const handlePrintPreview = () => {
    setIsPdfModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const handleOpenNewTab = () => {
    openStandalonePresentationInNewTab();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Top Header Navigation */}
      <TopNav
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onDownloadPdf={handleOpenPdfModal}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
        {currentTab === 'presentation' && (
          <PresentationSlides
            onGoToDashboard={() => setCurrentTab('dashboard')}
            onGoToMediaKit={() => setCurrentTab('mediakit')}
            onDownloadPdf={handleOpenPdfModal}
          />
        )}

        {currentTab === 'dashboard' && <DashboardView />}

        {currentTab === 'posts' && <TopPostsGallery />}

        {currentTab === 'mediakit' && <MediaKitCalculator />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 px-4 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Análise e Apresentação Executiva • Perfil Oficial <strong className="text-slate-400">@{JP_PROFILE_SUMMARY.username}</strong> ({JP_PROFILE_SUMMARY.name} • Reels & Conteúdo)
          </div>
          <div className="text-slate-500 text-[11px]">
            Dados consolidados de Impressões, Alcance, Engajamento e Médias Mensais Feed/Stories.
          </div>
        </div>
      </footer>

      {/* 
        Slide deck rendered with positive dimensions for html2canvas capture & print.
        Positioned fixed with subtle opacity so browser layout calculates all SVG charts and fonts.
      */}
      <div
        id="pdf-render-container"
        className="print-only-deck"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '1280px',
          height: 'auto',
          zIndex: -9999,
          pointerEvents: 'none',
          opacity: 0.002,
        }}
        aria-hidden="true"
      >
        <PdfSlideDeck idPrefix="pdf-slide" />
      </div>

      {/* PDF Export Progress and Confirmation Modal */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={handleClosePdfModal}
        progress={pdfProgress}
        onStartExport={handleStartPdfExport}
        onPrintPreview={handlePrintPreview}
        onOpenNewTab={handleOpenNewTab}
      />
    </div>
  );
}
