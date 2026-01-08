"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/outliers_team.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} preload="metadata">
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {/* Initial Play Screen */}
      <div
        className={`fixed inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-8 text-center px-4 drop-shadow-lg" style={{ fontFamily: 'var(--font-exo)' }}>
          Outliers Under the Sun
        </h1>
        <button
          onClick={handlePlay}
          className="play-button w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#bf3c38] flex items-center justify-center cursor-pointer hover:bg-[#d44540] transition-colors shadow-2xl"
          aria-label="Play song"
        >
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-white ml-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
        <p className="text-white/70 mt-6 text-sm uppercase tracking-widest">
          Tap to play
        </p>
      </div>

      {/* Lyrics Content - Fades in after play */}
      <div
        className={`relative z-10 min-h-screen flex flex-col transition-opacity duration-1500 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1.5s", transitionDelay: "0.5s" }}
      >
        {/* Main Lyrics Section */}
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-4xl w-full">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-lg" style={{ fontFamily: 'var(--font-exo)' }}>
              Outliers Under the Sun
            </h1>

            <div className="lyrics-scroll space-y-10 text-white/90 text-center">
              {/* Verse 1 */}
              <div className="lyric-section">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Verse 1</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  We&apos;re here under the Riviera sun, at The Fives we&apos;ve begun,<br/>
                  Outliers crew together, where teamwork weighs a ton.<br/>
                  We dig deep like the mines we serve, finding ways to make it right,<br/>
                  From data to the open pit, we keep pushing through the night.
                </p>
              </div>

              {/* Pre-Chorus */}
              <div className="lyric-section">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Pre-Chorus</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  We watch the waves crash on the shore,<br/>
                  But in our minds we&apos;re mining more—<br/>
                  Not gold or copper in the ground,<br/>
                  But bonds that won&apos;t break, ties we&apos;ve found.
                </p>
              </div>

              {/* Chorus */}
              <div className="lyric-section bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#bf3c38]">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Chorus</p>
                <p className="text-xl md:text-2xl leading-relaxed font-medium">
                  We&apos;re the Outliers under the sun,<br/>
                  Working hard and having fun.<br/>
                  From fleet control to dispatch lines,<br/>
                  Together we&apos;re better every time.<br/>
                  Raise a toast to every shift,<br/>
                  And to the laughs that gave us lift—<br/>
                  Outliers under the sun,<br/>
                  Our story&apos;s only just begun.
                </p>
              </div>

              {/* Verse 2 */}
              <div className="lyric-section">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Verse 2</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Last year&apos;s tale still makes us grin,<br/>
                  Jerred woke up like, &quot;Man, where&apos;ve I been?&quot;<br/>
                  In Adam&apos;s bed, the morning light,<br/>
                  No clue at all how ended the night.<br/>
                  Nothing weird, just laughs and shame,<br/>
                  A classic story, no one to blame.
                </p>
              </div>

              {/* Bridge */}
              <div className="lyric-section">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Bridge</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Now this year he&apos;s walking strong,<br/>
                  Two months sober, proving wrong<br/>
                  Every doubt, he raised the bar—<br/>
                  We cheer him on just as we are.
                </p>
              </div>

              {/* Chorus 2 */}
              <div className="lyric-section bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#bf3c38]">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Chorus</p>
                <p className="text-xl md:text-2xl leading-relaxed font-medium">
                  We&apos;re the Outliers under the sun,<br/>
                  Working hard and having fun.<br/>
                  From fleet control to dispatch lines,<br/>
                  Together we&apos;re better every time.<br/>
                  Raise a toast—beer or lime—<br/>
                  It&apos;s the people that matter, not the wine.<br/>
                  Outliers under the sun,<br/>
                  Our story&apos;s only just begun.
                </p>
              </div>

              {/* Outro */}
              <div className="lyric-section pt-8">
                <p className="text-[#bf3c38] font-bold uppercase text-xs tracking-[0.3em] mb-4">Outro</p>
                <p className="text-xl md:text-2xl leading-relaxed italic">
                  So here&apos;s to trust and here&apos;s to growth,<br/>
                  To lessons learned and inside jokes,<br/>
                  From Canada to Mexico&apos;s run—
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#bf3c38] mt-4 not-italic">
                  Outliers, together, under the sun.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
            {/* OMS Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-outliers.svg"
              alt="Outliers Mining Solutions"
              className="h-10 brightness-0 invert"
            />
            <p className="text-white/60 text-sm">
              Powered by <span className="font-semibold text-white/80">OTSI</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
