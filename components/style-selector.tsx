'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { styleVariants, type LandingPageConfig } from '@/lib/config';

interface StyleSelectorProps {
  currentStyle: LandingPageConfig['style']['variant'];
  onStyleChange: (style: LandingPageConfig['style']['variant']) => void;
}

export function StyleSelector({ currentStyle, onStyleChange }: StyleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const styleDescriptions = {
    default: 'Original design with pink accents and soft blur',
    minimal: 'Clean, minimal design with subtle effects',
    dark: 'Dark theme with red accents and strong blur',
    colorful: 'Vibrant purple theme with rounded corners',
    elegant: 'Luxury gold theme with full rounded buttons'
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="bg-white/90 backdrop-blur-sm border-white/30 hover:bg-white/95"
      >
        🎨 Style: {currentStyle}
      </Button>
      
      {isOpen && (
        <Card className="absolute top-12 right-0 w-80 bg-white/95 backdrop-blur-sm border-white/30">
          <CardHeader>
            <CardTitle className="text-lg">Choose Style</CardTitle>
            <CardDescription>
              Select a different landing page style variant
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(styleVariants).map(([key, style]) => (
              <div
                key={key}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  currentStyle === key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => {
                  onStyleChange(key as LandingPageConfig['style']['variant']);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium capitalize">{key}</h3>
                    <p className="text-sm text-gray-600">{styleDescriptions[key as keyof typeof styleDescriptions]}</p>
                  </div>
                  {currentStyle === key && (
                    <Badge variant="default" className="bg-blue-500">
                      Active
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2 mt-2">
                  <div className={`w-4 h-4 rounded-full ${
                    key === 'default' ? 'bg-pink-400' :
                    key === 'minimal' ? 'bg-gray-600' :
                    key === 'dark' ? 'bg-red-500' :
                    key === 'colorful' ? 'bg-purple-500' :
                    'bg-yellow-400'
                  }`}></div>
                  <div className="w-4 h-4 rounded-full bg-white border"></div>
                  <div className={`w-4 h-4 rounded ${
                    key === 'default' ? 'rounded-2xl' :
                    key === 'minimal' ? 'rounded-lg' :
                    key === 'dark' ? 'rounded-xl' :
                    key === 'colorful' ? 'rounded-3xl' :
                    'rounded-full'
                  } bg-gray-300`}></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
