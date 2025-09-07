import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { type LandingPageConfig } from "@/lib/config"

interface LandingPageProps {
  config: LandingPageConfig;
}

export function LandingPage({ config }: LandingPageProps) {
  const { name, welcomeMessage, profileImage, backgroundImage, galleryImages, links, style } = config;

  const getButtonStyles = () => {
    const baseStyles = "w-full h-14 backdrop-blur-md border transition-all duration-300 text-white font-medium text-lg group";
    
    switch (style.variant) {
      case 'minimal':
        return `${baseStyles} bg-gray-800/30 border-gray-600/30 hover:bg-gray-800/40 ${style.borderRadius}`;
      case 'dark':
        return `${baseStyles} bg-black/50 border-red-500/30 hover:bg-black/60 ${style.borderRadius}`;
      case 'colorful':
        return `${baseStyles} bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-purple-400/30 hover:from-purple-500/40 hover:to-pink-500/40 ${style.borderRadius}`;
      case 'elegant':
        return `${baseStyles} bg-gradient-to-r from-yellow-600/30 to-yellow-400/30 border-yellow-400/30 hover:from-yellow-600/40 hover:to-yellow-400/40 ${style.borderRadius}`;
      default:
        return `${baseStyles} bg-black/30 border-white/30 hover:bg-black/40 ${style.borderRadius}`;
    }
  };

  const getBackgroundOverlay = () => {
    switch (style.variant) {
      case 'minimal':
        return "bg-gray-900/50";
      case 'dark':
        return "bg-black/60";
      case 'colorful':
        return "bg-purple-900/40";
      case 'elegant':
        return "bg-yellow-900/30";
      default:
        return "bg-black/40";
    }
  };

  const getProfileBorderStyle = () => {
    switch (style.variant) {
      case 'minimal':
        return "border-gray-400/30";
      case 'dark':
        return "border-red-400/40";
      case 'colorful':
        return "border-purple-400/40";
      case 'elegant':
        return "border-yellow-400/40";
      default:
        return "border-white/20";
    }
  };

  const getAccentColor = () => {
    switch (style.variant) {
      case 'minimal':
        return "text-gray-300";
      case 'dark':
        return "text-red-400";
      case 'colorful':
        return "text-purple-400";
      case 'elegant':
        return "text-yellow-400";
      default:
        return "text-pink-400";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className={`object-cover ${style.backgroundBlur} scale-110`}
          priority
        />
        <div className={`absolute inset-0 ${getBackgroundOverlay()}`} />
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
                className={`rounded-full object-cover border-4 ${getProfileBorderStyle()} shadow-2xl`}
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
                    <span className={`${getAccentColor()} font-semibold`}>spicy</span>
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
                className={getButtonStyles()}
              >
                <a href={links.f2f} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 border-white ${
                      style.variant === 'colorful' ? 'bg-purple-500' : 
                      style.variant === 'elegant' ? 'bg-yellow-500' : 
                      'bg-purple-500'
                    }`}>
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
                className={getButtonStyles()}
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
                className={getButtonStyles()}
              >
                <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-white ${
                      style.variant === 'colorful' ? 'bg-purple-400' : 
                      style.variant === 'elegant' ? 'bg-yellow-400' : 
                      'bg-blue-400'
                    }`}>
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
                    className={`flex-shrink-0 w-16 h-24 ${style.borderRadius} overflow-hidden border-2 ${getProfileBorderStyle()} hover:border-white/40 transition-colors cursor-pointer relative`}
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
                    className={`flex-shrink-0 w-16 h-24 ${style.borderRadius} overflow-hidden border-2 ${getProfileBorderStyle()} hover:border-white/40 transition-colors cursor-pointer relative`}
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
                    className={`flex-shrink-0 w-16 h-24 ${style.borderRadius} overflow-hidden border-2 ${getProfileBorderStyle()} hover:border-white/40 transition-colors cursor-pointer relative`}
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
