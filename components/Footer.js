  // src/components/Footer.js
  export default function Footer() {
    return (
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} PGH Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }