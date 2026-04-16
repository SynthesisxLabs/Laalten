"use client";

import { Download, Github, BookOpen, TerminalSquare, Copy, Check, Disc3, Shield, Package, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const installCmd = "curl -sL https://raw.githubusercontent.com/SynthesisxLabs/Laalten/main/install.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col pt-8 px-6 lg:px-24 w-full max-w-[1440px] mx-auto text-zinc-300">
      
      {/* Absolute Ambient Lantern Glows */}
      <div className="absolute top-[-10%] sm:top-[-20%] left-1/2 transform -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-brand-glow rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-glow rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between w-full h-16 z-20 mb-20"
      >
        <div className="flex items-center gap-3">
          {/* Lantern Logo Interpretation */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-amber to-brand-gold flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M5 10h14"/><path d="M5 14h14"/><path d="M7 6h10l2 12H5z"/></svg>
          </div>
          <span className="font-semibold text-white tracking-wide text-lg">Laalten</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="https://github.com/SynthesisxLabs/Laalten" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <BookOpen size={16} /> Docs
          </Link>
          <Link href="https://github.com/SynthesisxLabs/Laalten" target="_blank" className="bg-[#1a1a1a] border border-[#333] hover:border-brand-amber/50 hover:bg-[#222] text-white px-4 py-2 rounded-full transition-all flex items-center gap-2">
            <Github size={16} /> Star on GitHub
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center z-10 w-full max-w-4xl mx-auto"
      >
        <motion.h1 variants={fadeUpVariant} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          The smartest Mac <br className="hidden sm:block" /> notch utility. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-amber to-brand-gold">Illuminated.</span>
        </motion.h1>
        
        <motion.p variants={fadeUpVariant} className="text-lg sm:text-xl text-[#999] mb-12 max-w-2xl leading-relaxed">
          A production-grade, open-source productivity hub that lives in your menu bar. Zero telemetry, pure native performance.
        </motion.p>

        {/* Dynamic Island Preview Placeholder (Subtle glow overlay) */}
        <motion.div variants={fadeUpVariant} className="w-[200px] h-[34px] bg-black rounded-full mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/5 relative overflow-hidden flex items-center justify-between px-3">
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-brand-amber to-brand-gold"></div>
              <div className="flex flex-col justify-center gap-0.5">
                  <div className="h-1 w-8 bg-zinc-800 rounded-full"></div>
                  <div className="h-1 w-5 bg-zinc-800 rounded-full"></div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-zinc-800 flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-gold rounded-full blur-[2px]"></div>
            </div>
        </motion.div>

        {/* Installation Terminal Block */}
        <motion.div variants={fadeUpVariant} className="w-full max-w-2xl bg-panel-bg rounded-2xl border border-panel-border overflow-hidden shadow-2xl text-left">
          <div className="px-4 py-3 bg-black flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-zinc-500 font-mono">Install Laalten 1.1.0</div>
            <button onClick={handleCopy} className="text-zinc-500 hover:text-white transition-colors">
              {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
          </div>
          <div className="p-6 font-mono text-[14px] sm:text-base bg-[#0f0f0f] text-zinc-300">
            <div className="flex">
              <span className="text-zinc-600 mr-4 select-none">$</span>
              <code className="whitespace-pre-wrap break-all">
                <span className="text-brand-gold">curl</span> -sL https://raw.githubusercontent.com/SynthesisxLabs/Laalten/main/install.sh | <span className="text-brand-amber">bash</span>
              </code>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Bento Grid Features */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32 mb-24 z-10 w-full"
      >
        <h2 className="text-center text-3xl font-bold text-white mb-12">Built differing.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px] mx-auto">
          
          {/* Card 1 */}
          <motion.div variants={fadeUpVariant} className="group p-8 rounded-3xl bg-panel-bg/40 backdrop-blur-xl border border-white/5 hover:border-brand-amber/30 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
              <LayoutTemplate size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Refractive Apple Glass UI</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              True native rendering using AppKit's visual effect views. Enjoy premium blurs, pixel-perfect drop shadows, and interface elements that seamlessly bleed into your display.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="group p-8 rounded-3xl bg-panel-bg/40 backdrop-blur-xl border border-white/5 hover:border-brand-amber/30 transition-all duration-500 overflow-hidden relative">
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
              <Disc3 size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Zero-Polling Architecture</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Battery life matters. Built on strict Swift 6 concurrency, Laalten relies entirely on OS-level IOKit callbacks and notifications. 0% CPU footprint when idling.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="group p-8 rounded-3xl bg-panel-bg/40 backdrop-blur-xl border border-white/5 hover:border-brand-amber/30 transition-all duration-500 overflow-hidden relative">
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
              <Package size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart File Tray</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Drag dropping without the friction. Toss files onto the notch to magically stash them for later, then seamlessly drag them right back out into any application.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeUpVariant} className="group p-8 rounded-3xl bg-panel-bg/40 backdrop-blur-xl border border-white/5 hover:border-brand-amber/30 transition-all duration-500 overflow-hidden relative">
            <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Privacy First</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No account. No cloud syncing. No telemetry trackers. All features, from clipboard management to Apple Notes integration, execute strictly on-device.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-auto py-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between z-10 w-full text-sm text-zinc-500">
        <div>© 2026 SynthesisxLabs. Mit License.</div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="https://github.com/SynthesisxLabs/Laalten" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
