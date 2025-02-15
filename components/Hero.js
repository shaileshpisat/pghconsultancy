export default function Hero() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl">
              <span className="block text-slate">Transform your Projects with</span>
            </h2>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              
              <span className="block text-goldenrod">PGH Consultancy</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Professional project management consulting services to help your business succeed
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-gray-900 text-base font-medium rounded-md text-gray hover:bg-goldenrod hover:text-white hover:border-gray-500 md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }