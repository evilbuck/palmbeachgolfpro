export default function FeatureSection({ features }) {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Golf Instruction
          </h2>
          <p className="text-gray-600">
            We offer comprehensive golf coaching tailored to players of all skill levels, from beginners to advanced competitors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Improvement Program
              </h2>
              <p className="text-gray-600 mb-6">
                Our holistic approach addresses all aspects of your game, from driving distance to putting precision, and everything in between.
              </p>
              <ul className="space-y-3">
                {[
                  "Full swing analysis using advanced technology",
                  "Short game mastery sessions",
                  "Course management strategies",
                  "Mental game coaching",
                  "Physical conditioning for golf"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6473231/pexels-photo-6473231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Golf Pro teaching a student" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}