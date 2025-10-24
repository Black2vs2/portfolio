import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import AIExpertise from './components/AIExpertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <AIExpertise />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              borderRadius: '0.5rem',
              fontWeight: '500',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
