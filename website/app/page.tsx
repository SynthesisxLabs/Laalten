import { Download, Github, Command, Search, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col pt-12 px-8 lg:px-24">
      {/* Top Nav */}
      <div className="flex items-center gap-2 text-zinc-100 font-medium mb-16 z-10 opacity-90 hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-100"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span className="text-sm font-semibold tracking-wide">Laalten</span>
      </div>

      <div className="flex flex-col lg:flex-row relative z-10 w-full max-w-[1280px] mx-auto gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center pt-8">
          <h1 className="text-[3.5rem] md:text-[4.8rem] lg:text-[5.5rem] font-pixel tracking-tighter leading-[1.05] mb-8 text-white drop-shadow-lg">
            All Your <span className="text-neon">Utilities</span>
            <br />
            <span className="text-neon">Docked</span> In One Place
          </h1>
          
          <p className="text-lg sm:text-xl text-[#888888] mb-10 max-w-[500px] leading-[1.6]">
            Staring at dead space too often? Switching apps to manage clipboard or music? Stop hunting. Laalten transforms your notch into a powerful dashboard.
          </p>

          {/* Feature Icons Row */}
          <div className="flex items-center flex-wrap gap-x-6 gap-y-3 text-[#999999] font-medium text-[15px] mb-10">
            <div className="flex items-center gap-2.5"><Command size={18} className="text-zinc-400" /><span>Clipboard</span></div>
            <div className="flex items-center gap-2.5"><Search size={18} className="text-zinc-400" /><span>Spotlight</span></div>
            <div className="flex items-center gap-2.5"><Cpu size={18} className="text-zinc-400" /><span>System</span></div>
            <span className="text-[#666666] text-sm">+ 7 more</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="#install" className="flex items-center justify-center w-full sm:w-auto bg-neon text-black px-8 py-3.5 rounded-xl font-bold hover:brightness-110 shadow-[0_0_20px_rgba(201,255,0,0.2)] transition-all text-base tracking-wide">
              Download for macOS
            </Link>
            <Link href="https://github.com/SynthesisxLabs/Laalten" target="_blank" className="flex items-center justify-center w-full sm:w-auto gap-2 bg-[#2a2a2a]/40 backdrop-blur-md border border-[#444444] text-zinc-200 px-6 py-3.5 rounded-xl font-medium hover:bg-[#333333]/60 transition-colors text-base tracking-wide">
              <Github size={18} />
              Contribute
            </Link>
          </div>
          
          <div className="mt-8 flex gap-3 text-[13px] text-[#666666] font-mono tracking-tight">
            <span>Free</span>
            <span>·</span>
            <span>Open Source</span>
            <span>·</span>
            <span>macOS 14+</span>
          </div>
        </div>

        {/* Right Floating Panel Mockup */}
        <div className="hidden lg:flex absolute right-[-4%] top-[2%] w-[420px] h-[700px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden border border-zinc-200">
           {/* Sidebar Icons */}
           <div className="w-[60px] h-full bg-[#f9f9f9] border-r border-[#eaeaea] flex flex-col items-center py-6 gap-6">
             <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center mb-4"><span className="w-2 h-2 bg-black rounded-full"></span></div>
             <Command size={20} className="text-zinc-500 hover:text-black cursor-pointer" />
             <Cpu size={20} className="text-zinc-500 hover:text-black cursor-pointer" />
             <Activity size={20} className="text-zinc-500 hover:text-black cursor-pointer" />
             <Layers size={20} className="text-zinc-500 hover:text-black cursor-pointer" />
           </div>

           {/* Mock Content */}
           <div className="flex-1 p-8 h-full bg-white relative">
             <div className="text-black font-semibold text-[22px] mb-8 pb-4 border-b border-gray-100 flex items-center gap-3">
               Laalten
             </div>
             
             {/* Mock Widget 1 */}
             <div className="mb-8">
               <h3 className="font-bold text-[#111111] mb-5 text-[17px]">Music</h3>
               <div className="text-[14px] font-medium text-[#444444] mb-3 flex justify-between">
                 <span>Now Playing</span>
                 <span className="w-2 h-2 rounded-full bg-neon mt-1"></span>
               </div>
               <div className="h-3.5 w-full bg-[#0b101e] rounded-full mb-2.5 relative overflow-hidden">
                 <div className="absolute inset-y-0 left-0 bg-neon w-[73%] rounded-l-full"></div>
               </div>
               <div className="text-[13px] text-[#888888]">73% left</div>
             </div>

             {/* Mock Widget 2 */}
             <div className="mb-8 border-t border-gray-100 pt-8">
               <h3 className="font-bold text-[#111111] mb-5 text-[17px]">Clipboard</h3>
               <div className="text-[14px] font-medium text-[#444444] mb-3 flex justify-between">
                 <span>System</span>
                 <span className="w-2 h-2 rounded-full bg-green-500 mt-1"></span>
               </div>
               <div className="h-3.5 w-full bg-[#0b101e] rounded-full mb-2.5 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-[#3a4154] w-[100%] rounded-l-full"></div>
               </div>
               <div className="text-[13px] text-[#888888]">Copied 2m ago</div>
             </div>

             {/* Mock Widget 3 */}
             <div className="mb-8 border-t border-gray-100 pt-8">
               <h3 className="font-bold text-[#111111] mb-5 text-[17px]">System</h3>
               <div className="text-[14px] font-medium text-[#444444] mb-3 flex justify-between">
                 <span>Battery</span>
                 <span className="w-2 h-2 rounded-full bg-[#ff4a4a] mt-1"></span>
               </div>
               <div className="h-3.5 w-full bg-[#f4f4f5] rounded-full mb-2.5 relative overflow-hidden">
                 <div className="absolute inset-y-0 left-0 bg-[#0b101e] w-[42%] rounded-l-full"></div>
               </div>
               <div className="text-[13px] text-[#888888]">42% left</div>
             </div>

             <div className="absolute bottom-6 left-8 text-[13px] text-[#999999]">
               Laalten v1.1.0
             </div>
           </div>
        </div>
      </div>

      {/* Code Snippet / CLI Install */}
      <div className="relative z-10 mt-32 mb-16 w-full max-w-2xl mx-auto" id="install">
        <div className="rounded-xl border border-zinc-800 bg-[#161616]/80 shadow-2xl backdrop-blur-md overflow-hidden">
          <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
            </div>
            <span className="text-xs font-mono text-zinc-500 mr-2">Terminal</span>
          </div>
          <div className="p-6 font-mono text-[15px] sm:text-base text-zinc-300 leading-relaxed overflow-x-auto relative group">
            <div className="flex select-all">
              <span className="text-zinc-600 mr-4 select-none">$</span>
              <span className="whitespace-nowrap text-neon drop-shadow-[0_0_8px_rgba(201,255,0,0.3)]">curl -sL https://raw.githubusercontent.com/SynthesisxLabs/Laalten/main/install.sh | bash</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
