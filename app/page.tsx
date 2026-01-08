export default function Home() {
  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo placeholder - reemplazar con el logo real */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-outliers.svg"
              alt="Outliers Mining Solutions"
              className="h-12 w-auto"
            />
          </div>
          <div className="text-right">
            <p className="text-[#557cbf] font-bold text-sm uppercase tracking-wide">Team Trip 2025</p>
            <p className="text-[#5b6770] text-xs">Playa del Carmen, Mexico</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#557cbf] to-[#3c63a6] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-exo)' }}>
            Outliers Under the Sun
          </h1>
          <p className="text-xl opacity-90 mb-2">The Fives Beach Hotel & Residences</p>
          <p className="text-lg opacity-75">Playa del Carmen 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#f1f3f6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Trip Image */}
          <div className="card p-4 animate-fade-in">
            <div className="relative aspect-[4/3] bg-[#f1f3f6] rounded-lg overflow-hidden">
              {/* Imagen del viaje - reemplazar con la imagen real */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/trip-photo.svg"
                alt="Outliers Team at Playa del Carmen"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-4 text-[#5b6770] italic">
              The Outliers team enjoying the Riviera Maya
            </p>
          </div>

          {/* Song Intro Card */}
          <div className="card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#bf3c38] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#333]" style={{ fontFamily: 'var(--font-exo)' }}>Our Trip Anthem</h2>
                <p className="text-[#5b6770] text-sm">A song for our team</p>
              </div>
            </div>
            <p className="text-[#555] leading-relaxed mb-6">
              Esta canción celebra nuestro increíble viaje a Playa del Carmen,
              los lazos que hemos formado como equipo, y los momentos memorables
              que compartimos juntos. From Canada to Mexico&apos;s run —
              <span className="text-[#557cbf] font-semibold"> Outliers, together, under the sun.</span>
            </p>

            {/* Audio Player */}
            <div className="bg-[#f1f3f6] rounded-lg p-4">
              <p className="text-[#557cbf] font-semibold text-sm mb-3 uppercase tracking-wide">Listen Now</p>
              <audio
                controls
                className="w-full"
                preload="metadata"
              >
                <source src="/song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        {/* Lyrics Section */}
        <div className="card p-8 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#333] mb-2" style={{ fontFamily: 'var(--font-exo)' }}>
              Song Lyrics
            </h2>
            <div className="w-24 h-1 bg-[#bf3c38] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-[#555]">
            {/* Verse 1 */}
            <div>
              <h3 className="text-[#557cbf] font-bold uppercase text-sm tracking-wider mb-3">Verse 1</h3>
              <p className="lyrics-container">
                We&apos;re here under the Riviera sun, at The Fives we&apos;ve begun,
                Outliers crew together, where teamwork weighs a ton.
                We dig deep like the mines we serve, finding ways to make it right,
                From data to the open pit, we keep pushing through the night.
              </p>
            </div>

            {/* Pre-Chorus */}
            <div>
              <h3 className="text-[#557cbf] font-bold uppercase text-sm tracking-wider mb-3">Pre-Chorus</h3>
              <p className="lyrics-container">
                We watch the waves crash on the shore,
                But in our minds we&apos;re mining more—
                Not gold or copper in the ground,
                But bonds that won&apos;t break, ties we&apos;ve found.
              </p>
            </div>

            {/* Chorus */}
            <div className="bg-[#f1f3f6] p-6 rounded-lg border-l-4 border-[#bf3c38]">
              <h3 className="text-[#bf3c38] font-bold uppercase text-sm tracking-wider mb-3">Chorus</h3>
              <p className="lyrics-container font-medium">
                We&apos;re the Outliers under the sun,
                Working hard and having fun.
                From fleet control to dispatch lines,
                Together we&apos;re better every time.
                Raise a toast to every shift,
                And to the laughs that gave us lift—
                Outliers under the sun,
                Our story&apos;s only just begun.
              </p>
            </div>

            {/* Verse 2 */}
            <div>
              <h3 className="text-[#557cbf] font-bold uppercase text-sm tracking-wider mb-3">Verse 2</h3>
              <p className="lyrics-container">
                Last year&apos;s tale still makes us grin,
                Jerred woke up like, &quot;Man, where&apos;ve I been?&quot;
                In Adam&apos;s bed, the morning light,
                No clue at all how ended the night.
                Nothing weird, just laughs and shame,
                A classic story, no one to blame.
              </p>
            </div>

            {/* Bridge */}
            <div>
              <h3 className="text-[#557cbf] font-bold uppercase text-sm tracking-wider mb-3">Bridge</h3>
              <p className="lyrics-container">
                Now this year he&apos;s walking strong,
                Two months sober, proving wrong
                Every doubt, he raised the bar—
                We cheer him on just as we are.
              </p>
            </div>

            {/* Chorus 2 */}
            <div className="bg-[#f1f3f6] p-6 rounded-lg border-l-4 border-[#bf3c38]">
              <h3 className="text-[#bf3c38] font-bold uppercase text-sm tracking-wider mb-3">Chorus</h3>
              <p className="lyrics-container font-medium">
                We&apos;re the Outliers under the sun,
                Working hard and having fun.
                From fleet control to dispatch lines,
                Together we&apos;re better every time.
                Raise a toast—beer or lime—
                It&apos;s the people that matter, not the wine.
                Outliers under the sun,
                Our story&apos;s only just begun.
              </p>
            </div>

            {/* Outro */}
            <div className="text-center pt-4">
              <h3 className="text-[#557cbf] font-bold uppercase text-sm tracking-wider mb-3">Outro</h3>
              <p className="lyrics-container italic text-lg">
                So here&apos;s to trust and here&apos;s to growth,
                To lessons learned and inside jokes,
                From Canada to Mexico&apos;s run—
                <span className="block mt-2 text-[#bf3c38] font-bold not-italic">Outliers, together, under the sun.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Team/Hotel Logos Section */}
        <div className="card p-8 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold text-[#333] text-center mb-8" style={{ fontFamily: 'var(--font-exo)' }}>
            Our Partners in Paradise
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Logo placeholders - reemplazar con logos reales */}
            <div className="w-40 h-20 bg-[#f1f3f6] rounded-lg flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-outliers.svg"
                alt="Outliers Mining Solutions"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-40 h-20 bg-[#f1f3f6] rounded-lg flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-hotel.svg"
                alt="The Fives Beach Hotel"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Agregar más logos según sea necesario */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-exo)' }}>
            Outliers Mining Solutions
          </p>
          <p className="text-[#999] text-sm">
            Team Trip 2025 - Playa del Carmen, Mexico
          </p>
          <p className="text-[#666] text-xs mt-4">
            &copy; {new Date().getFullYear()} Outliers Mining Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
