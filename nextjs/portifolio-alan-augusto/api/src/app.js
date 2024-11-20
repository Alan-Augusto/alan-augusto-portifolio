const express = require('express');
const pdfRouter = require('./routes/pdf.router');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de rotas
app.use('/api', pdfRouter);

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
