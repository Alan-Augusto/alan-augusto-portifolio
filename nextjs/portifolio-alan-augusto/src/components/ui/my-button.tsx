'use client'; 

import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties, MouseEvent } from "react";
import tinycolor from "tinycolor2";

type MyButtonProps = {
  text: string;
  icon?: ReactNode;
  color: string; // Cor principal
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Evento de clique opcional
};

function generateStyles(color: string) {
  const base = tinycolor(color);

  const bgColor = base.setAlpha(0.15).toRgbString(); // Fundo transparente
  const borderColor = base.darken(10).toString(); // Borda sólida
  const textColor = base.darken(5).setAlpha(1).toString(); // Texto sólido e opaco
  const hoverBg = base.lighten(80).setAlpha(0.8).toRgbString(); // Seleção leve
  const selectionText = base.darken(10).toString(); // Texto da seleção

  return {
    buttonStyle: {
      backgroundColor: bgColor,
      borderColor,
    } as CSSProperties,
    textStyle: {
      color: textColor,
      backgroundColor: 'transparent', // Certifica que o fundo é transparente, mas sem interferir no texto
    } as CSSProperties,
    hoverStyle: `
      .my-button ::hover {
        background-color: ${hoverBg};
        color: ${selectionText};
      }
    `,
  };
}

export function MyButton({ text, icon, color, onClick }: MyButtonProps) {
  const { buttonStyle, textStyle, hoverStyle } = generateStyles(color);

  return (
    <>
      <style>{hoverStyle}</style> {/* Estilos para hover e active */}
      <button
        className={cn(
          "my-button flex items-center gap-2 px-2 py-1 rounded-md border shadow-sm"
        )}
        style={buttonStyle}
        onClick={onClick}
      >
        {icon && <span className="w-6 h-6">{icon}</span>}
        <span className="font-medium" style={textStyle}>
          {text}
        </span>
      </button>
    </>
  );
}
