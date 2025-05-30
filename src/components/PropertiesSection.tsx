
import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Penthouse",
      location: "Manhattan, NY",
      price: "$2,850,000",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
      featured: true
    },
    {
      id: 2,
      title: "Modern Villa",
      location: "Beverly Hills, CA",
      price: "$4,200,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600"
    },
    {
      id: 3,
      title: "Contemporary Condo",
      location: "Miami Beach, FL",
      price: "$1,650,000",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600"
    },
    {
      id: 4,
      title: "Architectural Masterpiece",
      location: "Malibu, CA",
      price: "$6,500,000",
      beds: 6,
      baths: 5,
      sqft: "5,500",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=600"
    },
    {
      id: 5,
      title: "Urban Loft",
      location: "Brooklyn, NY",
      price: "$985,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600"
    },
    {
      id: 6,
      title: "Waterfront Estate",
      location: "Hamptons, NY",
      price: "$8,750,000",
      beds: 7,
      baths: 6,
      sqft: "7,200",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of luxury properties, each offering 
            unique architectural excellence and premium amenities.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden rounded-2xl animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                {property.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full p-0 bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
                
                <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {property.title}
                </h3>
                
                <div className="text-2xl font-bold text-navy-800 mb-4">
                  {property.price}
                </div>
                
                <div className="flex items-center justify-between text-gray-600 text-sm border-t pt-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.sqft} sq ft
                  </div>
                </div>

                <Button className="w-full mt-4 bg-navy-800 hover:bg-navy-700 text-white rounded-xl py-2.5 transition-all duration-300 transform group-hover:scale-105">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
