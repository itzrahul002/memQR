import React from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  PartyPopperIcon,
  ChevronRightIcon,
  StarIcon,
  UsersIcon } from
'lucide-react';
import { PartyOverlay } from './PartyOverlay';
interface CoverPageProps {
  onSelectView: (view: 'child' | 'party' | 'parents') => void;
}
export function CoverPage({ onSelectView }: CoverPageProps) {
  return (
    <motion.div
      className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-[var(--color-bg)]"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.8
      }}>

      <PartyOverlay />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Header Text - Bouncing Animation */}
        <motion.div
          className="text-center mb-8 relative"
          initial={{
            y: -100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.2,
            type: 'spring',
            bounce: 0.6
          }}>

          <div className="bg-white px-10 py-6 rounded-[2rem] shadow-[8px_8px_0_var(--color-primary)] border-4 border-[var(--color-accent)] transform -rotate-2 hover:rotate-2 transition-transform duration-300">
            <h2 className="text-4xl md:text-6xl font-display text-[var(--color-primary)] mb-2 drop-shadow-sm">
              You're Invited!
            </h2>
            <p className="font-bold text-2xl text-[var(--color-text)]">
              to Ramya's 1st Birthday
            </p>
          </div>
        </motion.div>

        {/* Child Photo Frame - Rotating & Scaling */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
          initial={{
            scale: 0,
            rotate: -180
          }}
          animate={{
            scale: 1,
            rotate: 0
          }}
          transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5
          }}>

          <div className="absolute inset-0 bg-[var(--color-secondary)] rounded-full transform translate-x-4 translate-y-4" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
            <img
              src="/uploads/front.png"
              alt="Birthday Child"
              className="w-full h-full object-cover" />

          </div>

          {/* Name Badge */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[var(--color-primary)] text-white px-10 py-3 rounded-full border-4 border-white shadow-lg"
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut'
            }}>

            <h1 className="text-5xl font-display tracking-wide">Ramya</h1>
          </motion.div>

          {/* Floating Icons */}
          <StarIcon className="absolute -top-6 -right-6 w-16 h-16 text-[var(--color-secondary)] fill-current animate-[spin_3s_linear_infinite]" />
          <StarIcon className="absolute top-1/2 -left-10 w-10 h-10 text-[var(--color-accent)] fill-current animate-bounce" />
        </motion.div>

        {/* Navigation Buttons - Staggered Entrance */}
        <div className="flex flex-col gap-5 w-full max-w-sm z-20">
          <NavButton
            label="Meet Ramya"
            icon={<UserIcon className="w-6 h-6" />}
            onClick={() => onSelectView('child')}
            delay={0.8}
            color="var(--color-accent)" />

          <NavButton
            label="Party Details"
            icon={<PartyPopperIcon className="w-6 h-6" />}
            onClick={() => onSelectView('party')}
            delay={1.2}
            color="var(--color-secondary)"
            textColor="var(--color-text)" />

        </div>
      </div>
    </motion.div>);

}
function NavButton({
  label,
  icon,
  onClick,
  delay,
  color,
  textColor = 'white'







}: {label: string;icon: React.ReactNode;onClick: () => void;delay: number;color: string;textColor?: string;}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{
        x: -100,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{
        scale: 1.05,
        x: 10
      }}
      whileTap={{
        scale: 0.95
      }}
      style={{
        backgroundColor: color,
        color: textColor
      }}
      className="group relative w-full py-4 px-6 rounded-2xl shadow-[0_6px_0_rgba(0,0,0,0.15)] flex items-center justify-between overflow-hidden border-4 border-white">

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          {icon}
        </div>
        <span className="font-display text-2xl tracking-wide">{label}</span>
      </div>
      <ChevronRightIcon
        className={`w-8 h-8 ${textColor === 'white' ? 'text-white' : 'text-[var(--color-text)]'} group-hover:translate-x-2 transition-transform`} />

    </motion.button>);

}