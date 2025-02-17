  // src/components/Footer.js
  import Link from "next/link";

  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">    
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {/* Company Info */}
      <div className="mb-11 w-1/2">
        <h3 className="text-xl font-bold mb-4 text-goldenrod">PGH Consultancy</h3>
        <p className="text-white-200">
          Helping organizations achieve 3x growth in 90 days through 
          strategic project management.
        </p>
      </div>
        
      <div>
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="mb-7">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#why-us" className="hover:text-goldenrod">Why Us</a></li>
              <li><a href="#services" className="hover:text-goldenrod">Services</a></li>
              <li><a href="#case-studies" className="hover:text-goldenrod">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-goldenrod">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-7">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-goldenrod">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-goldenrod">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-goldenrod">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="mb-7">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-goldenrod">About Us</Link></li>
              <li><a href="/blog" className="hover:text-goldenrod">Blog</a></li>
              <li><a href="/careers" className="hover:text-goldenrod">Careers</a></li>
              <li><a href="/partners" className="hover:text-goldenrod">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
  }