# Multi-Style Landing Page Template

A flexible, configurable landing page template with multiple style variants and easy image management.

## Features

- 🎨 **5 Different Style Variants**: Default, Minimal, Dark, Colorful, and Elegant
- 🖼️ **Easy Image Management**: Simple interface to update profile, background, and gallery images
- ⚡ **Real-time Style Switching**: Switch between styles instantly without page reload
- 📱 **Responsive Design**: Works perfectly on all device sizes
- 🔧 **Configurable**: Easy to customize content, links, and styling

## Style Variants

### 1. Default
- Original design with pink accents
- Soft background blur
- Rounded corners (2xl)

### 2. Minimal
- Clean, minimal design
- Gray color scheme
- Medium background blur
- Rounded corners (lg)

### 3. Dark
- Dark theme with red accents
- Strong background blur
- Rounded corners (xl)

### 4. Colorful
- Vibrant purple and pink gradients
- Soft background blur
- Extra rounded corners (3xl)

### 5. Elegant
- Luxury gold theme
- Medium background blur
- Fully rounded buttons

## How to Use

### Style Switching
1. Click the "🎨 Style: [current]" button in the top-right corner
2. Select your preferred style from the dropdown
3. The page will instantly update with the new style

### Image Management
1. Click the "⚙️ Images" button in the top-left corner
2. Update your profile image, background image, or gallery images
3. Use the available images list or add custom image paths
4. Changes are applied immediately

### Configuration

The main configuration is in `lib/config.ts`:

```typescript
export const defaultConfig: LandingPageConfig = {
  name: "Emiliya",
  welcomeMessage: "Welcome.. find my spicy links here. Will you send me a message babe?",
  profileImage: "/beautiful-woman-portrait-professional-headshot.jpg",
  backgroundImage: "/beautiful-woman-portrait-soft-lighting.jpg",
  galleryImages: [
    "/fashion-model-photo-.jpg",
    "/beautiful-woman-portrait-professional-headshot.jpg",
    // ... more images
  ],
  links: {
    onlyfans: "#",
    f2f: "#",
    telegram: "#"
  },
  style: {
    variant: 'default',
    primaryColor: 'pink-400',
    secondaryColor: 'white',
    backgroundBlur: 'blur-sm',
    borderRadius: 'rounded-2xl'
  }
};
```

## File Structure

```
├── app/
│   ├── page.tsx              # Main page with style switching
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── landing-page.tsx      # Main landing page component
│   ├── style-selector.tsx    # Style switching component
│   ├── image-config.tsx      # Image management component
│   └── ui/                   # UI components
├── lib/
│   ├── config.ts             # Configuration and style variants
│   ├── image-manager.ts      # Image management utilities
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
    ├── beautiful-woman-portrait-professional-headshot.jpg
    ├── beautiful-woman-portrait-soft-lighting.jpg
    ├── fashion-model-photo-.jpg
    └── ... other images
```

## Adding New Images

1. **Add to public folder**: Place your images in the `public/` directory
2. **Update via UI**: Use the image configuration panel
3. **Update config**: Modify `lib/config.ts` directly

### Image Requirements
- **Profile Image**: Square aspect ratio recommended (e.g., 400x400px)
- **Background Image**: Landscape orientation recommended (e.g., 1920x1080px)
- **Gallery Images**: Any aspect ratio, will be cropped to square

## Customizing Styles

To add a new style variant:

1. Add the variant to `styleVariants` in `lib/config.ts`:
```typescript
export const styleVariants = {
  // ... existing variants
  myNewStyle: {
    variant: 'myNewStyle' as const,
    primaryColor: 'blue-500',
    secondaryColor: 'white',
    backgroundBlur: 'blur-md',
    borderRadius: 'rounded-xl'
  }
};
```

2. Update the `LandingPage` component to handle the new style in the switch statements

3. Add a description in the `StyleSelector` component

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your projects!
