import { Download, Github, Activity, Clipboard, Layers, Calendar, Cpu, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col pt-12 px-8 lg:px-24">
      {/* Top Nav */}
      <div className="flex items-center gap-2 text-zinc-100 font-medium mb-24 z-10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-100"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span className="text-sm font-semibold tracking-wide">Laalten</span>
      </div>

      <div className="flex flex-col lg:flex-row relative z-10 w-full max-w-[1400px] mx-auto">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-pixel tracking-tight leading-[1.1] mb-8 text-white">
            All Your <span className="text-neon">Utilities</span>
            <br />
            <span className="text-neon">Docked</span> In One Place
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#a1a1aa] mb-10 max-w-xl leading-relaxed">
            Staring at dead space too often? Switching apps to manage clipboard or music? Stop hunting. Laalten transforms your notch into a powerful dashboard.
          </p>

          {/* Feature Icons Row */}
          <div className="flex items-center gap-6 text-[#71717a] font-medium text-sm mb-12">
            <div className="flex items-center gap-2"><Activity size={18} /><span>Music</span></div>
            <div className="flex items-center gap-2"><Clipboard size={18} /><span>Clipboard</span></div>
            <div className="flex items-center gap-2"><Layers size={18} /><span>Files</span></div>
            <span className="text-[#52525b]">+ 7 more</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="#install" className="flex items-center justify-center w-full sm:w-auto bg-neon text-black px-8 py-3.5 rounded-xl font-bold hover:bg-[#b0df00] transition-colors text-base">
              Download for macOS
            </Link>
            <Link href="https://github.com/SynthesisxLabs/Laalten" target="_blank" className="flex items-center justify-center w-full sm:w-auto gap-2 bg-[#27272a]/50 backdrop-blur-md border border-[#3f3f46] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#27272a] transition-colors text-base">
              <Github size={18} />
              Contribute
            </Link>
          </div>
          
          <div className="mt-8 flex gap-3 text-xs text-[#52525b] font-mono">
            <span>Free</span>
            <span>·</span>
            <span>Proprietary</span>
            <span>·</span>
            <span>macOS 14+</span>
          </div>
        </div>

        {/* Right Floating Panel Mockup */}
        <div className="hidden lg:block absolute right-[-5%] top-[-5%] w-[480px] h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
           <div className="p-8 h-full overflow-y-auto">
             <div className="text-black font-semibold text-xl mb-8 flex items-center gap-3">
               <span className="w-8 h-6 bg-black rounded-b-xl flex items-center justify-center">
                 <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
               </span>
               Laalten
             </div>
             
             {/* Mock Widget 1 */}
             <div className="mb-8 border-b border-gray-100 pb-8">
               <h3 className="font-bold text-gray-900 mb-4 text-lg">Music</h3>
               <div className="text-sm font-medium text-gray-800 mb-2 flex justify-between">
                 <span>Now Playing</span>
                 <span className="w-2 h-2 rounded-full bg-neon"></span>
               </div>
               <div className="h-6 w-full bg-gray-900 rounded-lg mb-2 relative overflow-hidden">
                 <div className="absolute inset-y-0 left-0 bg-neon w-[73%]"></div>
               </div>
               <div className="text-xs text-gray-500">73% left</div>
             </div>

             {/* Mock Widget 2 */}
             <div className="mb-8 border-b border-gray-100 pb-8">
               <h3 className="font-bold text-gray-900 mb-4 text-lg">Clipboard</h3>
               <div className="text-sm font-medium text-gray-800 mb-2 flex justify-between">
                 <span>Latest</span>
                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
               </div>
               <div className="h-6 w-full bg-gray-900 rounded-lg mb-2 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gray-600 w-[100%]"></div>
               </div>
               <div className="text-xs text-gray-500">Copied 2m ago</div>
             </div>

             {/* Mock Widget 3 */}
             <div className="mb-8">
               <h3 className="font-bold text-gray-900 mb-4 text-lg">System</h3>
               <div className="text-sm font-medium text-gray-800 mb-2 flex justify-between">
                 <span>Battery</span>
                 <span className="w-2 h-2 rounded-full bg-red-400"></span>
               </div>
               <div className="h-6 w-full bg-gray-100 rounded-lg mb-2 relative overflow-hidden">
                 <div className="absolute inset-y-0 left-0 bg-gray-900 w-[42%]"></div>
               </div>
               <div className="text-xs text-gray-500">42% left</div>
             </div>

           </div>
           
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
             <span>v1.1.0</span>
             <span>Settings</span>
           </div>
        </div>
      </div>

      {/* Code Snippet / CLI Install */}
      <div className="relative z-10 mt-32 w-full max-w-2xl mx-auto" id="install">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs font-mono text-zinc-500">Terminal — Install</span>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base text-zinc-300 leading-relaxed overflow-x-auto relative group">
            <div className="flex select-all">
              <span className="text-zinc-600 mr-4 select-none">$</span>
              <span className="whitespace-nowrap text-neon">curl -sL https://raw.githubusercontent.com/SynthesisxLabs/Laalten/main/install.sh | bash</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
