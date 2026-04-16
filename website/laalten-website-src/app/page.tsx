import { Download, Github, Code2, Layers, Cpu, Activity, Clipboard, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-6 md:px-24 pb-24">
      {/* Header / Hero */}
      <div className="text-center max-w-3xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Dynamic Island for macOS
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Everything your notch <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
            was meant to be.
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Stop staring at dead space. Laalten is a production-grade 
          dashboard for macOS that brings music controls, clipboard management, 
          and file drop zones directly into your notch. 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="#install" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
            <Download size={18} />
            Install via Terminal
          </Link>
          <Link href="https://github.com/SynthesisxLabs/Laalten" target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors">
            <Github size={18} />
            View on GitHub
          </Link>
        </div>
      </div>

      {/* Code Snippet Inspired by OpenUsage */}
      <div className="mt-24 w-full max-w-4xl" id="install">
        <div className="rounded-xl border border-white/10 bg-black/60 shadow-2xl backdrop-blur-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs font-mono text-gray-500">Terminal — Install Laalten</span>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base text-gray-300 leading-relaxed overflow-x-auto relative group">
            <div className="flex select-all">
              <span className="text-gray-600 mr-4 select-none">$</span>
              <span className="whitespace-nowrap">curl -sL https://raw.githubusercontent.com/SynthesisxLabs/Laalten/main/install.sh | bash</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-40 w-full max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Never miss a beat.</h2>
          <p className="text-gray-400">Everything you need to build without switching context.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-colors">
            <Activity className="text-white mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">Music Controls</h3>
            <p className="text-gray-400 text-sm">Live waveform visualizer and full playback controls. Your music, beautifully surfaced.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-colors">
            <Clipboard className="text-white mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">Clipboard Manager</h3>
            <p className="text-gray-400 text-sm">Instant access to your clipboard history with one-click copy and rich text support.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-colors">
            <Layers className="text-white mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">File Shelf</h3>
            <p className="text-gray-400 text-sm">Drag files onto the notch to stash them. Drag out to any app or AirDrop instantly.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-colors">
            <Calendar className="text-white mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">Calendar</h3>
            <p className="text-gray-400 text-sm">Real-time EventKit integration showing today&apos;s schedule directly in the notch UI.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-colors">
            <Cpu className="text-white mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">Zero Polling</h3>
            <p className="text-gray-400 text-sm">Strict concurrency with Swift 6 and event-driven architecture using IOKit callbacks.</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-colors">
            <Code2 className="text-white mb-4" size={24} />
            <h3 className="text-lg font-semibold mb-2">Native Grade</h3>
            <p className="text-gray-400 text-sm">Compiled as a standalone AppKit binary utilizing native API hooks without injecting payloads.</p>
          </div>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full max-w-4xl mt-32 pt-24 border-t border-white/10 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Two Minutes to Peace of Mind</h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl">One command in Terminal, zero setup fuss. Laalten installs securely to your Applications folder automatically.</p>
        <Link href="https://github.com/SynthesisxLabs/Laalten/releases/latest" target="_blank" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors">
          Download DMG manually
        </Link>
        <div className="mt-12 text-sm text-gray-500 flex flex-wrap justify-center gap-4">
          <span>Requires macOS 14+</span>
          <span>·</span>
          <span>v1.1</span>
          <span>·</span>
          <span>Proprietary License</span>
          <span>·</span>
          <Link href="https://github.com/SynthesisxLabs" className="hover:text-white transition-colors">SynthesisxLabs</Link>
        </div>
      </div>
    </main>
  );
}
