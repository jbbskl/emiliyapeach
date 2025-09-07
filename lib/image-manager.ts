import { type LandingPageConfig } from './config';

export interface ImageUpdate {
  type: 'profile' | 'background' | 'gallery';
  path: string;
  index?: number; // For gallery images
}

export class ImageManager {
  private config: LandingPageConfig;

  constructor(config: LandingPageConfig) {
    this.config = config;
  }

  updateImage(update: ImageUpdate): LandingPageConfig {
    const newConfig = { ...this.config };

    switch (update.type) {
      case 'profile':
        newConfig.profileImage = update.path;
        break;
      case 'background':
        newConfig.backgroundImage = update.path;
        break;
      case 'gallery':
        if (update.index !== undefined) {
          newConfig.galleryImages[update.index] = update.path;
        } else {
          newConfig.galleryImages.push(update.path);
        }
        break;
    }

    return newConfig;
  }

  removeGalleryImage(index: number): LandingPageConfig {
    const newConfig = { ...this.config };
    newConfig.galleryImages.splice(index, 1);
    return newConfig;
  }

  reorderGalleryImages(fromIndex: number, toIndex: number): LandingPageConfig {
    const newConfig = { ...this.config };
    const [movedItem] = newConfig.galleryImages.splice(fromIndex, 1);
    newConfig.galleryImages.splice(toIndex, 0, movedItem);
    return newConfig;
  }

  getAvailableImages(): string[] {
    // Return only the uploaded photos
    return [
      '/0310B82F-8FFA-4DCB-A358-A4785940DF81.JPG',
      '/24F76A0E-FC0D-4ACF-A3A4-66D285097A1A.JPG',
      '/5F7AF329-9471-4DB4-877A-D8C183CAFB59.JPG',
      '/AFDFA674-4FA2-472D-AE14-DA1E66FC2163.JPG',
      '/emiliya (319).jpg',
      '/emiliya (351).jpg',
      '/emiliya (507).jpg',
      '/emiliya (540).jpg',
      '/emiliya (69).jpg',
      '/beautiful-woman-portrait-professional-headshot.jpg',
      '/beautiful-woman-portrait-soft-lighting.jpg'
    ];
  }

  validateImagePath(path: string): boolean {
    // Basic validation - check if path starts with / and has common image extensions
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    return path.startsWith('/') && validExtensions.some(ext => path.toLowerCase().endsWith(ext));
  }
}

// Helper function to create a new config with updated images
export function createConfigWithImages(
  baseConfig: LandingPageConfig,
  profileImage?: string,
  backgroundImage?: string,
  galleryImages?: string[]
): LandingPageConfig {
  return {
    ...baseConfig,
    profileImage: profileImage || baseConfig.profileImage,
    backgroundImage: backgroundImage || baseConfig.backgroundImage,
    galleryImages: galleryImages || baseConfig.galleryImages,
  };
}
