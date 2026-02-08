import React, { useState, createElement, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  DownloadIcon,
  QrCodeIcon,
  ShareIcon,
  CopyIcon } from
'lucide-react';
interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}
export function QRCodeModal({
  isOpen,
  onClose,
  url = window.location.href
}: QRCodeModalProps) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
  const [copyLabel, setCopyLabel] = useState('Copy Link');
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ramya's 1st Birthday",
          text: "You're invited to Ramya's 1st Birthday Bash!",
          url: url
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copy
      navigator.clipboard.writeText(url);
      setCopyLabel('Copied!');
      setTimeout(() => setCopyLabel('Copy Link'), 2000);
    }
  };
  const handleDownload = async () => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'aarav-birthday-qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      window.open(qrUrl, '_blank');
    }
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}>

          <motion.div
          initial={{
            scale: 0.8,
            rotate: -5
          }}
          animate={{
            scale: 1,
            rotate: 0
          }}
          exit={{
            scale: 0.8,
            rotate: 5
          }}
          className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full shadow-[10px_10px_0_var(--color-primary)] border-8 border-[var(--color-secondary)] relative text-center"
          onClick={(e) => e.stopPropagation()}>

            <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[var(--color-bg)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors border-2 border-[var(--color-text)]">

              <XIcon className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <div className="w-20 h-20 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg animate-bounce">
                <QrCodeIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-display text-[var(--color-primary)]">
                Scan to Join!
              </h2>
              <p className="text-[var(--color-text)] mt-2 font-bold">
                Share the fun with friends & family
              </p>
            </div>

            <div className="bg-white p-4 rounded-3xl border-4 border-dashed border-[var(--color-primary)] inline-block shadow-inner mb-8 transform rotate-2 hover:rotate-0 transition-transform">
              <img
              src={qrUrl}
              alt="Invitation QR Code"
              className="w-48 h-48 object-contain" />

            </div>

            <div className="flex flex-col gap-3">
              <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-secondary)] text-[var(--color-text)] rounded-xl hover:scale-105 transition-transform font-bold border-b-4 border-[rgba(0,0,0,0.1)]">

                <ShareIcon className="w-5 h-5" />
                {navigator.share ? 'Share Invitation' : copyLabel}
              </button>

              <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-primary)] text-white rounded-xl hover:scale-105 transition-transform font-bold border-b-4 border-[rgba(0,0,0,0.2)]">

                <DownloadIcon className="w-5 h-5" />
                Download QR Code
              </button>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}