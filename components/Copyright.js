// src/components/About.js
  export default function Copyright() {
    return (
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-goldenrod">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PGH Consultancy. All rights reserved. 
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-blue-200">Terms of Use</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:text-blue-200">Privacy Policy</a>
          </p>
        </div>
      </div>
    );
  }