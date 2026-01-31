
import { useState, useEffect } from "react";

const AceOfSpades = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#4E4F51] flex items-center justify-center p-4 overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E4F51] via-[#101013]/30 to-[#4E4F51] opacity-50"></div>
      
      {/* Card container */}
      <div 
        className={`relative transition-all duration-1000 ease-out transform ${
          isVisible 
            ? 'opacity-100 scale-100 rotate-0' 
            : 'opacity-0 scale-50 rotate-180'
        }`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[white]/20 to-[#E3E5E6]/20 rounded-3xl blur-2xl scale-110"></div>
        
        {/* Main card */}
        <div className="relative w-80 h-[500px] bg-[white] rounded-3xl shadow-2xl flex flex-col items-center justify-between p-8 border-4 border-[#E3E5E6]">
          
          {/* Top left spade and A */}
          <div className="absolute top-4 left-4 flex flex-col items-center">
            <div className="text-4xl font-bold text-[#4E4F51] mb-1">A</div>
            <div className="text-4xl text-[#4E4F51]">♠</div>
          </div>
          
          {/* Center large spade */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-[12rem] text-[#4E4F51] leading-none select-none">♠</div>
          </div>
          
          {/* Bottom right spade and A (upside down) */}
          <div className="absolute bottom-4 right-4 flex flex-col items-center rotate-180">
            <div className="text-4xl font-bold text-[#4E4F51] mb-1">A</div>
            <div className="text-4xl text-[#4E4F51]">♠</div>
          </div>
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
        </div>
      </div>
      
      {/* Optional floating particles for extra magic */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[white] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AceOfSpades;
