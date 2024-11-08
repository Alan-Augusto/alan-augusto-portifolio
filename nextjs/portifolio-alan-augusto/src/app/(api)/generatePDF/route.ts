import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { marked } from 'marked';
import { experiences } from '@/data/experiences.data';
import { profileData } from '@/data/profile.data';
// import { projectsData } from '@/data/projects.data';
import { studentData, extracurricularData } from '@/data/students.data';

export async function GET() {
  // Formatar dados como Markdown
  const markdownContent = `
# ${profileData.name}
_${profileData.role}_

${profileData.presentation}

---

## Skills
${profileData.stack.join(', ')}

## Experiência Profissional
${experiences
    .map(exp => `**${exp.position} - ${exp.title}**\n*(${exp.startdate} - ${exp.enddate})*\n${exp.description}`)
    .join('\n\n')}

## Educação
${studentData
    .map(edu => `**${edu.title} - ${edu.institution}**\n*(${edu.startDate} - ${edu.endDate})*\n${edu.description}`)
    .join('\n\n')}

## Atividades Extracurriculares
${extracurricularData
    .map(extra => `**${extra.title} - ${extra.institution}**\n${extra.description}\n*Tópicos:* ${extra.items.join(', ')}`)
    .join('\n\n')}
`;

  // Converter o Markdown para HTML usando `marked`
  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1, h2 { color: #333; }
          h1 { font-size: 24px; }
          h2 { font-size: 18px; margin-top: 20px; }
          p, li { font-size: 12px; line-height: 1.5; color: #555; }
          hr { border: 1px solid #ddd; margin: 20px 0; }
          
          /* Estilo para a imagem de perfil arredondada no canto superior direito */
          .profile-pic {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .content { 
            margin-top: 50px; 
          }
        </style>
      </head>
      <body>
        <img src="${profileData.image}" alt="Foto de Perfil" class="profile-pic" />
        <div class="content">${marked(markdownContent)}</div>
      </body>
    </html>
  `;

  // Criar o PDF com Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
  await browser.close();

  const pdfFileName = `Curriculo_${profileData.name.replace(" ", "_")}.pdf`;
  
  // Retornar o PDF na resposta
  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${pdfFileName}`
    }
  });
}
