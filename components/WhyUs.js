 
  // src/components/Services.js
  // import { ClipboardCheckIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
  export default function WhyUs() {
    const services = [
      {
        title: "Tailored Approach",
        description: "No one-size-fits-all solutions—only what works for you."
      },
      {
        title: "IT Background",
        description: "14+ years of experience working on technology backed Projects."
      },
      {
        title: "Team Synergy",
        description: "Co-ordinating IT & non-IT teams to achieve maximum productivity."
      },
      {
        title: "Proven Results",
        description: "Helped IT solution providers scale faster with lean teams."
      }
    ];
  
    return (
      <section id="why-us" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700">Why Choose Us?</h2>
            <p className="text-lg max-w-2xl mx-auto">We combine proven methodologies with innovative strategies to deliver results that matter.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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