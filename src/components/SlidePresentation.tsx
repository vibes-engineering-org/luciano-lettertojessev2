"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: JSX.Element;
}

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Based House Devconnect",
      content: (
        <div className="text-center space-y-8">
          <h1 className="text-3xl font-bold text-primary">Based House Devconnect</h1>
          <p className="text-xl text-muted-foreground">by Kismet Casa</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "The Crew",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">The Crew</h2>
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Luciano, Lea & Rafi</p>
            <p className="text-sm leading-relaxed">
              The team behind Based House ETHDenver is teaming up with Kismet Casa to bring Based House to Buenos Aires during Devconnect. Kismet Casa was born in Argentina and is known for bringing Developers and Artists together around the world.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Recap Videos",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Recap Videos</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Homebase Denver</p>
              <a 
                href="https://zora.co/collect/zora:0x0dea6b5c7372b3414611e70e15e474521e0fc686/11?referrer=0x58f19e55058057b04feae2eea88f90b84b7714eb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xs break-all"
              >
                View on Zora
              </a>
            </div>
            <div>
              <p className="font-semibold mb-2">Kismet Casa Creator House</p>
              <a 
                href="https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/4?referrer=0x58f19e55058057b04feae2eea88f90b84b7714eb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xs break-all"
              >
                View on Zora
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Objective",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Objective</h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">
              Our goal is to provide opportunities for builders and creators in Argentina by hosting a residency that will accommodate 15 developers and artists during Devconnect Buenos Aires.
            </p>
            <p className="text-sm font-semibold text-center italic">
              We&apos;re not just bringing Base to Devconnect — we&apos;re making Devconnect Base.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "What is Kismet Casa & Homebase",
      content: (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-center">What is Kismet Casa & Homebase</h2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">
              <strong>Kismet Casa</strong> is a developer and artist-led residency program that creates space for cultural and technical exchange. Since 2023, we&apos;ve supported more than 60 residents from over 10 countries.
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Homebase</strong> is a community of based builders showcased using our livestream and our framework for bringing Based House to Ethereum events around the world; Starting with Based House ETHDenver and now expanding to Based House Devconnect.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Activities",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Activities</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">ETHGlobal Hackathon</h3>
              <p className="text-sm">Residents will join the ETHGlobal Buenos Aires hackathon to collaborate on creative and technical projects.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Onchain Art Hub</h3>
              <p className="text-sm">A public space to showcase, mint, and co-create — including workshops, exhibitions, and onchain drops.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Devconnect Attendance</h3>
              <p className="text-sm">Full access to the Devconnect week: main events, side events, and deep ecosystem connections.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Budget",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Budget</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold text-sm">Accommodation</p>
                <p className="text-xs text-muted-foreground">Rental of an Airbnb property for the full duration</p>
              </div>
              <p className="font-semibold text-sm">$15,000</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold text-sm">Operations</p>
                <p className="text-xs text-muted-foreground">Travel expenses, logistics, coordination</p>
              </div>
              <p className="font-semibold text-sm">$4,000</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold text-sm">Food & Essentials</p>
                <p className="text-xs text-muted-foreground">Grocery runs to keep the house stocked</p>
              </div>
              <p className="font-semibold text-sm">$2,000</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold text-sm">Events</p>
                <p className="text-xs text-muted-foreground">Materials for workshops and family dinners</p>
              </div>
              <p className="font-semibold text-sm">$2,000</p>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-semibold text-sm">Merch</p>
                <p className="text-xs text-muted-foreground">T-shirts, banners, stickers, and branding</p>
              </div>
              <p className="font-semibold text-sm">$2,000</p>
            </div>
            <div className="border-t pt-3 mt-4">
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Total Budget:</p>
                <p className="font-bold text-lg text-primary">$25,000 USD</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="p-6 min-h-[500px] flex flex-col">
        <div className="flex-1 mb-6">
          {slides[currentSlide].content}
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Slide counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </Card>
    </div>
  );
}