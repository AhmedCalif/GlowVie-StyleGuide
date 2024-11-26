/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Footer } from "./Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
      label: "Full Colour Logo/Stacked",
      description: "Icon + Wordmark",
      imageUrl: "/full-color-logo.svg",
    },
    {
      label: "Reversed Logo",
      description: "Icon + Wordmark",
      imageUrl: "/reverse-color-logo.svg",
    },
    {
      label: "Greyscale Logo",
      description: "Icon + Wordmark",
      imageUrl: "/greyscale-logo.svg",
    },
    {
      label: "Monochromatic Logo",
      description: "Icon + Wordmark",
      imageUrl: "/monochromatic-logo.svg",
    },
    {
      label: "Horizontal Logo",
      description: "Horizontal layout",
      imageUrl: "/horizontal-logo.svg",
      span: true,
    },
  ];

  const LogoCard = ({
    label,
    description,
    imageUrl,
    span = false,
  }: {
    label: string;
    description: string;
    imageUrl: string;
    span?: boolean;
  }) => (
    <div
      className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow ${
        span ? "md:col-span-2" : ""
      }`}
    >
      <Image
        src={imageUrl}
        alt={label}
        width={120}
        height={120}
        className="w-full h-auto mb-3"
      />
      <h4 className="font-comfortaa font-semibold">{label}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 py-4 bg-[#0E233B] backdrop-blur-sm sticky top-0 w-full z-50 shadow-sm">
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

      <div className="flex-grow flex flex-col bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3]">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="md:text-3xl font-bold text-[#0E233B]">
                Logo Design
              </h2>
              <p className="text-[#0E233B] text-lg">
                The GlowVie logo combines a symbol and wordmark to convey a
                modern, friendly identity. The design choices in shape and font
                reflect the brand's values, ensuring adaptability for different
                sizes and layouts.
              </p>
            </div>

            <Card className="border-2 border-[#D6EAF8] mb-12">
              <CardContent className="pt-6">
                <h3 className="text-xl font-comfortaa font-bold text-[#0E233B] mb-6">
                  Logo Variations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {logoVariants.map((variant, index) => (
                    <LogoCard key={index} {...variant} />
                  ))}
                </div>
                <div className="mt-8 space-y-4 mb-10">
                  <h3 className="text-xl font-comfortaa font-bold text-[#0E233B]">
                    Design Choices
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>High contrast icons for better visibility</li>
                    <li>Consistent sizing for clarity and brand alignment</li>
                    <li>Rounded corners for a softer, approachable feel</li>
                    <li>Subtle shadows for depth without distraction</li>
                    <li>Clear labels for accessibility</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
