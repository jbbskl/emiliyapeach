export interface LandingPageConfig {
  name: string;
  welcomeMessage: string;
  profileImage: string;
  backgroundImage: string;
  galleryImages: string[];
  links: {
    onlyfans?: string;
    f2f?: string;
    telegram?: string;
  };
  style: {
    variant: 'default' | 'minimal' | 'dark' | 'colorful' | 'elegant';
    primaryColor: string;
    secondaryColor: string;
    backgroundBlur: string;
    borderRadius: string;
  };
}

export const defaultConfig: LandingPageConfig = {
  name: "Emiliya",
  welcomeMessage: "Welcome.. find my spicy links here. Will you send me a message babe?",
  profileImage: "/5F7AF329-9471-4DB4-877A-D8C183CAFB59.JPG",
  backgroundImage: "/24F76A0E-FC0D-4ACF-A3A4-66D285097A1A.JPG",
  galleryImages: [
    "/0310B82F-8FFA-4DCB-A358-A4785940DF81.JPG",
    "/24F76A0E-FC0D-4ACF-A3A4-66D285097A1A.JPG",
    "/5F7AF329-9471-4DB4-877A-D8C183CAFB59.JPG",
    "/AFDFA674-4FA2-472D-AE14-DA1E66FC2163.JPG",
    "/emiliya (319).jpg",
    "/emiliya (351).jpg",
    "/emiliya (507).jpg",
    "/emiliya (540).jpg",
    "/emiliya (69).jpg"
  ],
  links: {
    f2f: "#",
    fansly: "#",
    telegram: "https://t.me/+fGvixgmt_-84YWY0"
  },
  style: {
    variant: 'default',
    primaryColor: 'pink-400',
    secondaryColor: 'white',
    backgroundBlur: 'blur-sm',
    borderRadius: 'rounded-2xl'
  }
};

export const styleVariants = {
  default: {
    variant: 'default' as const,
    primaryColor: 'pink-400',
    secondaryColor: 'white',
    backgroundBlur: 'blur-sm',
    borderRadius: 'rounded-2xl'
  },
  minimal: {
    variant: 'minimal' as const,
    primaryColor: 'gray-600',
    secondaryColor: 'white',
    backgroundBlur: 'blur-md',
    borderRadius: 'rounded-lg'
  },
  dark: {
    variant: 'dark' as const,
    primaryColor: 'red-500',
    secondaryColor: 'gray-100',
    backgroundBlur: 'blur-lg',
    borderRadius: 'rounded-xl'
  },
  colorful: {
    variant: 'colorful' as const,
    primaryColor: 'purple-500',
    secondaryColor: 'white',
    backgroundBlur: 'blur-sm',
    borderRadius: 'rounded-3xl'
  },
  elegant: {
    variant: 'elegant' as const,
    primaryColor: 'yellow-400',
    secondaryColor: 'white',
    backgroundBlur: 'blur-md',
    borderRadius: 'rounded-full'
  }
};
