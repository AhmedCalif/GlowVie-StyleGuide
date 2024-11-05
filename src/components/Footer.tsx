import React from 'react';

 export function Footer () {
  return (
    <footer className="fixed bottom-0 w-full bg-[#1a1f2e] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-center">
         
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full"></div>
            <span className="text-white">GlowVie</span>
            <span className="text-white text-sm ml-2">© 2024. All rights reserved</span>
            
          </div>

        </div>
      </div>
    </footer>
  );
};