import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState('Loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Track actual page resource loading
    let mounted = true;

    // Simulate progress based on document ready state
    const updateProgress = () => {
      if (!mounted) return;

      if (document.readyState === 'loading') {
        setProgress(30);
      } else if (document.readyState === 'interactive') {
        setProgress(60);
      } else if (document.readyState === 'complete') {
        setProgress(90);
      }
    };

    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 30) return prev + 2;
        if (prev < 60) return prev + 1;
        return prev;
      });
    }, 100);

    const checkResourcesLoaded = () => {
      if (!mounted) return;
      
      // Check if document is ready
      if (document.readyState === 'complete') {
        clearInterval(progressInterval);
        setProgress(100);
        
        // Wait a bit to show 100% before hiding
        setTimeout(() => {
          if (mounted) {
            setIsLoading(false);
          }
        }, 300);
      } else {
        updateProgress();
      }
    };

    // Initial progress update
    updateProgress();

    // If already loaded when component mounts
    if (document.readyState === 'complete') {
      checkResourcesLoaded();
    } else {
      // Listen for the window load event (all resources including images, styles, scripts)
      window.addEventListener('load', checkResourcesLoaded);
      
      // Also listen to readystatechange as a fallback
      document.addEventListener('readystatechange', checkResourcesLoaded);
    }

    return () => {
      mounted = false;
      clearInterval(progressInterval);
      window.removeEventListener('load', checkResourcesLoaded);
      document.removeEventListener('readystatechange', checkResourcesLoaded);
    };
  }, []);

  useEffect(() => {
    const words = ['Loading', 'Caricamento'];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    
    let currentWordIndex = 0;
    let iterations = 0;
    let interval: ReturnType<typeof setInterval>;

    const scrambleToNextWord = () => {
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const targetWord = words[nextWordIndex];
      
      iterations = 0;

      interval = setInterval(() => {
        setDisplayText(() => {
          return targetWord
            .split('')
            .map((_, index) => {
              if (index < iterations) {
                return targetWord[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        });

        iterations += 1 / 3;

        if (iterations >= targetWord.length) {
          clearInterval(interval);
          setDisplayText(targetWord);
          currentWordIndex = nextWordIndex;
          
          // Wait before starting next transition
          setTimeout(() => {
            scrambleToNextWord();
          }, 2000);
        }
      }, 50);
    };

    // Start the first transition after a delay
    const initialTimeout = setTimeout(() => {
      scrambleToNextWord();
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">&lt;/&gt;</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-mono min-h-[2rem]">
            {displayText}...
          </h2>
          
          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2 font-medium">{progress}%</p>
          </div>
          
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
