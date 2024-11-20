'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { LuFileDown } from "react-icons/lu";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Ícone de loading

const DownloadButton: React.FC = () => {
  const [loading, setLoading] = useState(false); // Estado de loading

  const dataAtual = new Date();
  const pdfFileName = `Alan Augusto - Curriculo - ${dataAtual.getDate()}-${dataAtual.getMonth() + 1}-${dataAtual.getFullYear()}.pdf`;

  // Função para download do PDF
  const handleDownload = async () => {
    setLoading(true); // Ativar o estado de loading
    try {
      const response = await fetch('http://localhost:5300/api/generate-pdf', {
        method: 'GET',
      });

      console.log(response);
      
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
        alert('Erro ao gerar o PDF. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na comunicação com o servidor.');
    } finally {
      setLoading(false); // Desativar o estado de loading
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-8 right-4 transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-full"
      disabled={loading} // Desabilitar o botão enquanto carrega
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" /> // Spinner animado
      ) : (
        <LuFileDown />
      )}
    </Button>
  );
};

export default DownloadButton;
