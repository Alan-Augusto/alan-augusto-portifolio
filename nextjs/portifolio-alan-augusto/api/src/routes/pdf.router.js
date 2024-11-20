const express = require('express');
const PDFDocument = require('pdfkit');
const profileData = require('../../data/profile.data');
const experiences = require('../../data/experiences.data');
const studentData = require('../../data/student.data');
const extracurricularData = require('../../data/extracurricular.data');

const router = express.Router();

router.get('/generate-pdf', (req, res) => {
    try {
        // Criar um novo documento PDF
        const doc = new PDFDocument({ margin: 50 });

        // Configurar os cabeçalhos da resposta HTTP
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Curriculo.pdf"');

        // Enviar o conteúdo PDF diretamente como resposta
        doc.pipe(res);

        // Cabeçalho do currículo
        doc
            .fontSize(20)
            .text(profileData.name, { align: 'center' })
            .fontSize(14)
            .text(profileData.role, { align: 'center', underline: true })
            .moveDown();

        // Apresentação
        doc
            .fontSize(12)
            .text(profileData.presentation)
            .moveDown();

        // Skills
        doc
            .fontSize(16)
            .text('Skills', { underline: true })
            .moveDown(0.5)
            .fontSize(12)
            .text(profileData.stack.join(', '))
            .moveDown();

        // Experiência Profissional
        doc
            .fontSize(16)
            .text('Experiência Profissional', { underline: true })
            .moveDown(0.5);
        experiences.forEach(exp => {
            doc
                .fontSize(12)
                .text(`**${exp.position} - ${exp.title}**`, { continued: true })
                .text(` (${exp.startdate} - ${exp.enddate})`)
                .text(exp.description)
                .moveDown();
        });

        // Educação
        doc
            .fontSize(16)
            .text('Educação', { underline: true })
            .moveDown(0.5);
        studentData.forEach(edu => {
            doc
                .fontSize(12)
                .text(`**${edu.title} - ${edu.institution}**`, { continued: true })
                .text(` (${edu.startDate} - ${edu.endDate})`)
                .text(edu.description)
                .moveDown();
        });

        // Atividades Extracurriculares
        doc
            .fontSize(16)
            .text('Atividades Extracurriculares', { underline: true })
            .moveDown(0.5);
        extracurricularData.forEach(extra => {
            doc
                .fontSize(12)
                .text(`**${extra.title} - ${extra.institution}**`)
                .text(extra.description)
                .text(`Tópicos: ${extra.items.join(', ')}`)
                .moveDown();
        });

        // Finalizar o documento
        doc.end();
    } catch (error) {
        console.error('Erro ao gerar o PDF:', error);
        res.status(500).send('Erro ao gerar o PDF');
    }
});

module.exports = router;
