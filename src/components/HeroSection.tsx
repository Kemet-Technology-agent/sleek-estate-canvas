
import { ArrowRight, Play, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2000"
          alt="Luxury modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-gold-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">#1 Luxury Real Estate in the City</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover Your
              <span className="block text-gold-400">Dream Property</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Experience luxury living with our curated collection of premium properties. 
              From modern penthouses to architectural masterpieces.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$2B+</div>
                <div className="text-white/70 text-sm">Total Sales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-full group transition-all duration-300 transform hover:scale-105"
              >
                View Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tour
              </Button>
            </div>
          </div>

          {/* Right Side - Property Preview Card */}
          <div className="lg:justify-self-end animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400"
                alt="Featured property"
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-lg">Modern Penthouse Suite</h3>
                <div className="flex items-center text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  Downtown Manhattan, NY
                </div>
                <div className="text-2xl font-bold text-gold-400">$2,850,000</div>
                <div className="flex gap-4 text-white/70 text-sm">
                  <span>4 Beds</span>
                  <span>3 Baths</span>
                  <span>2,500 sq ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
