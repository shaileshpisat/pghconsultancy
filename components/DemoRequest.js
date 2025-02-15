 
  // src/components/Services.js
  // import { ClipboardCheckIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
  export default function DemoRequest() {
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
            <h2 className="text-3xl font-extrabold text-gray-700">Ready to Scale? </h2>
            <p className="text-lg mb-8">Request a demo to see our framework in action.</p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Ask for a Demo</a>
          </div>
        </div>
      </section>
    );
  }