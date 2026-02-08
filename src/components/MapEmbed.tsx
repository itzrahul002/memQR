import React, { lazy, Component } from 'react';
interface MapEmbedProps {
  location: string;
  title: string;
}
export function MapEmbed({ location, title }: MapEmbedProps) {
  return (
    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-[var(--gold)] relative bg-gray-100">
      <iframe
        title={title}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{
          border: 0
        }}
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location)}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full">

        {/* Fallback for demo since we don't have a real API key */}
        <div className="flex items-center justify-center h-full w-full bg-[var(--cream)] text-[var(--deep-maroon)] p-4 text-center">
          <p>Map View: {title}</p>
        </div>
      </iframe>
      {/* Since we don't have a real API key, we'll overlay a static map representation or just a placeholder message for the demo */}
      <div className="absolute inset-0 bg-[var(--cream)] flex flex-col items-center justify-center text-[var(--deep-maroon)] z-10 pointer-events-none">
        <span className="text-4xl mb-2">📍</span>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm opacity-75">Click to open in Google Maps</p>
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-20 cursor-pointer"
        aria-label={`Open map for ${title}`} />

    </div>);

}