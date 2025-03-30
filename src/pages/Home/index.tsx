import React from 'react';
import { TrendingUp, Users, Rocket, ArrowRight, GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="glass fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">UDgam</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Welcome to your trusted financial partner UDgam
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Empowering startups and investors to build the future together through innovative financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* UDAY Card */}
          <div className="glass rounded-2xl p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <TrendingUp className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">UDAY</h3>
            <p className="text-gray-400 mb-6">
              Sign Up/Login as Pravah user to invest in amazing startup ideas and earn as the startups grow.
            </p>
            <button className="glass px-6 py-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              Sign Up/Sign In <ArrowRight size={16} />
            </button>
          </div>

          {/* NAVIK Card */}
          <div className="glass rounded-2xl p-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <Users className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">NAVIK</h3>
            <p className="text-gray-400 mb-6">
              Sign Up/Login as Pravah user to invest in amazing startup ideas and earn as the startups grow.
            </p>
            <button className="glass px-6 py-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              Sign Up/Sign In <ArrowRight size={16} />
            </button>
          </div>

          {/* PRAVAH Card */}
          <div className="glass rounded-2xl p-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <Rocket className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">PRAVAH</h3>
            <p className="text-gray-400 mb-6">
              Sign Up/Login as Pravah user to invest in amazing startup ideas and earn as the startups grow.
            </p>
            <button className="glass px-6 py-3 rounded-full text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
              Sign Up/Sign In <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Crowdfunding Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Support Innovation</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Join our crowdfunding platform to support promising startups and be part of their success story.
          </p>
          <a 
            href="https://example.com/crowdfunding" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block glass px-8 py-4 rounded-full text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold animate-float"
          >
            Explore Crowdfunding Opportunities
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold gradient-text mb-2">UDgam</h3>
              <p className="text-gray-400">Contact us - 0000-0000-0000</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <TwitterIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 UDgam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;