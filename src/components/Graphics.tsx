/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "./Footer";
import Image from "next/image";
import React from "react";
import { HomePageIcon, ProgressIcon, MascotIcon } from "./CustomSvgs";
import { Button } from "./ui/button";

export function Graphics() {
  const navItems = [
    { href: "/logo", label: "Logo" },
    { href: "/colours", label: "Colours" },
    { href: "/typography", label: "Typography" },
    { href: "/graphics", label: "Graphics" },
    { href: "/references", label: "References" },
  ];
  const iconGroups = [
    {
      title: "Icons",
      icons: [
        {
          icon: HomePageIcon,
          label: "Homepage Icon",
          description: "To navigate to the homepage",
        },
        {
          icon: ProgressIcon,
          label: "Progress Icon",
          description: "Progress Tracking",
        },
        {
          icon: MascotIcon,
          label: "Mascot Icon",
          description: "For Mascot page",
        },
      ],
    },
  ];
  const imageryGuidelines = [
    {
      title: "Oxford Blue (#0E233B)",
      description: "Rich, deep navy conveying authority and depth",
      images: [
        {
          url: "https://savviformalwear.com/wp-content/uploads/2019/03/indigo_wedding_suit-1-scaled.jpg",
          alt: "Deep navy blue abstract texture",
        },
      ],
      accent: "#0E233B",
    },
    {
      title: "Columbia Blue (#D6EAF8)",
      description: "Pure, ethereal columbia blue expressing clarity",
      images: [
        {
          url: "https://columbia.scene7.com/is/image/ColumbiaSportswear2/1372111_490_f_om?wid=768&hei=806&v=1730099369",
          alt: "Clear sky with soft Columbia blue tones",
        },
      ],
      accent: "#D6EAF8",
    },
    {
      title: "Soft Lavender (#E6E1F3)",
      description: "Delicate lavender shade embodying tranquility",
      images: [
        {
          url: "https://cdn130.picsart.com/353832347022201.jpg",
          alt: "Soft lavender flowers in a serene garden",
        },
      ],
      accent: "#E6E1F3",
    },
    {
      title: "HoneyDew (#D4EFDF)",
      description: "Fresh, soft mint green radiating serenity",
      images: [
        {
          url: "https://i.pinimg.com/736x/75/e5/83/75e583a7209703533c85eb10a62fc9fa.jpg",
          alt: "Fresh mint leaves on a clean white background",
        },
      ],
      accent: "#D4EFDF",
    },
  ];

  const PhotoCard = ({
    title,
    description,
    images,
    accent,
  }: {
    title: string;
    description: string;
    images: { url: string; alt: string }[];
    accent: string;
  }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 max-w-xl">
      <div className="mb-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden bg-gray-100 h-[350px] w-full"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
            <div
              className="absolute inset-0 mix-blend-color opacity-20"
              style={{ backgroundColor: accent }}
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <h4 className="font-comfortaa font-semibold text-lg flex items-center gap-2">
          {title}
          <span
            className="inline-block w-4 h-4 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

  const IconCard = ({
    icon: Icon,
    label,
    description,
  }: {
    icon: React.FC;
    label: string;
    description: string;
  }) => (
    <div className="bg-white/90 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-[#D6EAF8] p-3 rounded-full w-fit mb-3">
        <Icon />
      </div>
      <h4 className="font-comfortaa font-semibold mb-1">{label}</h4>
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
              <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">
                Graphics
              </h2>
              <p className="text-[#0E233B] text-2xl font-comfortaa">
                For the Graphics, we wanted to showcase some icons/buttons and
                imagery we are going to use for GlowVie.
              </p>
            </div>

            <Card className="border-2 border-[#D6EAF8]">
              <CardContent className="pt-6">
                {iconGroups.map((group, idx) => (
                  <div
                    key={group.title}
                    className={`mb-8 ${idx !== 0 ? "mt-12" : ""}`}
                  >
                    <h3 className="text-xl font-comfortaa font-bold text-[#0E233B] mb-6">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {group.icons.map((icon, index) => (
                        <IconCard key={index} {...icon} />
                      ))}
                    </div>
                  </div>
                ))}

                <h2 className="text-2xl 'font-comfortaa font-semibold mb-1 ">
                  Buttons
                </h2>
                <p className=" font-comfortaa text-gray-800">
                  For our app, this button will be the main button style to
                  naviagte, and do something with, This button will have
                  multiple colors symbolozing the CTA a user needs to do to
                  navigate through our app
                </p>
                <Button
                  variant="secondary"
                  className="rounded-full bg-[#461BB5] text-white hover:bg-gray-800 mt-4"
                >
                  Button
                </Button>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-comfortaa font-bold text-[#0E233B]">
                    Design Choices
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>High contrast icons for better visibility</li>
                    <li>Consistent 24px sizing for clear recognition</li>
                    <li>Rounded corners matching our brand style</li>
                    <li>Soft shadows for subtle depth</li>
                    <li>Descriptive labels for accessibility</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D6EAF8] mb-12">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-comfortaa font-bold text-[#0E233B]">
                    Imagery
                  </h3>
                  <p className="text-gray-700">
                    Our brand's imagery showcases the versatility of our color
                    palette in real-world applications, demonstrating how our
                    carefully selected colors complement various styles and
                    occasions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {imageryGuidelines.map((photo, index) => (
                      <PhotoCard
                        key={index}
                        title={photo.title}
                        description={photo.description}
                        images={photo.images}
                        accent={photo.accent}
                      />
                    ))}
                  </div>
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
