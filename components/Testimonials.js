// src/components/About.js
  export default function Testimonials() {
    const testimonials = [
      {
        personName: "Santhosh Mathew",
        personTitle: "CEO, Carmel Infosystems",
        quote: "ProjectPro's framework helped us achieve 3.2x faster project delivery while maintaining quality. Their 90-day program was transformative!"
      },
      {
        personName: "Sarah Johnson",
        personTitle: "VP Ops, StartUpX",
        quote: "In just 60 days, we saw a 40% reduction in project overhead costs. The Agile Synergy program was exactly what our teams needed."
      },
      {
        personName: "Michael Chen",
        personTitle: "Director, Global Innovations",
        quote: "Our product launch timeline was cut by half using their Product Catalyst framework. Exceptional results!"
      },
      {
        personName: "John Doe",
        personTitle: "CTO, Medamixa",
        quote: "In just 60 days, we saw a 40% reduction in project overhead costs. The Agile Synergy program was exactly what our teams needed."
      }
    ];


    return (
      <section id="testimonials" className="py-20 bg-blue-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
    
    <div className="flex overflow-x-auto pb-8 scrollbar-hide">
      <div className="flex space-x-8 flex-nowrap">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-goldenrod rounded-full mr-4"></div>
              <div>
                <p className="font-bold">{testimonial.personName}</p>
                <p className="text-sm text-gray-600">{testimonial.personTitle}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              "{testimonial.quote}"
            </p>
            <div className="text-blue-600 font-semibold">→ Read full case study</div>
          </div>
        ))}
        

      </div>
    </div>
    

    {/* Scroll Indicator */}
    <div className="text-center mt-8 text-gray-600">
      ← Scroll to view more →
    </div>
  </div>
</section>
    );
  }