'use client';
import React from 'react';
import { Button } from './ui/button';
import { LuFileDown } from "react-icons/lu";

const DownloadButton: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/generatePDF', { method: 'GET' });

      if (response.ok) {
        const htmlContent = await response.text();
        const printWindow = window.open('', '_blank', 'width=2000,height=3000');
        
        if (printWindow) {
          // Insere o conteúdo do HTML no documento da nova janela
          printWindow.document.open();
          printWindow.document.write(htmlContent);
          printWindow.document.close();

          // Aguarda o carregamento do conteúdo e chama a função de impressão
          printWindow.onload = () => {
            printWindow.print();
            printWindow.close();
          };
        }
      } else {
        console.error('Falha ao gerar o HTML do currículo');
      }
    } catch (error) {
      console.error('Erro ao tentar baixar o currículo:', error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-4 transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-full"
    >
      <LuFileDown />
    </Button>
  );
};

export default DownloadButton;
