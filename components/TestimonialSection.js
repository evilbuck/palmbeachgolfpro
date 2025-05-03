'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "8 Handicap Golfer",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "After just 5 sessions, I've knocked 3 strokes off my handicap. The detailed video analysis of my swing made all the difference.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Beginner Golfer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "As someone who had never played golf before, I was intimidated. The coaching team made me feel comfortable and I'm now confidently playing full rounds!",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Collegiate Player",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The attention to detail in every aspect of my game has been incredible. My driving distance has increased by 15 yards and my approach shots are more accurate than ever.",
      rating: 5
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600">
            Hear what our clients have to say about their transformation on the course.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}