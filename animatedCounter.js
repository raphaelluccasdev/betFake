import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

// Componente reativo que anima qualquer número que recebe
export default function AnimatedCounter({ value, duration = 1 }) {
  const count = useMotionValue(0); // Valor de animação (começa em 0)
  
  // Transforma o valor decimal da animação em um número inteiro formatado
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString("pt-BR"); // Formata como 1.000, 50.000
  });

  useEffect(() => {
    // Quando o 'value' externo mudar, inicia a animação para o novo valor
    const controls = animate(count, value, { 
      duration: duration, 
      ease: "easeOut" // Começa rápido, desacelera no final (satisfatório)
    });
    
    return () => controls.stop(); // Limpa a animação se o componente desmontar
  }, [value, count, duration]);

  // Exibe o valor animado dentro de um span do Framer Motion
  return <motion.span>{rounded}</motion.span>;
}