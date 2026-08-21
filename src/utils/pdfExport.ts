import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

export interface ExportProgress {
  step: number;
  total: number;
  message: string;
  isGenerating: boolean;
  blobUrl?: string;
  error?: string;
}

export async function exportPresentationToPdf(
  onProgress?: (progress: ExportProgress) => void
): Promise<Blob> {
  const totalSlides = 5;
  const slideIds = [
    'pdf-slide-1',
    'pdf-slide-2',
    'pdf-slide-3',
    'pdf-slide-4',
    'pdf-slide-5',
  ];

  try {
    if (onProgress) {
      onProgress({
        step: 0,
        total: totalSlides,
        message: 'Preparando slides para exportação...',
        isGenerating: true,
      });
    }

    // Give browser a moment to ensure fonts, charts and layouts are fully settled
    await new Promise((resolve) => setTimeout(resolve, 350));

    // 16:9 Widescreen slide format in mm (297mm width x 167.0625mm height)
    const pdfWidth = 297;
    const pdfHeight = 167.0625;

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
      compress: true,
    });

    for (let i = 0; i < slideIds.length; i++) {
      const slideId = slideIds[i];
      const slideElement = document.getElementById(slideId);

      if (!slideElement) {
        console.warn(`Elemento com ID ${slideId} não encontrado.`);
        continue;
      }

      if (onProgress) {
        onProgress({
          step: i + 1,
          total: totalSlides,
          message: `Renderizando Slide ${i + 1} de ${totalSlides}...`,
          isGenerating: true,
        });
      }

      // Capture slide element in high resolution
      const canvas = await html2canvas(slideElement, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#020617',
        logging: false,
        width: 1280,
        height: 720,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.92);

      if (i > 0) {
        pdf.addPage([pdfWidth, pdfHeight], 'landscape');
      }

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    if (onProgress) {
      onProgress({
        step: totalSlides,
        total: totalSlides,
        message: 'Finalizando arquivo PDF...',
        isGenerating: true,
      });
    }

    const pdfBlob = pdf.output('blob');
    const filename = 'Apresentacao-Joao-Paulo-Cordoba-Media-Kit-330k.pdf';

    // Trigger download via Blob URL
    const blobUrl = URL.createObjectURL(pdfBlob);
    
    // Attempt standard download anchor
    try {
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }, 2000);
    } catch (downloadErr) {
      console.warn('Erro ao clicar no link de download automático:', downloadErr);
    }

    if (onProgress) {
      onProgress({
        step: totalSlides,
        total: totalSlides,
        message: 'PDF pronto para download!',
        isGenerating: false,
        blobUrl: blobUrl,
      });
    }

    return pdfBlob;
  } catch (error: any) {
    console.error('Erro ao gerar apresentação em PDF:', error);
    if (onProgress) {
      onProgress({
        step: 0,
        total: totalSlides,
        message: 'Ocorreu um erro ao processar. Utilize o botão "Salvar PDF / Imprimir".',
        isGenerating: false,
        error: error?.message || 'Erro de processamento',
      });
    }
    throw error;
  }
}
