 
  // src/components/Services.js
  // import { ClipboardCheckIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
  export default function HowWeDo() {
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
      <section id="how-we-do" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-700">How We Do It</h2>
          <p className="text-lg max-w-2xl mx-auto">Our 4-step framework: Assess, Plan, Execute, and Scale.</p>
        </div>
      </section>
    );
  }