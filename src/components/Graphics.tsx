import Link from "next/link";
import { Camera, Shield, Heart, Bell, Calendar, MessageSquare, type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from "./Footer";

export function Graphics() {
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

  const iconGroups = [
    {
      title: "Icons",
      icons: [
        { icon: MessageSquare, label: "Messages", description: "User communication" },
        { icon: Bell, label: "Notifications", description: "Important updates" },
        { icon: Calendar, label: "Calendar", description: "Event scheduling" },
      ]
    },
     {
      title: "Buttons",
      icons: [
        { icon: MessageSquare, label: "Messages", description: "User communication" },
        { icon: Bell, label: "Notifications", description: "Important updates" },
        { icon: Calendar, label: "Calendar", description: "Event scheduling" },
      ]
    }
  ];

  const brandPhotos = [
    {
      title: "Casual Blue",
      description: "Model wearing our signature navy blue casual wear",
      imageUrl: "/api/placeholder/600/400",
      accent: "#0E233B"
    },
    {
      title: "Sky Essence",
      description: "Street style featuring our sky blue palette",
      imageUrl: "/api/placeholder/600/400",
      accent: "#D6EAF8"
    },
    {
      title: "Mint Harmony",
      description: "Active wear in our refreshing mint tone",
      imageUrl: "/api/placeholder/600/400",
      accent: "#D4EFDF"
    },
    {
      title: "Lavender Dreams",
      description: "Evening wear showcasing our lavender accent",
      imageUrl: "/api/placeholder/600/400",
      accent: "#E6E1F3"
    }
  ];

  const IconCard = ({ icon: Icon, label, description }: { icon: LucideIcon, label: string, description: string }) => (
    <div className="bg-white/90 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-[#D6EAF8] p-3 rounded-full w-fit mb-3">
        <Icon className="w-6 h-6 text-[#0E233B]" />
      </div>
      <h4 className="font-comfortaa font-semibold mb-1">{label}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const PhotoCard = ({ title, description, imageUrl, accent }: {title: string, description: string, imageUrl: string, accent: string}) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: accent }}
        />
      </div>
      <div className="p-4">
        <h4 className="font-comfortaa font-semibold text-lg mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

 return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-6 py-4 bg-[#0E233B] backdrop-blur-sm sticky top-0 w-full z-50 shadow-sm">
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

      <div className="flex-grow flex flex-col bg-gradient-to-br from-[#D6EAF8] to-[#E6E1F3]">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="md:text-3xl font-bold text-[#0E233B] inset-x-px">Graphics</h2>
              <p className="text-[#0E233B] text-2xl font-comfortaa">
                For the Graphics, we wanted to showcase some icons/buttons and imagery we are going to use for GlowVie. 
              </p>
            </div>

            <Card className="border-2 border-[#D6EAF8]">
              <CardContent className="pt-6">
                {iconGroups.map((group, idx) => (
                  <div key={group.title} className={`mb-8 ${idx !== 0 ? 'mt-12' : ''}`}>
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

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-comfortaa font-bold text-[#0E233B]">Design Choices</h3>
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

            <Card className="border-2 border-[#D6EAF8]">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-comfortaa font-bold text-[#0E233B]">Imagery</h3>
                  <p className="text-gray-700">
                    Our brand's imagery showcases the versatility of our color palette in real-world applications,
                    demonstrating how our carefully selected colors complement various styles and occasions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {brandPhotos.map((photo, index) => (
                      <PhotoCard key={index} {...photo} />
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
