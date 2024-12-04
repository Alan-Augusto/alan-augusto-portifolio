import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { NextResponse } from 'next/server';
import { experiences } from '@/data/experiences.data';
import { profileData } from '@/data/profile.data';
import { studentData, extracurricularData } from '@/data/students.data';

const PAGE_HEIGHT = 842; // Altura da página A4 em pontos
const PAGE_WIDTH = 595; // Largura da página A4 em pontos
const MARGIN = 50; // Margem da página
const TEXT_SIZE = 12; // Tamanho da fonte para texto normal
const PAGE_LIMIT_Y = PAGE_HEIGHT - MARGIN; // Limite inferior da página (margem superior + altura do conteúdo)

export async function GET() {
  try {
    const pdfDoc = await PDFDocument.create();
    let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    const { width, height } = page.getSize();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const textColor = rgb(0.2, 0.2, 0.2);
    let cursorY = height - MARGIN + width - width;

    // Função para adicionar texto com quebra de linha automática
    interface TextOptions {
      x?: number;
      y?: number;
      size?: number;
      bold?: boolean;
    }

    const drawText = (text: string, options: TextOptions = {}) => {
      const { x = MARGIN, y = cursorY, size = TEXT_SIZE, bold = false } = options;
      const selectedFont = bold ? fontBold : font;
      const textWidth = selectedFont.widthOfTextAtSize(text, size);

      // Se o texto exceder a largura da página, quebra em várias linhas
      if (textWidth > PAGE_WIDTH - 2 * MARGIN) {
        const words = text.split(' ');
        let currentLine = '';
        let currentY = y;

        words.forEach(word => {
          const lineWidth = selectedFont.widthOfTextAtSize(currentLine + ' ' + word, size);
          if (lineWidth > PAGE_WIDTH - 2 * MARGIN) {
            page.drawText(currentLine, { x, y: currentY, size, font: selectedFont, color: textColor });
            currentY -= size + 5;
            currentLine = word;
          } else {
            currentLine += (currentLine ? ' ' : '') + word;
          }
        });

        if (currentLine) {
          page.drawText(currentLine, { x, y: currentY, size, font: selectedFont, color: textColor });
        }
        cursorY = currentY - (size + 5);
      } else {
        page.drawText(text, { x, y, size, font: selectedFont, color: textColor });
        cursorY -= size + 5;
      }

      // Se o cursorY estiver próximo do final da página, cria uma nova página
      if (cursorY <= MARGIN + 40) {
        const newPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        page = newPage;
        cursorY = PAGE_LIMIT_Y; // Reinicia a posição de Y na nova página
      }
    };

    const drawSection = (title: string) => {
      cursorY -= 20; // Espaçamento antes da seção
      drawText(title, { size: 14, bold: true });
    };

    // Cabeçalho
    drawText(profileData.name, { size: 20, bold: true });
    drawText(profileData.role, { size: 14 });
    drawText(profileData.presentation, { size: 12 });
    cursorY -= 10;
    drawText(profileData.stack.join(', '), { size: 10 });

    // Experiências
    drawSection('Experiência Profissional');
    experiences.forEach(exp => {
      drawText(`${exp.position} - ${exp.title}`, { bold: true });
      drawText(`${exp.startdate} - ${exp.enddate}`);
      drawText(exp.description);
    });

    // Educação
    drawSection('Educação');
    studentData.forEach(edu => {
      drawText(`${edu.title} - ${edu.institution}`, { bold: true });
      drawText(`${edu.startDate} - ${edu.endDate}`);
      drawText(edu.description);
    });

    // Atividades Extracurriculares
    drawSection('Atividades Extracurriculares');
    extracurricularData.forEach(extra => {
      drawText(`${extra.title} - ${extra.institution}`, { bold: true });
      drawText(extra.description);
      drawText(`Tópicos: ${extra.items.join(', ')}`);
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="curriculo.pdf"',
      },
    });
  } catch (error) {
    console.error('Erro ao gerar o PDF:', error);
    return new NextResponse(JSON.stringify({ error: 'Falha ao gerar o PDF' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
