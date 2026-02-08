import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, GiftIcon, PartyPopperIcon } from 'lucide-react';
interface AlbumCoverProps {
  onOpen: () => void;
}
export function AlbumCover({ onOpen }: AlbumCoverProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-primary)] perspective-1000"
      initial={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        rotateX: 90,
        transition: {
          duration: 0.8,
          ease: 'easeInOut'
        }
      }}>

      <motion.div
        className="relative w-[90%] max-w-md aspect-[3/4] bg-[var(--color-primary)] rounded-[3rem] cursor-pointer overflow-hidden group border-8 border-[var(--color-secondary)] shadow-[0_25px_0_rgba(0,0,0,0.2)]"
        onClick={onOpen}
        whileHover={{
          scale: 1.02,
          rotate: -2
        }}
        whileTap={{
          scale: 0.98
        }}
        initial={{
          rotateY: 0
        }}>

        {/* Colorful Pattern Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
            'radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%)',
            backgroundPosition: '0 0, 25px 25px',
            backgroundSize: '50px 50px'
          }} />


        {/* Decorative Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5
          }}
          className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--color-accent)] rounded-full opacity-80 blur-xl" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 7
          }}
          className="absolute -bottom-10 -right-10 w-56 h-56 bg-[var(--color-secondary)] rounded-full opacity-80 blur-xl" />


        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.3,
              type: 'spring',
              bounce: 0.6
            }}
            className="bg-white p-8 rounded-[2.5rem] shadow-[8px_8px_0_rgba(0,0,0,0.1)] border-4 border-[var(--color-accent)] w-full">

            <div className="flex justify-center mb-4">
              <PartyPopperIcon className="w-12 h-12 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2 font-display">
              It's Party Time!
            </h2>
            <h1 className="text-7xl font-display mb-6 text-[var(--color-primary)] drop-shadow-sm leading-[0.9]">
              Ramya's <br />{' '}
              <span className="text-[var(--color-secondary)] text-9xl drop-shadow-[4px_4px_0_#000]">
                1st
              </span>
            </h1>
            <div className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold text-xl animate-pulse border-4 border-[var(--color-secondary)] shadow-lg">
              Open!
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex gap-4"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}>

            <StarIcon className="w-12 h-12 text-[var(--color-secondary)] fill-current" />
            <GiftIcon className="w-12 h-12 text-white fill-current" />
            <StarIcon className="w-12 h-12 text-[var(--color-secondary)] fill-current" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>);

}