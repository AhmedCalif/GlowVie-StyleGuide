import Link from "next/link";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

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
      image: "/full-color-logo.svg",
    },
    {
      label: "Reversed Logo",
      description: "Icon + Wordmark",
      image: "/reverse-color-logo.svg",
    },
    {
      label: "Greyscale Logo",
      description: "Icon + Wordmark",
      image: "/greyscale-logo.svg",
    },
    {
      label: "Monochromatic Logo",
      description: "Icon + Wordmark",
      image: "/monochromatic-logo.svg",
    },
    {
      label: "Horizontal Version of Full Colour Logo",
      description: "Icon + Wordmark",
      image: "/horizontal-logo.svg",
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
              <img
                src="/glowLogo.svg"
                alt="GlowVie Logo"
                className="w-full h-auto rounded-lg"
              />
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
                  style={{
                    width:
                      variant.label === "Horizontal Version of Full Colour Logo"
                        ? "300px"
                        : "120px",
                    height: "auto",
                  }}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}

            {/* <h3 className="text-2xl font-bold text-[#0E233B] mt-12">
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
            </div> */}
          </section>

          {/* <section className="space-y-8 ">
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
          </section> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
