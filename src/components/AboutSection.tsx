
import { Award, Users, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Top Producer",
      description: "Ranked #1 agent for 5 consecutive years"
    },
    {
      icon: Users,
      title: "500+ Clients",
      description: "Successfully served over 500 satisfied clients"
    },
    {
      icon: TrendingUp,
      title: "$2B+ Sales",
      description: "Generated over $2 billion in property sales"
    },
    {
      icon: Shield,
      title: "Licensed Expert",
      description: "15+ years of certified real estate expertise"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Investor",
      content: "Exceptional service and market knowledge. Found us the perfect investment property.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b367?q=80&w=100"
    },
    {
      name: "Michael Chen",
      role: "First-time Buyer",
      content: "Made the home buying process seamless and stress-free. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Luxury Client",
      content: "Incredible attention to detail and understanding of luxury market dynamics.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
    }
  ];

  const services = [
    "Luxury Property Sales",
    "Investment Consulting",
    "Market Analysis",
    "Property Valuation",
    "Negotiation Expertise",
    "Post-Sale Support"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
                alt="Professional real estate agent"
                className="w-full rounded-3xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800">15+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
              Meet Your Luxury
              <span className="block text-gold-500">Real Estate Expert</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in luxury real estate, I've built my reputation 
              on delivering exceptional results and personalized service to discerning clients.
            </p>
            
            <p className="text-gray-600 mb-8">
              My deep understanding of market trends, combined with a vast network of industry 
              connections, ensures that every transaction is handled with the utmost 
              professionalism and expertise.
            </p>

            {/* Services List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-navy-800 mb-4">Client Testimonials</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
