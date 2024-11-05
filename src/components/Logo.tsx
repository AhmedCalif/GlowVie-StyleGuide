import Link from "next/link";
import { Footer } from "./Footer";

export function Logo() {
  const navItems = [
    { href: "/logo", label: "Logo" },
    { href: "/colours", label: "Colours" },
    { href: "/typography", label: "Typography" },
    { href: "/graphics", label: "Graphics" },
    { href: "/references", label: "References" },
  ];

  const logoVariants = [
    {
      label: "Full Colour Logo",
      description: "Icon + Wordmark",
      image: "path/to/full-color-logo.png",
    },
    {
      label: "Black and White Logo",
      description: "Icon + Wordmark (Reversed)",
      image: "path/to/bw-logo.png",
    },
    {
      label: "Greyscale Logo",
      description: "Icon + Wordmark",
      image: "path/to/greyscale-logo.png",
    },
    {
      label: "Monochromatic Logo",
      description: "Icon + Wordmark",
      image: "path/to/monochrome-logo.png",
    },
    {
      label: "Horizontal Version of Full Colour Logo",
      description: "Icon + Wordmark",
      image: "path/to/horizontal-full-color-logo.png",
    },
    {
      label: "Stacked Version of Full Colour Logo",
      description: "Icon + Wordmark",
      image: "path/to/stacked-full-color-logo.png",
    },
  ];

  const faviconSizes = [
    { size: "16x16px", image: "path/to/favicon-16.png" },
    { size: "32x32px", image: "path/to/favicon-32.png" },
    { size: "48x48px", image: "path/to/favicon-48.png" },
  ];

  const colorPalette = [
    { name: "Primary Color", hex: "#0E233B" },
    { name: "Accent Color", hex: "#D6EAF8" },
    { name: "Secondary Color", hex: "#E6E1F3" },
    { name: "Highlight Color", hex: "#FF8833" },
    { name: "Background Color", hex: "#FFFFFF" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3]">
      <nav className="px-6 py-4 bg-[#0E233B] backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              {/* Insert your LogoSVG component here */}
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

      <main className="container mx-auto px-4 pt-32 pb-20 flex-grow">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <section className="space-y-8">
            <h2 className="md:text-3xl font-bold text-[#0E233B]">
              Logo Design
            </h2>
            <p className="text-lg text-[#0E233B]">
              The GlowVie logo combines a symbol and wordmark to convey a
              modern, friendly identity. The design choices in shape and font
              reflect the brand's values, ensuring adaptability for different
              sizes while maintaining clear spacing.
            </p>
            {logoVariants.map((variant, index) => (
              <div
                key={index}
                className="group hover:bg-[#D6EAF8]/20 p-4 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#0E233B]/60">
                    {variant.label}
                  </span>
                  <span className="text-sm text-[#0E233B]/60">
                    {variant.description}
                  </span>
                </div>
                <img
                  src={variant.image}
                  alt={variant.label}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}

            {/* Favicon Section */}
            <h3 className="text-2xl font-bold text-[#0E233B] mt-12">
              Favicon Variations
            </h3>
            <div className="space-y-4">
              {faviconSizes.map((favicon, index) => (
                <div
                  key={index}
                  className="group hover:bg-[#D6EAF8]/20 p-4 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#0E233B]/60">
                      Favicon {favicon.size}
                    </span>
                  </div>
                  <img
                    src={favicon.image}
                    alt={`Favicon ${favicon.size}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 mt-16">
            <h2 className="md:text-3xl font-bold text-[#0E233B]">
              Colour Palette
            </h2>
            <p className="text-lg text-[#0E233B]">
              The chosen color palette aligns with GlowVie’s friendly and
              vibrant theme, offering clear visual distinction for various UI
              elements and creating a cohesive, welcoming experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {colorPalette.map((color, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md"
                  style={{ backgroundColor: color.hex }}
                >
                  <p className="font-bold text-lg" style={{ color: "#FFFFFF" }}>
                    {color.name}
                  </p>
                  <p className="text-sm" style={{ color: "#FFFFFF" }}>
                    {color.hex}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#0E233B]">
                Button Variations
              </h3>
              <div className="flex flex-col space-y-4 mt-4">
                <button className="bg-[#FF8833] text-white font-bold py-2 px-4 rounded-lg">
                  Primary Button
                </button>
                <button className="bg-[#E6E1F3] text-[#0E233B] font-bold py-2 px-4 rounded-lg">
                  Secondary Button
                </button>
                <button className="bg-transparent border-2 border-[#0E233B] text-[#0E233B] font-bold py-2 px-4 rounded-lg">
                  Outlined Button
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
