import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const COLORS = [
'#FF6B6B',
'#4ECDC4',
'#FFE66D',
'#FF9F1C',
'#FF99C8',
'#A2D2FF'];

const Balloon = ({
  delay,
  duration,
  xStart,
  color





}: {delay: number;duration: number;xStart: number;color: string;}) =>
<motion.div
  initial={{
    y: '110vh',
    x: `${xStart}%`,
    opacity: 0.8
  }}
  animate={{
    y: '-20vh',
    x: [`${xStart}%`, `${xStart + 10}%`, `${xStart - 10}%`, `${xStart}%`]
  }}
  transition={{
    y: {
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
      delay: delay
    },
    x: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }}
  className="absolute bottom-0 pointer-events-none z-0">

    <div className="relative">
      {/* Balloon Body */}
      <div
      className="w-12 h-16 rounded-[50%] shadow-inner"
      style={{
        backgroundColor: color,
        boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1)'
      }} />

      {/* String */}
      <div className="w-0.5 h-12 bg-gray-400 mx-auto opacity-50" />
      {/* Shine */}
      <div className="absolute top-3 left-3 w-3 h-6 bg-white rounded-[50%] opacity-30 rotate-45" />
    </div>
  </motion.div>;

const Confetti = ({
  delay,
  xStart,
  color




}: {delay: number;xStart: number;color: string;}) =>
<motion.div
  initial={{
    y: -20,
    x: `${xStart}%`,
    rotate: 0
  }}
  animate={{
    y: '100vh',
    rotate: 360,
    x: `${xStart + (Math.random() * 40 - 20)}%`
  }}
  transition={{
    duration: 4 + Math.random() * 2,
    delay: delay,
    repeat: Infinity,
    ease: 'linear'
  }}
  className="absolute top-0 w-3 h-3 rounded-sm pointer-events-none z-0"
  style={{
    backgroundColor: color
  }} />;


export function PartyOverlay() {
  const [items, setItems] = useState<
    Array<{
      id: number;
      type: 'balloon' | 'confetti';
      delay: number;
      xStart: number;
      color: string;
      duration: number;
    }>>(
    []);
  useEffect(() => {
    const newItems = Array.from({
      length: 25
    }).map((_, i) => ({
      id: i,
      type: i % 3 === 0 ? 'balloon' : 'confetti',
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      xStart: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
    setItems(newItems as any);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) =>
      item.type === 'balloon' ?
      <Balloon
        key={item.id}
        delay={item.delay}
        duration={item.duration}
        xStart={item.xStart}
        color={item.color} /> :


      <Confetti
        key={item.id}
        delay={item.delay}
        xStart={item.xStart}
        color={item.color} />


      )}
    </div>);

}