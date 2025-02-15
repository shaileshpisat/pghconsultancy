 
  // src/components/Services.js
  // import { ClipboardCheckIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
  export default function Services() {
    const services = [
      {
        title: "Project Planning",
        description: "Comprehensive project planning and strategy development"
      },
      {
        title: "Risk Management",
        description: "Identify and mitigate potential project risks"
      },
      {
        title: "Team Leadership",
        description: "Expert guidance in team management and leadership"
      },
      {
        title: "Process Optimization",
        description: "Streamline your project management processes"
      }
    ];
  
    return (
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive project management solutions</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }