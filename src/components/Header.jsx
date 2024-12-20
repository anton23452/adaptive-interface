export default function Header() {
    return (
      <header className="bg-blue-600 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Logo</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#" className="text-white hover:text-gray-200">About</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>
    );
  }