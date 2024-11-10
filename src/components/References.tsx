import Link from "next/link";
import { Footer } from "./Footer";

export function References() {
  const navItems = [
    { href: "/logo", label: "Logo" },
    { href: "/colours", label: "Colours" },
    { href: "/typography", label: "Typography" },
    { href: "/graphics", label: "Graphics" },
    { href: "/references", label: "References" },
  ];

  const referenceSections = [
    {
      title: "Logo",
      description:
        "The GlowVie logo serves as the primary visual representation of our brand. To maintain brand consistency, always use the approved logo files, available in SVG and PNG formats. Ensure there is sufficient clear space around the logo for legibility, especially when placed on colored or patterned backgrounds. The minimum size for digital usage is 32px in height to maintain clarity. Avoid alterations such as rotating, stretching, or applying additional effects. Adhere to the recommended color scheme, primarily using the logo in #0E233B for dark backgrounds and #D6EAF8 for light backgrounds.",
    },
    {
      title: "Colors",
      description:
        "Our color palette is carefully crafted to convey GlowVie’s modern and friendly identity. Primary colors include #0E233B for main elements and #D6EAF8 as an accent. Secondary colors include softer shades for backgrounds and subtle accents. This palette supports accessibility with a contrast ratio that meets WCAG AA standards, ensuring legibility and inclusivity across all GlowVie platforms. Use our primary color for headings, buttons, and navigation, while secondary colors are suitable for backgrounds and subtle borders.",
    },
    {
      title: "Typography",
      description:
        "GlowVie uses the Comfortaa font family across all platforms, chosen for its modern and approachable aesthetic. Maintain consistency in text hierarchy by following the set font sizes: Heading 1 at 36px for main titles, Heading 2 at 28px for section titles, and body text at 16px. The primary weights include Light (300) for subtleties, Regular (400) for body text, Medium (500) for emphasis, and Bold (700) for headings. Line spacing should be 1.5x the font size for optimal readability. Avoid mixing different font families to maintain a cohesive look.",
    },
    {
      title: "Graphics",
      description:
        "Graphics in GlowVie include icons, illustrations, and other visual elements that enhance user engagement. Use icons from the GlowVie icon set, designed to reflect a clean and friendly style. Icons should align with our brand colors or remain monochromatic, based on the context. Keep graphics responsive, with a standard width of 24px for icons in navigation, and scale illustrations as needed. Ensure that images retain their intended aspect ratio, and avoid using overly complex visuals that might distract from the content.",
    },
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
              <Link
                key={item.href}
                href={item.href}
                className="text-[#D6EAF8] hover:text-[#D4EFDF] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-20 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0E233B] mb-6">
            Style Guide References
          </h2>
          <div className="bg-white/80 rounded-xl p-8 shadow-lg backdrop-blur-sm">
            {referenceSections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-bold text-[#0E233B]">
                  {section.title}
                </h3>
                <p className="text-[#0E233B]">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
