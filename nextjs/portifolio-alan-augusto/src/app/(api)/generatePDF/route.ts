import { NextResponse } from 'next/server';
import { PDFDocument, RGB, rgb } from 'pdf-lib';
import { experiences } from '@/data/experiences.data';
import { profileData } from '@/data/profile.data';
import { projectsData } from '@/data/projects.data';
import { studentData, extracurricularData } from '@/data/students.data';

export async function GET() {
  const pdfDoc = await PDFDocument.create();

  const dataAtual = new Date();
  const pdfFileName = `Alan Augusto - Curriculo - ${dataAtual.getDate()}-${dataAtual.getMonth() + 1}-${dataAtual.getFullYear()}.pdf`;
  
  // Função para criar uma nova página e redefinir o cursor vertical
  const addNewPage = () => {
    const page = pdfDoc.addPage([595, 842]); // A4
    return { page, y: page.getSize().height - 30 };
  };

  let { page, y } = addNewPage();

  // Configurações de estilo
  const titleFontSize = 18;
  const sectionFontSize = 14;
  const contentFontSize = 10;
  const marginLeft = 50;
  const lineHeight = 15;
  const sectionSpacing = 20;
  const dividerSpacing = 10;

  // Função para checar o espaço e adicionar uma nova página se necessário
  const checkSpace = (requiredSpace: number) => {
    if (y - requiredSpace < 30) {
      ({ page, y } = addNewPage());
    }
  };

  // Função para adicionar texto e atualizar posição Y
  const drawText = (text: string, options: { size: number, color: RGB , maxWidth?: number }) => {
    checkSpace(options.size + lineHeight);
    page.drawText(text, { x: marginLeft, y, ...options });
    y -= options.size + lineHeight;
  };

  // Função para desenhar uma linha divisória
  const drawDivider = () => {
    checkSpace(dividerSpacing);
    page.drawLine({
      start: { x: marginLeft, y },
      end: { x: page.getSize().width - marginLeft, y },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
    y -= dividerSpacing;
  };

  // Nome e Cargo
  drawText(profileData.name, { size: titleFontSize, color: rgb(0, 0, 0) });
  drawText(profileData.role, { size: sectionFontSize, color: rgb(0.4, 0.4, 0.4) });
  drawDivider();
  y -= sectionSpacing;

  // Perfil Pessoal
  drawText(profileData.presentation, { size: contentFontSize, color: rgb(0, 0, 0), maxWidth: 500 });
  drawDivider();
  y -= sectionSpacing;

  // Sessão de Tecnologias
  drawText('Tecnologias:', { size: sectionFontSize, color: rgb(0, 0, 0) });
  drawText(profileData.stack.join(', '), { size: contentFontSize, color: rgb(0, 0, 0) });
  drawDivider();
  y -= sectionSpacing;

  // Sessão de Experiências
  drawText('Experiência Profissional:', { size: sectionFontSize, color: rgb(0, 0, 0) });
  experiences.forEach(exp => {
    drawText(`${exp.position} - ${exp.title} (${exp.startdate} - ${exp.enddate})`, { size: contentFontSize, color: rgb(0, 0, 0) });
    drawText(exp.description, { size: contentFontSize - 1, color: rgb(0.3, 0.3, 0.3), maxWidth: 500 });
    y -= sectionSpacing;
  });
  drawDivider();

  // Sessão de Projetos
  drawText('Projetos:', { size: sectionFontSize, color: rgb(0, 0, 0) });
  projectsData.forEach(proj => {
    drawText(proj.name, { size: contentFontSize, color: rgb(0, 0, 0) });
    drawText(proj.description, { size: contentFontSize - 1, color: rgb(0.3, 0.3, 0.3), maxWidth: 500 });
    y -= sectionSpacing;
  });
  drawDivider();

  // Sessão de Educação
  drawText('Educação:', { size: sectionFontSize, color: rgb(0, 0, 0) });
  studentData.forEach(edu => {
    drawText(`${edu.title} - ${edu.institution} (${edu.startDate} - ${edu.endDate})`, { size: contentFontSize, color: rgb(0, 0, 0) });
    drawText(edu.description, { size: contentFontSize - 1, color: rgb(0.3, 0.3, 0.3), maxWidth: 500 });
    y -= sectionSpacing;
  });
  drawDivider();

  // Sessão de Atividades Extracurriculares
  drawText('Atividades Extracurriculares:', { size: sectionFontSize, color: rgb(0, 0, 0) });
  extracurricularData.forEach(extra => {
    drawText(`${extra.title} - ${extra.institution}`, { size: contentFontSize, color: rgb(0, 0, 0) });
    drawText(extra.description, { size: contentFontSize - 1, color: rgb(0.3, 0.3, 0.3), maxWidth: 500 });
    drawText(`Tópicos: ${extra.items.join(', ')}`, { size: contentFontSize - 1, color: rgb(0.3, 0.3, 0.3) });
    y -= sectionSpacing;
  });
  drawDivider();

  // Gerar o PDF e enviar na resposta
  const pdfBytes = await pdfDoc.save();
  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=' + pdfFileName, 
    },
  });
}
