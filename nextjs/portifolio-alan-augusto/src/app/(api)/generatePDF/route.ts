import { NextResponse } from 'next/server';
import { experiences } from '@/data/experiences.data';
import { profileData } from '@/data/profile.data';
import { studentData, extracurricularData } from '@/data/students.data';


export async function GET() {
  try {
    // Função para formatar texto como HTML
  const formatText = (text: string) => text.replace(/\n/g, '<br/>');

  // Conteúdo HTML do currículo
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Currículo - ${profileData.name}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          max-width: 800px;
          
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #333;
          padding-bottom: 10px;
        }
        .header-info h1 {
          font-size: 24px;
          margin-bottom: 5px;
        }
        .header-info p {
          font-size: 14px;
          color: #666;
        }
        .profile-pic {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #333;
        }
        .section {
          margin-bottom: 20px;
        }
        .section h2 {
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 10px;
          font-size: 18px;
        }
        .experience, .education, .extracurricular {
          margin-bottom: 15px;
        }
        .experience h3, .education h3, .extracurricular h3 {
          font-size: 16px;
        }
        .experience p, .education p, .extracurricular p {
          font-size: 14px;
          color: #666;
          margin-bottom: 5px;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .skills span {
          background-color: #f0f0f0;
          padding: 3px 8px;
          border-radius: 3px;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="header-info">
          <h1>${profileData.name}</h1>
          <p>${profileData.role}</p>
          <p>${profileData.presentation}</p>
        </div>
        <img src="${profileData.image}" alt="Foto de Perfil" class="profile-pic">
      </div>

      <div class="section skills">
        <h2>Habilidades</h2>
        ${profileData.stack.map(skill => `<span>${skill}</span>`).join('')}
      </div>

      <div class="section experiences">
        <h2>Experiência Profissional</h2>
        ${experiences.map(exp => `
          <div class="experience">
            <h3>${exp.position} - ${exp.title}</h3>
            <p>${exp.startdate} - ${exp.enddate}</p>
            <p>${formatText(exp.description)}</p>
          </div>
        `).join('')}
      </div>

      <div class="section education">
        <h2>Educação</h2>
        ${studentData.map(edu => `
          <div class="education">
            <h3>${edu.title} - ${edu.institution}</h3>
            <p>${edu.startDate} - ${edu.endDate}</p>
            <p>${formatText(edu.description)}</p>
          </div>
        `).join('')}
      </div>

      <div class="section extracurricular">
        <h2>Atividades Extracurriculares</h2>
        ${extracurricularData.map(extra => `
          <div class="extracurricular">
            <h3>${extra.title} - ${extra.institution}</h3>
            <p>${formatText(extra.description)}</p>
            <p><strong>Tópicos:</strong> ${extra.items.join(', ')}</p>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `;

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Erro ao gerar o currículo:', error);
    return new NextResponse(JSON.stringify({ error: 'Falha ao gerar o currículo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
