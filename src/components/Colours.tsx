import Link from "next/link";
import { Footer } from "./Footer";
import Image from "next/image";

// Importing the images
import lavenderComparison from "./images/lavender_comparison.png";
import mintComparison from "./images/mint_comparison.png";
import skyComparison from "./images/sky_comparison.png";
import loginExample from "./images/0.3 Login.png";
import homeExample from "./images/Progress Page Componenets.png";
import goalExample from "./images/0.7 Profile.png";
import progressExample from "./images/0.6 Progress.png";

export function Colours() {
  const navItems = [
    { href: "/logo", label: "Logo" },
    { href: "/colours", label: "Colours" },
    { href: "/typography", label: "Typography" },
    { href: "/graphics", label: "Graphics" },
    { href: "/references", label: "References" },
  ];

  

  const colors = [
    { name: "Navy Blue", hex: "#0E233B" },
    { name: "Light Sky", hex: "#D6EAF8" },
    { name: "Violet Blue", hex: "#461BB5" },
    { name: "Pastel Green", hex: "#4CAF50" },
  ];

  const contrastImages = [
    {
      img: lavenderComparison,
      text: "These colours pass the contrast check for small and large text at 8.15, ensuring visibility for everyone with different vision capabilities.",
    },
    {
      img: skyComparison,
      text: "These colours pass the contrast check for small and large text to a high degree at 12.96, ensuring visibility for everyone with different vision capabilities.",
    },
    {
      img: mintComparison,
      text: "These colours pass the contrast check for small and large text at 5.71, ensuring visibility for everyone with different vision capabilities.",
    },
  ];

  const exampleImages = [
    { img: loginExample, alt: "Login Example", text: "Login Page Design" },
    { img: homeExample, alt: "Home Example", text: "Home Page Design" },
    {
      img: progressExample,
      alt: "Progress Example",
      text: "Progress Page Design",
    },
    { img: goalExample, alt: "Goals Example", text: "Goal Page Design" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3]">
      <nav className="px-6 py-4 bg-[#0E233B] backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
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
          <div className="space-y-6 text-center md:text-left">
            <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">
              Colours
            </h2>
            <p className="text-[#0E233B] text-2xl">
              We chose our colors with the goal of creating a calm and soothing
              environment for the app. The primary color was selected for its
              gentle, relaxing qualities, while the accent colors were picked to
              complement and enhance the overall aesthetic. Warm and cool tones
              were balanced to provide a sense of tranquility and positivity,
              ensuring the palette feels both inviting and nurturing, perfect
              for a self-care experience. The overall goal was to evoke feelings
              of comfort and well-being through thoughtful color choices.
            </p>
          </div>
          <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">
            Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {colors.map((color) => (
              <div key={color.hex} className="text-center">
                <div
                  className="w-full h-64 rounded-md shadow-md"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className="mt-4 font-bold text-lg text-[#0E233B]">
                  {color.name}
                </p>
                <p className="text-[#0E233B]">{color.hex}</p>
              </div>
            ))}
          </div>
          <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">
            Colour Accessibility
          </h2>
          <p className="text-[#0E233B] text-l">
            Our colour contrast is tested by both a Figma plugin and the website
            Coolors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contrastImages.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <Image
                  src={item.img}
                  alt={`Contrast test ${index + 1}`}
                  className="rounded-md shadow-md"
                />
                <p className="text-[#0E233B] text-base">{item.text}</p>
              </div>
            ))}
          </div>
          <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">
            Examples
          </h2>
          <p className="text-[#0E233B] text-l">
            Examples of how the colour palette is applied to our app.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exampleImages.map((example, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <Image
                  src={example.img}
                  alt={example.alt}
                  className="rounded-md shadow-md"
                  height={800}
                />
                <p className="text-[#0E233B] text-base">{example.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
