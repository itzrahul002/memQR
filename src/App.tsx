import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QrCodeIcon } from 'lucide-react';
import { AlbumCover } from './components/AlbumCover';
import { CoverPage } from './components/CoverPage';
import { PersonSection } from './components/PersonSection';
import { QRCodeModal } from './components/QRCodeModal';
export function App() {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
  const [selectedView, setSelectedView] = useState<'child' | 'party' | null>(
    null
  );
  const [showQR, setShowQR] = useState(false);
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden font-serif">
      {/* QR Code Button - Always visible in corner */}
      <button
        onClick={() => setShowQR(true)}
        className="fixed top-4 right-4 z-[60] p-3 bg-white shadow-xl rounded-full text-[var(--color-primary)] hover:scale-125 transition-transform border-4 border-[var(--color-primary)] animate-bounce"
        title="Show QR Code">

        <QrCodeIcon className="w-6 h-6" />
      </button>

      <QRCodeModal isOpen={showQR} onClose={() => setShowQR(false)} />

      <AnimatePresence mode="wait">
        {/* State 1: Closed Album */}
        {!isAlbumOpen &&
        <AlbumCover key="album-cover" onOpen={() => setIsAlbumOpen(true)} />
        }

        {/* State 2: Cover Page (Main Menu) */}
        {isAlbumOpen && !selectedView &&
        <CoverPage key="cover-page" onSelectView={setSelectedView} />
        }

        {/* State 3: Details (Child, Party, or Parents) */}
        {isAlbumOpen && selectedView &&
        <PersonSection
          key={`section-${selectedView}`}
          view={selectedView}
          onBack={() => setSelectedView(null)} />

        }
      </AnimatePresence>
    </div>);

}