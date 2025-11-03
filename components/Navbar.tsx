'use client';

import Logo from './Logo';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="transition-transform duration-300 cursor-pointer hover:scale-105">
          <Logo size="medium" />
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push('/designer-onboarding')}
            className="px-6 py-2 bg-white text-black border border-gray-300 rounded-full font-medium hover:border-[#00b67f] hover:text-[#00b67f] transition-all font-poppins"
          >
            I Am a Designer
          </button>
          <button 
            onClick={() => router.push('/designer-onboarding')}
            className="px-6 py-2 bg-[#00b67f] text-white rounded-full font-medium hover:bg-[#00a070] transition-all font-poppins"
          >
            I Need a Designer
          </button>
        </div>
      </div>
    </nav>
  );
}
