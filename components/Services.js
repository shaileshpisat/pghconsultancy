 
  // src/components/Services.js
  // import { ClipboardCheckIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
  export default function Services() {
    const services = [
      {
        title: "Project Project Catalyst",
        description: "Jumpstart stalled projects with our acceleration framework.",
        duration: "90-days transformation",
        included: ["Project health audit", "Resource optimization plan", "Milestone acceleration strategy"],
        usefulFor: ["Delayed product launches", "Over-budget initiatives", "Cross-team alignment issues"],
        expectedResults: ["3x faster milestone completion", "40% cost efficiency gain", "Real-time progress dashboard"]
      },
      {
        title: "Product Catalyst",
        description: "From concept to market dominance in record time.",
        duration: "60-days transformation",
        included: ["Product roadmap", "Market analysis", "Competitive landscape"],
        usefulFor: ["Feature creep", "Market saturation", "Competitor disruption"],
        expectedResults: ["3x faster time-to-market", "20% market share gain", "Product-market fit validation"]
      },
      {
        title: "Agile Synergy",
        description: "Enterprise-scale agility without the friction.",
        duration: "30-days transformation",
        included: ["Scrum master training", "Kanban board setup", "Agile transformation plan"],
        usefulFor: ["Waterfall-to-agile transition", "Cross-functional team alignment", "Scrum team performance"],
        expectedResults: ["2x faster feature delivery", "50% reduction in defects", "Scrum team velocity increase"]
      }
    ];
  
    return (
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive project management solutions</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 mb-5">{service.description}</p>
                  <div className="bg-blue-100 px-3 py-1 rounded-full text-sm w-fit mb-4">
                    ⏱️ {service.duration}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">📦 What&apos;s Included:</h4>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      {service.included.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">🎯 Useful For:</h4>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      {service.usefulFor.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">🚀 Expected Results:</h4>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      {service.expectedResults.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }