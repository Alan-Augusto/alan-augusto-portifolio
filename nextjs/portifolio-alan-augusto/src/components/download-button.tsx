'use client';
import React from 'react';
import { Button } from './ui/button';
import { LuFileDown } from "react-icons/lu";

const DownloadButton: React.FC = () => {

  const dataAtual = new Date();
  const pdfFileName = `Alan Augusto - Curriculo - ${dataAtual.getDate()}-${dataAtual.getMonth() + 1}-${dataAtual.getFullYear()}.pdf`;

  // Função para download do PDF
  const handleDownload = async () => {
    const response = await fetch('/generatePDF', {
      method: 'GET',
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = pdfFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } else {
      console.error('Falha ao gerar PDF');
    }
  };

  return (
    <Button onClick={handleDownload} className='fixed bottom-8 right-4 transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-full'>
      <LuFileDown />
    </Button>
  );
};

export default DownloadButton;
