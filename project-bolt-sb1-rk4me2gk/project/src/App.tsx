import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Testimonials from './pages/Testimonials';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'appointment':
        return <Appointment />;
      case 'testimonials':
        return <Testimonials />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
