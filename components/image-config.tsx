'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Image as ImageIcon } from 'lucide-react';
import { type LandingPageConfig } from '@/lib/config';
import { ImageManager } from '@/lib/image-manager';

interface ImageConfigProps {
  config: LandingPageConfig;
  onConfigChange: (config: LandingPageConfig) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageConfig({ config, onConfigChange, isOpen, onClose }: ImageConfigProps) {
  const [newGalleryImage, setNewGalleryImage] = useState('');
  const imageManager = new ImageManager(config);

  const handleProfileImageChange = (path: string) => {
    const newConfig = imageManager.updateImage({ type: 'profile', path });
    onConfigChange(newConfig);
  };

  const handleBackgroundImageChange = (path: string) => {
    const newConfig = imageManager.updateImage({ type: 'background', path });
    onConfigChange(newConfig);
  };

  const handleAddGalleryImage = () => {
    if (newGalleryImage && imageManager.validateImagePath(newGalleryImage)) {
      const newConfig = imageManager.updateImage({ type: 'gallery', path: newGalleryImage });
      onConfigChange(newConfig);
      setNewGalleryImage('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    const newConfig = imageManager.removeGalleryImage(index);
    onConfigChange(newConfig);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Image Configuration
              </CardTitle>
              <CardDescription>
                Update profile, background, and gallery images
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Image */}
          <div className="space-y-2">
            <Label htmlFor="profile-image">Profile Image</Label>
            <div className="flex gap-2">
              <Input
                id="profile-image"
                value={config.profileImage}
                onChange={(e) => handleProfileImageChange(e.target.value)}
                placeholder="/path/to/profile-image.jpg"
              />
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={config.profileImage}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder-user.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="space-y-2">
            <Label htmlFor="background-image">Background Image</Label>
            <div className="flex gap-2">
              <Input
                id="background-image"
                value={config.backgroundImage}
                onChange={(e) => handleBackgroundImageChange(e.target.value)}
                placeholder="/path/to/background-image.jpg"
              />
              <div className="w-16 h-16 rounded overflow-hidden border-2 border-gray-200">
                <img
                  src={config.backgroundImage}
                  alt="Background preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Gallery Images */}
          <div className="space-y-2">
            <Label>Gallery Images</Label>
            <div className="flex gap-2">
              <Input
                value={newGalleryImage}
                onChange={(e) => setNewGalleryImage(e.target.value)}
                placeholder="/path/to/gallery-image.jpg"
              />
              <Button onClick={handleAddGalleryImage} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              {config.galleryImages.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="w-16 h-16 rounded overflow-hidden border-2 border-gray-200">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveGalleryImage(index)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                  <Badge variant="secondary" className="absolute bottom-1 left-1 text-xs">
                    {index + 1}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Available Images */}
          <div className="space-y-2">
            <Label>Available Images</Label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {imageManager.getAvailableImages().map((image, index) => (
                <div
                  key={index}
                  className="p-2 border rounded cursor-pointer hover:bg-gray-50"
                  onClick={() => setNewGalleryImage(image)}
                >
                  {image}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
