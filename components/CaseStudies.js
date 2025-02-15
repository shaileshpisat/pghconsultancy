 
  // src/components/Services.js
  // import { ClipboardCheckIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
  export default function CaseStudies() {
    const services = [
      {
        title: "Project Project Catalyst",
        description: "Accelerate project delivery with our proven strategies."
      },
      {
        title: "Product Catalyst",
        description: "Transform your product development lifecycle."
      },
      {
        title: "Agile Synergy",
        description: "Enhance agility and collaboration across teams."
      }
    ];
  
    return (
      <section id="services" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700">Case Studies</h2>
            <p className="mt-4 text-xl text-gray-600">See how we helped companies achieve 3x growth in 90 days.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }