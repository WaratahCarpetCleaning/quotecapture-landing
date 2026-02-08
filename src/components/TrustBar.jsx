
import React from 'react';

function TrustBar() {
  return (
    <div className="mt-12 sm:mt-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-lg">
            Trusted by 200+ service businesses across Australia
          </p>
          {/* Placeholder for future logos if needed, currently just ensuring text is responsive */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-50 grayscale">
            {/* If specific logos were requested, they would go here. 
                For now, we just ensure the container handles overflow gracefully. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
