const express = require('express');
const puppeteer = require('puppeteer');
const { marked } = require('marked');
const profileData = require('../../data/profile.data');
const experiences = require('../../data/experiences.data');
const studentData = require('../../data/student.data');
const extracurricularData = require('../../data/extracurricular.data');

const router = express.Router();

router.get('/generate-pdf', async (req, res) => {
    try {

      console.log('profileData', profileData);
      console.log('experiences', experiences);
      console.log('studentData', studentData);
      console.log('extracurricularData', extracurricularData);


        // Gerar o conteúdo do Markdown
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

        // Transformar o Markdown em HTML
        const htmlContent = `
<html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; margin: 20px; }
      h1, h2 { color: #333; }
      p, li { font-size: 12px; line-height: 1.5; color: #555; }
      hr { border: 1px solid #ddd; margin: 20px 0; }
      .profile-pic {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    </style>
  </head>
  <body>
    <img src="${profileData.image}" alt="Foto de Perfil" class="profile-pic" />
    <div>${marked(markdownContent)}</div>
  </body>
</html>
`;

        // Gerar o PDF usando Puppeteer
        const browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
        await browser.close();

        // Retornar o PDF como resposta
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Curriculo.pdf"');
        res.send(pdfBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao gerar o PDF');
    }
});

module.exports = router;
