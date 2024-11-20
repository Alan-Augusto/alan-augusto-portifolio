const express = require('express');
const cors = require('cors'); // Certifique-se de importar o CORS
const pdfRouter = require('./routes/pdf.router');

const app = express();
const PORT = process.env.PORT || 5300;

// Configurar o CORS antes das rotas
app.use(cors({
    origin: ['http://localhost:3000', 'https://alan-augusto-portifolio.vercel.app/'],
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
}));

// Configuração de rotas
app.use('/api', pdfRouter);

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
