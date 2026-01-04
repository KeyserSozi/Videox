import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, Eye, FileWarning, Fingerprint, ChevronRight, ShieldAlert, ArrowRight } from "lucide-react";
import backgroundTexture from "@assets/generated_images/dark_luxury_background_with_crimson_and_gold_accents.png";
import teaserImage from "@assets/oardefault_1767549960868.jpg";

export default function LandingPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(false);

  // Handle verification unlock sequence
  const handleVerify = () => {
    setIsVerified(true);
    // Slight delay to simulate "unlocking" process
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  };

  const handleCtaClick = () => {
    setIsLocked(true);
  };

  const handleWatchVideoClick = () => {
    setShowAgeGate(true);
    setTimeout(() => {
      const element = document.getElementById('verification-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const handleCompleteLocker = () => {
    // Open the CPA link in a new tab
    window.open("https://smrturl.co/ffcfb4d", "_blank");
    // Unlock the video player
    setIsLocked(false);
    setIsVideoUnlocked(true);
    
    // Scroll to video player after a short delay
    setTimeout(() => {
      const element = document.getElementById('video-player-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const handleVideoThumbClick = (id: number) => {
    setActiveVideoId(id);
    handleCtaClick();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-white flex flex-col items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={backgroundTexture} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-10" />
      </div>

      {/* Hero Content - The "Front" of the first page */}
      <div className="relative z-30 container mx-auto px-4 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Live Now: Exclusive Access removed */}
          <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 tracking-tighter uppercase leading-none text-glow-red">
            Original <br /> <span className="text-secondary text-glow-gold">Exclusive</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Experience the unfiltered source. High quality, private, and direct access to the archive.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,0,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWatchVideoClick}
              className="px-10 py-5 bg-primary text-white font-black text-xl uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(139,0,0,0.3)] transition-all flex items-center gap-3 group"
            >
              Watch the Video
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <div className="flex items-center gap-3 text-sm text-gray-500 font-bold uppercase tracking-widest">
              <Eye className="w-5 h-5 text-secondary" />
              62,431 Viewers
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Container - Verification and Content Section */}
      <div id="verification-section" className="relative z-20 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
        {/* Content Locker Overlay */}
        <AnimatePresence>
          {isLocked && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="w-full max-w-md glass-panel p-8 rounded-2xl border-primary/50 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                
                <Lock className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
                
                <h2 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                  🔒 Private Content
                </h2>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  This content is private and restricted.<br />
                  Confirm you’re human to continue.<br />
                  It only takes a few seconds.
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleCompleteLocker}
                    className="w-full py-4 bg-primary hover:bg-red-700 text-white font-black text-xl tracking-widest rounded-xl transition-all hover:scale-105 uppercase"
                  >
                    UNLOCK NOW
                  </button>
                  
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    ✔ Fast • ✔ Secure • ✔ No signup required
                  </p>
                  
                  <button 
                    onClick={() => setIsLocked(false)}
                    className="text-xs text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-widest pt-4"
                  >
                    Cancel
                  </button>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest">
                  <Shield className="w-3 h-3" /> Protected by Content Locker
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showAgeGate && !isVerified ? (
            <AgeGate 
              key="age-gate" 
              onVerify={handleVerify} 
              handleCtaClick={handleCtaClick}
              isVerified={isVerified}
            />
          ) : isVerified ? (
            <RestrictedContent 
              key="restricted-content" 
              show={showContent} 
              handleCtaClick={handleCtaClick} 
              isVideoUnlocked={isVideoUnlocked} 
            />
          ) : null}
        </AnimatePresence>


        {/* Footer Trust Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground uppercase tracking-widest"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 256-bit Encryption</span>
            <span className="flex items-center gap-1"><Fingerprint className="w-3 h-3" /> Anonymous Access</span>
          </div>
          <p>© 2025 Private Access Vault. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}

function AgeGate({ onVerify, handleCtaClick, isVerified }: { onVerify: () => void, handleCtaClick: () => void, isVerified: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg space-y-6"
    >
      <div className="glass-panel p-1 rounded-2xl border border-primary/30 shadow-[0_0_50px_rgba(139,0,0,0.2)]">
        <div className="bg-card/80 backdrop-blur-md rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,0,0,0.4)]">
              <ShieldAlert className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2 uppercase tracking-tighter">
            Adult Content Only (+18)
          </h2>
          
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-6">
            Original & Exclusive Content
          </p>

          <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed max-w-sm mx-auto">
            You are about to enter the official platform for exclusive content. Watch original versions in high quality directly.
          </p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 0, 0, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onVerify}
              data-testid="button-verify"
              className="w-full py-5 px-6 bg-gradient-to-r from-primary to-red-600 text-white font-extrabold text-xl uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(139,0,0,0.4)] flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10">Confirm I am 18+ | Enter</span>
              <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" /> Secure & Private Access
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-6 opacity-40 grayscale">
            <div className="text-[10px] font-black tracking-tighter flex items-center gap-1">
              🔞 Adult Content
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RestrictedContent({ show, handleCtaClick, isVideoUnlocked }: { show: boolean, handleCtaClick: () => void, isVideoUnlocked: boolean }) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-4xl"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Access Granted
          </div>
          
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 text-glow-red uppercase tracking-tight">
            Trending <span className="text-primary">Vault</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-medium">
            Discover the most viewed exclusive archives from the last 24 hours.
          </p>
        </motion.div>
      </div>

          <div id="video-player-section" className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {isVideoUnlocked ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full aspect-video max-w-2xl mx-auto w-full bg-black rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(139,0,0,0.3)]"
              >
                  <iframe 
                    src={activeVideoId === 2 ? "https://www.xvv1deos.com/embedframe/hbeackf9b24" : "https://www.xvv1deos.com/embedframe/hbeackf9b24"} 
                    frameBorder="0" 
                    width="510" 
                    height="400" 
                    scrolling="no" 
                    allowFullScreen
                    className="max-w-full"
                  ></iframe>
              </motion.div>
            ) : (
              [
                { id: 1, title: "Exclusive Archive #01", views: "1.2M", dur: "12:04" },
                { id: 2, title: "Premium Access #02", views: "850K", dur: "08:15" },
                { id: 3, title: "Vault Collection #03", views: "2.1M", dur: "15:30" },
                { id: 4, title: "Special Edit #04", views: "940K", dur: "10:45" },
                { id: 5, title: "Unseen Footage #05", views: "1.5M", dur: "06:20" },
                { id: 6, title: "Final Cut #06", views: "3.2M", dur: "14:10" }
              ].map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -5 }}
                  onClick={() => handleVideoThumbClick(video.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-xl transition-all group-hover:border-primary/50 group-hover:shadow-primary/20">
                  <img 
                    src={video.id === 1 ? teaserImage : `https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400&h=225&sig=${video.id}`} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur text-[10px] font-bold text-white rounded">
                      {video.dur}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                        <ChevronRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 px-1">
                    <h4 className="text-xs md:text-sm font-bold text-gray-200 line-clamp-1 group-hover:text-primary transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-gray-500 font-medium">{video.views} views</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700" />
                      <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Premium</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
    </motion.div>
  );
}
