'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { LuFileDown } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";

const DownloadButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true); // Começa o carregamento
    try {
      const response = await fetch('/generatePDF', { method: 'GET' });
      if (!response.ok) throw new Error('Erro ao gerar o PDF');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const currentDate = new Date().toISOString().split('T')[0];
      link.download = `AlanAugusto_Curriculo_${currentDate}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao baixar o currículo:', error);
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-4 transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-full"
    >
      {isLoading ? (
        <ImSpinner2 className="animate-spin" />
      ) : (
        <LuFileDown />
      )}
    </Button>
  );
};

export default DownloadButton;
