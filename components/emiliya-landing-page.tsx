import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { type LandingPageConfig } from "@/lib/config"

interface EmiliyaLandingPageProps {
  config: LandingPageConfig;
}

export function EmiliyaLandingPage({ config }: EmiliyaLandingPageProps) {
  const { name, welcomeMessage, profileImage, backgroundImage, galleryImages, links } = config;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover blur-sm scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Profile Section */}
          <div className="text-center space-y-4">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold text-white text-balance">{name}</h1>

            {/* Welcome Message */}
            <p className="text-white/90 text-lg leading-relaxed text-balance">
              {welcomeMessage.split('spicy').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <span className="text-pink-400 font-semibold">spicy</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* Link Buttons */}
          <div className="space-y-4">
            {links.f2f && (
              <Button
                asChild
                className="w-full h-14 bg-black/30 backdrop-blur-md border border-white/30 hover:bg-black/40 transition-all duration-300 text-white font-medium text-lg rounded-2xl group"
              >
                <a href={links.f2f} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold text-sm">F2F</span>
                    </div>
                    <span>F2F</span>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            )}

            {links.fansly && (
              <Button
                asChild
                className="w-full h-14 bg-black/30 backdrop-blur-md border border-white/30 hover:bg-black/40 transition-all duration-300 text-white font-medium text-lg rounded-2xl group"
              >
                <a href={links.fansly} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/FANSLY-Posts-48.png"
                        alt="Fansly"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover scale-125"
                      />
                    </div>
                    <span>Fansly</span>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            )}

            {links.telegram && (
              <Button
                asChild
                className="w-full h-14 bg-black/30 backdrop-blur-md border border-white/30 hover:bg-black/40 transition-all duration-300 text-white font-medium text-lg rounded-2xl group"
              >
                <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                    </div>
                    <span>Join my FREE CHANNEL</span>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            )}
          </div>

          {/* Gallery Preview */}
          <div className="pt-8">
            <div className="relative overflow-hidden">
              <div className="flex gap-3 animate-scroll-right-slow opacity-50 hover:opacity-70 transition-opacity duration-300">
                {/* First set of images */}
                {galleryImages.map((image, i) => (
                  <div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors cursor-pointer relative"
                  >
                    <Image
                      src={image}
                      alt={`Preview ${i + 1}`}
                      width={64}
                      height={96}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                ))}
                {/* Second set of images for infinite loop */}
                {galleryImages.map((image, i) => (
                  <div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors cursor-pointer relative"
                  >
                    <Image
                      src={image}
                      alt={`Preview ${i + 1}`}
                      width={64}
                      height={96}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                ))}
                {/* Third set of images for seamless infinite loop */}
                {galleryImages.map((image, i) => (
                  <div
                    key={`third-${i}`}
                    className="flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors cursor-pointer relative"
                  >
                    <Image
                      src={image}
                      alt={`Preview ${i + 1}`}
                      width={64}
                      height={96}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
