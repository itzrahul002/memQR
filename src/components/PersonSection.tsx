import React, { useRef, Component } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  PlayIcon,
  HeartIcon,
  GiftIcon,
  CakeIcon,
  SmileIcon,
  UsersIcon } from
'lucide-react';
import { MapEmbed } from './MapEmbed';
interface PersonSectionProps {
  view: 'child' | 'party' | 'parents';
  onBack: () => void;
}
const DATA = {
  child: {
    title: 'Meet Ramya',
    subtitle: 'Our Little Prince',
    heroImage:
    './uploads/intro1200-800.png',
    introText:
    "A year filled with giggles, first steps, and endless joy. Watch Aarav's journey from his first day to his first birthday!",
    gallery: [
    './uploads/intro2-1200-800.png',
    './uploads/intro1-1200-800.png',
    './uploads/intro3-1200-800.png']

  },
  parents: {
    title: 'The Family',
    subtitle: 'Hosted with Love',
    heroImage:
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200',
    father: {
      name: 'Rajesh Sharma',
      role: 'Proud Dad',
      image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800'
    },
    mother: {
      name: 'Sunita Sharma',
      role: 'Loving Mom',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800'
    },
    message:
    'We are overjoyed to share this milestone with our friends and family. Your blessings mean the world to us!'
  },
  party: {
    title: 'Celebration',
    subtitle: 'Join the Fun!',
    heroImage:
    './uploads/party1200-800.png',
    functions: [
    {
      title: 'Cake Cutting',
      date: 'February 14, 2026',
      day: 'Sunday',
      time: '5:00 PM',
      venue: 'Spencer Plaza, Chennai',
      image:
      './uploads/party2-1200-800.png',
      mapLocation: 'Spencer Plaza',
      color: 'var(--color-primary)'
    },
    {
      title: 'Dinner & Games',
      date: 'February 14, 2026',
      day: 'Sunday',
      time: '7:00 PM',
      venue: 'Spencer Plaza, Chennai',
      image:
      './uploads/party3-1200-800.png',
      mapLocation: 'Spencer Plaza',
      color: 'var(--color-accent)'
    }]

  }
};
export function PersonSection({ view, onBack }: PersonSectionProps) {
  const data = DATA[view];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef
  });
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen bg-[var(--color-bg)] overflow-x-hidden"
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: 100
      }}
      transition={{
        duration: 0.5
      }}>

      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{
          scale: 1.2,
          rotate: -10
        }}
        whileTap={{
          scale: 0.9
        }}
        className="fixed top-6 left-6 z-50 p-4 bg-white rounded-full shadow-[0_4px_0_rgba(0,0,0,0.2)] border-4 border-[var(--color-primary)] text-[var(--color-primary)]">

        <ArrowLeftIcon className="w-8 h-8 stroke-[3]" />
      </motion.button>

      {/* Hero Section */}
      <header className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b-8 border-[var(--color-secondary)]">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
            scale: headerScale
          }}>

          <div className="absolute inset-0 bg-[var(--color-primary)]/40 mix-blend-multiply z-10" />
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover" />

        </motion.div>

        {/* Zig Zag Bottom Border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-[var(--color-bg)] z-20"
          style={{
            backgroundImage:
            'linear-gradient(45deg, transparent 75%, var(--color-bg) 75%), linear-gradient(-45deg, transparent 75%, var(--color-bg) 75%)',
            backgroundSize: '40px 40px'
          }} />


        <motion.div
          className="relative z-20 text-center text-white px-4 mt-10"
          style={{
            y: headerY
          }}>

          <motion.div
            initial={{
              y: -50,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: 0.3,
              type: 'spring'
            }}
            className="inline-block bg-[var(--color-secondary)] text-[var(--color-text)] px-8 py-3 rounded-full font-bold mb-4 shadow-lg transform -rotate-3 border-4 border-white">

            {data.subtitle}
          </motion.div>
          <motion.h1
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 0.5,
              type: 'spring',
              bounce: 0.5
            }}
            className="text-7xl md:text-9xl font-display text-white drop-shadow-[0_6px_0_var(--color-primary)] stroke-black">

            {data.title}
          </motion.h1>
        </motion.div>
      </header>

      {/* Content Sections */}
      <div className="relative z-10 bg-[var(--color-bg)] pb-20 px-4 md:px-8 pt-12">
        {view === 'child' &&
        <div className="py-4 max-w-4xl mx-auto">
            {/* CHILD SECTION */}
            <motion.div
            initial={{
              y: 50,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            className="bg-white p-10 rounded-[3rem] shadow-[12px_12px_0_var(--color-accent)] border-8 border-[var(--color-primary)] mb-16 text-center transform rotate-1 relative overflow-hidden">

              {/* Decorative Background Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-[var(--color-secondary)] rounded-br-full opacity-20" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-[var(--color-secondary)] rounded-tl-full opacity-20" />

              <SmileIcon className="w-16 h-16 text-[var(--color-secondary)] mx-auto mb-6 animate-bounce" />
              <h2 className="text-5xl font-display text-[var(--color-primary)] mb-6">
                Growing Up Fast!
              </h2>
              <p className="text-2xl text-[var(--color-text)] leading-relaxed font-medium relative z-10">
                {(data as typeof DATA.child).introText}
              </p>
            </motion.div>

            {/* Cartoon Divider */}
            <div className="h-16 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNSBRIDEwIDEwIDIwIDUgVCA0MCA1IiBzdHJva2U9IiNGRjAwMzMiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPjwvc3ZnPg==')] bg-repeat-x bg-center mb-16 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
              {(data as typeof DATA.child).gallery.map((img, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: i * 0.2,
                type: 'spring'
              }}
              whileHover={{
                scale: 1.05,
                rotate: i % 2 === 0 ? 3 : -3
              }}
              className={`rounded-[2rem] overflow-hidden shadow-[8px_8px_0_rgba(0,0,0,0.1)] border-8 border-white ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>

                  <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover" />

                </motion.div>
            )}
            </div>
          </div>
        }

        {view === 'parents' && <div />}

        {view === 'party' &&
        <div className="py-4 max-w-3xl mx-auto space-y-16">
            {(data as typeof DATA.party).functions.map((func, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              type: 'spring',
              bounce: 0.5
            }}
            whileHover={{
              scale: 1.02
            }}
            className="bg-white rounded-[3rem] shadow-[10px_10px_0_rgba(0,0,0,0.1)] overflow-hidden border-8 border-white"
            style={{
              borderColor: func.color
            }}>

                <div className="h-64 overflow-hidden relative">
                  <img
                src={func.image}
                alt={func.title}
                className="w-full h-full object-cover" />

                  <div className="absolute top-4 right-4 bg-white px-6 py-2 rounded-full font-bold text-xl shadow-lg border-2 border-black">
                    {func.time}
                  </div>
                </div>

                <div className="p-8 text-center relative">
                  <h3
                className="text-5xl font-display mb-4 drop-shadow-sm"
                style={{
                  color: func.color
                }}>

                    {func.title}
                  </h3>

                  <div className="space-y-3 mb-8 text-xl text-gray-600 font-medium">
                    <div className="flex items-center justify-center gap-3">
                      <CalendarIcon className="w-6 h-6 text-[var(--color-primary)]" />
                      <span>
                        {func.date} ({func.day})
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <MapPinIcon className="w-6 h-6 text-[var(--color-primary)]" />
                      <span>{func.venue}</span>
                    </div>
                  </div>

                  <motion.button
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.9
                }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-xl shadow-lg border-4 border-white/20"
                style={{
                  backgroundColor: func.color
                }}
                onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(func.mapLocation)}`,
                  '_blank'
                )
                }>

                    <MapPinIcon className="w-6 h-6" />
                    View Map
                  </motion.button>
                </div>
              </motion.div>
          )}
          </div>
        }

        {/* Footer */}
        <div className="text-center mt-20 pb-10">
          <p className="font-display text-5xl text-[var(--color-primary)] mb-8 drop-shadow-sm">
            See you there!
          </p>
          <div className="flex justify-center gap-8">
            <motion.div
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5
              }}>

              <GiftIcon className="w-16 h-16 text-[var(--color-bubblegum)]" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 0.2
              }}>

              <CakeIcon className="w-16 h-16 text-[var(--color-secondary)]" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 0.4
              }}>

              <SmileIcon className="w-16 h-16 text-[var(--color-accent)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>);

}