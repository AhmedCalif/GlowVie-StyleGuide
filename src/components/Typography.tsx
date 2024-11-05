import Link from "next/link";

export function Typography() {
  const navItems = [
    { href: '/logo', label: 'Logo' },
    { href: '/colours', label: 'Colours' },
    { href: '/typography', label: 'Typography' },
    { href: '/graphics', label: 'Graphics' },
    { href: '/references', label: 'References' }
  ];

  const LogoSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="90" fill="#0E233B"/>
      <path d="M100 140 C100 140 60 110 60 80C60 60 75 50 90 50C95 50 100 52 100 52C100 52 105 50 110 50C125 50 140 60 140 80C140 110 100 140 100 140Z" 
            fill="#D6EAF8" stroke="#E6E1F3" strokeWidth="3"/>
      <circle cx="75" cy="75" r="5" fill="#D4EFDF"/>
      <circle cx="125" cy="75" r="5" fill="#D4EFDF"/>
    </svg>
  );

  const fontSamples = [
    { weight: 300, text: "Light", sample: "Hello GlowVie" },
    { weight: 400, text: "Regular", sample: "Design System" },
    { weight: 500, text: "Medium", sample: "Typography" },
    { weight: 600, text: "Semi Bold", sample: "Comfortaa" },
    { weight: 700, text: "Bold", sample: "Font Family" }
  ];

  const headingSamples = [
    { level: "Heading 1", use: "Main page titles", example: "Welcome to GlowVie" },
    { level: "Heading 2", use: "Section titles", example: "Typography System" },
    { level: "Heading 3", use: "Sub-sections", example: "Font Weights" },
    { level: "Heading 4", use: "Card titles", example: "Component Title" },
    { level: "Heading 5", use: "Minor headings", example: "Small Section" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3]">
      <nav className="px-6 py-4 bg-[#0E233B] backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <LogoSVG />
            </div>
            <span className="font-bold text-xl text-[#D6EAF8]">GlowVie</span>
          </Link>
          
          <div className="flex-wrap gap-8 hidden md:flex">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 text-[#D6EAF8] hover:text-[#D4EFDF] transition-colors group"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    <main className="container mx-auto px-4 pt-32 pb-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">Fonts</h2>
          <p className="text-[#0E233B] text-2xl">
            For GlowVie we are going to use the Comfortaa Font. Comfortaa is a modern and easy to use font that represents
            our brand aesthethics
          </p>
        </div>

        <div className="bg-white/80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-[#0E233B] mb-8">Font Weights</h3>
            {fontSamples.map((sample, index) => (
              <div 
                key={index}
                className="group hover:bg-[#D6EAF8]/20 p-4 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#0E233B]/60">{sample.text}</span>
                  <span className="text-sm text-[#0E233B]/60">{sample.weight}</span>
                </div>
                <p 
                  className="text-4xl text-[#0E233B] transition-all duration-300 group-hover:tracking-wide"
                  style={{ 
                    fontFamily: 'Comfortaa',
                    fontWeight: sample.weight,
                  }}
                >
                  {sample.sample}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#0E233B] mb-8">Headings</h3>
            <div className="space-y-8">
              {headingSamples.map((heading, index) => (
                <div 
                  key={index}
                  className="group hover:bg-[#D6EAF8]/20 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#0E233B]/60">{heading.level}</span>
                    <span className="text-sm text-[#0E233B]/60">{heading.use}</span>
                  </div>
                  <p className="text-[#0E233B] font-comfortaa">
                    {heading.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#D6EAF8]/20 rounded-lg text-center">
              <p className="font-comfortaa text-3xl mb-2">Aa</p>
              <span className="text-sm text-[#0E233B]/60">Clean</span>
            </div>
            <div className="p-4 bg-[#D6EAF8]/20 rounded-lg text-center">
              <p className="font-comfortaa text-3xl mb-2">Oo</p>
              <span className="text-sm text-[#0E233B]/60">Modern</span>
            </div>
            <div className="p-4 bg-[#D6EAF8]/20 rounded-lg text-center">
              <p className="font-comfortaa text-3xl mb-2">Gg</p>
              <span className="text-sm text-[#0E233B]/60">Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}