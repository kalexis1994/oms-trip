"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number>(0);

  // Preload audio on mount
  useEffect(() => {
    const loadAudio = async () => {
      try {
        const response = await fetch("/song.mp3");
        const arrayBuffer = await response.arrayBuffer();

        // Create audio context
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();

        // Decode audio data
        audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer);
        setDuration(audioBufferRef.current.duration);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading audio:", error);
      }
    };

    loadAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Handle visibility change - pause when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        pauseAudio();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const playAudio = () => {
    if (!audioContextRef.current || !audioBufferRef.current) return;

    // Resume context if suspended (iOS requirement)
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    // Create new source node
    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBufferRef.current;
    source.connect(audioContextRef.current.destination);

    // Start from where we paused
    const offset = pausedAtRef.current;
    source.start(0, offset);

    sourceNodeRef.current = source;
    startTimeRef.current = audioContextRef.current.currentTime - offset;
    setIsPlaying(true);

    // Handle audio end
    source.onended = () => {
      if (isPlaying) {
        setIsPlaying(false);
        pausedAtRef.current = 0;
      }
    };
  };

  const pauseAudio = () => {
    if (!audioContextRef.current || !sourceNodeRef.current) return;

    // Calculate current position
    pausedAtRef.current = audioContextRef.current.currentTime - startTimeRef.current;

    // Stop the source
    sourceNodeRef.current.stop();
    sourceNodeRef.current = null;
    setIsPlaying(false);
  };

  const handlePlay = () => {
    if (!isLoaded) return;
    setHasStarted(true);
    playAudio();
  };

  const handleResume = () => {
    playAudio();
  };

  return (
    <div className="min-h-dvh relative">
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/outliers_team.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Initial Play Screen - Only shown before first play */}
      <div
        className={`fixed inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          hasStarted ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center px-4" style={{ fontFamily: 'var(--font-exo)', color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)' }}>
          Outliers Under the Sun
        </h1>
        <button
          onClick={handlePlay}
          disabled={!isLoaded}
          className={`play-button w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#bf3c38] flex items-center justify-center cursor-pointer hover:bg-[#d44540] transition-colors shadow-2xl ${
            !isLoaded ? "opacity-50 cursor-wait" : ""
          }`}
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
          {isLoaded ? "Tap to play" : "Loading..."}
        </p>
      </div>

      {/* Floating Play/Pause Button - Always visible after starting */}
      {hasStarted && (
        <button
          onClick={isPlaying ? pauseAudio : handleResume}
          className="fixed top-3 right-3 z-40 w-10 h-10 rounded-full bg-[#bf3c38]/80 flex items-center justify-center cursor-pointer hover:bg-[#d44540] transition-all shadow-lg backdrop-blur-sm"
          aria-label={isPlaying ? "Pause song" : "Resume song"}
        >
          {isPlaying ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      )}

      {/* Lyrics Content - Fades in after first play */}
      <div
        className={`relative z-10 min-h-dvh flex flex-col transition-opacity duration-1500 ${
          hasStarted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: "1.5s", transitionDelay: "0.5s" }}
      >
        {/* Main Lyrics Section */}
        <main className="flex-1 overflow-hidden px-4 pt-16 pb-32">
          <div
            className="max-w-4xl mx-auto w-full lyrics-auto-scroll"
            style={{
              animationDuration: duration ? `${duration}s` : '180s',
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12" style={{ fontFamily: 'var(--font-exo)', color: '#ffffff', textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)' }}>
              Outliers Under the Sun
            </h1>

            <div className="lyrics-scroll space-y-10 text-white/90 text-center">
              {/* Verse 1 */}
              <div className="lyric-section">
                <p className="text-lg md:text-xl leading-relaxed">
                  We&apos;re here under the Riviera sun, at The Fives we&apos;ve begun,<br/>
                  Outliers crew together, where teamwork weighs a ton.<br/>
                  We dig deep like the mines we serve, finding ways to make it right,<br/>
                  From data to the open pit, we keep pushing through the night.
                </p>
              </div>

              {/* Pre-Chorus */}
              <div className="lyric-section">
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

      </div>

      {/* Footer - Always visible */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 py-2 bg-black/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/oms-logo.png"
            alt="Outliers Mining Solutions"
            className="h-6"
          />
          <p className="text-white/50 text-[10px]">
            Powered by <span className="font-semibold text-white/70">OTSI</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
