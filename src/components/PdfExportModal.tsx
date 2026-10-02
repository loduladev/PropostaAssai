import React from 'react';
import {
  FileDown,
  Printer,
  Check,
  Loader2,
  X,
  Sparkles,
  ExternalLink,
  Download,
  AlertCircle,
} from 'lucide-react';
import { ExportProgress } from '../utils/pdfExport';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: ExportProgress;
  onStartExport: () => void;
  onPrintPreview: () => void;
  onOpenNewTab: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  progress,
  onStartExport,
  onPrintPreview,
  onOpenNewTab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-5 text-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={progress.isGenerating}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <FileDown className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Baixar Apresentação em PDF</h3>
            <p className="text-xs text-slate-400">
              Formato executivo 16:9 widescreen (5 slides de alto impacto)
            </p>
          </div>
        </div>

        {/* Error State */}
        {progress.error && (
          <div className="bg-rose-950/40 border border-rose-500/40 rounded-xl p-3.5 flex items-start gap-3 text-xs text-rose-200">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-rose-300">Aviso sobre o download:</span>
              <span>{progress.error}</span>
            </div>
          </div>
        )}

        {/* Status / Progress Indicator */}
        {progress.isGenerating ? (
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-amber-400 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                {progress.message}
              </span>
              <span className="text-slate-400">
                {progress.step} / {progress.total}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-amber-500 via-rose-500 to-amber-400 h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${Math.max(5, (progress.step / progress.total) * 100)}%`,
                }}
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Processando e vetorizando os 5 slides em resolução 16:9. Aguarde alguns segundos...
            </p>
          </div>
        ) : progress.blobUrl ? (
          /* Ready for direct click download if popup was blocked */
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <Check className="w-4 h-4" />
              <span>PDF gerado com sucesso!</span>
            </div>
            <p className="text-xs text-slate-300">
              O arquivo está pronto. Se o download não iniciou automaticamente, clique no botão abaixo:
            </p>
            <a
              href={progress.blobUrl}
              download="Apresentacao-Joao-Paulo-Cordoba-Media-Kit-360k.pdf"
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer block text-center"
            >
              <Download className="w-4 h-4 inline" />
              <span>Clique para Baixar o Arquivo .PDF</span>
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 text-xs space-y-2">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Estrutura do Deck em 5 Slides:
              </div>
              <ul className="space-y-1 text-slate-400 text-[11px] pl-4 list-disc">
                <li><strong className="text-slate-300">Slide 1:</strong> Capa Executiva & Diagnóstico @jpbcordoba (360k)</li>
                <li><strong className="text-slate-300">Slide 2:</strong> Inserção de Marca, 19.4M Impressões & Alcance Regional</li>
                <li><strong className="text-slate-300">Slide 3:</strong> Comparativo Feed (45.8k views) vs Stories (9.2k views)</li>
                <li><strong className="text-slate-300">Slide 4:</strong> Conclusões Estratégicas & Pilares Comerciais</li>
                <li><strong className="text-slate-300">Slide 5:</strong> Proposta Assaí (R$ 6.800/mês • Total R$ 20.400 - 6 Reels) & Cronograma</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={onStartExport}
                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Gerar e Baixar .PDF Agora</span>
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={onOpenNewTab}
                  className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  title="Abrir a apresentação completa em nova aba do navegador"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>Abrir em Nova Aba</span>
                </button>

                <button
                  onClick={onPrintPreview}
                  className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  title="Abre a janela de impressão do navegador onde você pode escolher Salvar como PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-sky-400" />
                  <span>Imprimir / Salvar PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="text-[11px] text-slate-400 text-center pt-1 border-t border-slate-800/80 flex items-center justify-center gap-2">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Formato compatível com envio direto por WhatsApp, e-mail e projeções.</span>
        </div>
      </div>
    </div>
  );
};
