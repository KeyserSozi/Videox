import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, Eye, FileWarning, Fingerprint, ChevronRight } from "lucide-react";
import backgroundTexture from "@assets/generated_images/dark_luxury_background_with_crimson_and_gold_accents.png";
import teaserImage from "@assets/oardefault_1767335880089.jpg";

export default function LandingPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Handle verification unlock sequence
  const handleVerify = () => {
    setIsVerified(true);
    // Slight delay to simulate "unlocking" process
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-white">
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

      {/* Main Container */}
      <div className="relative z-20 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          {!isVerified ? (
            <AgeGate key="age-gate" onVerify={handleVerify} />
          ) : (
            <RestrictedContent key="restricted-content" show={showContent} />
          )}
        </AnimatePresence>

        {/* Footer Trust Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground uppercase tracking-widest"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> تشفير 256 بت</span>
            <span className="flex items-center gap-1"><Fingerprint className="w-3 h-3" /> وصول مجهول</span>
          </div>
          <p>© 2025 أرشيف الوصول الخاص. جميع الحقوق محفوظة.</p>
        </motion.div>
      </div>
    </div>
  );
}

function AgeGate({ onVerify }: { onVerify: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
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
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 tracking-wide uppercase text-glow-red">
            محتوى مخصص للبالغين فقط (+18)
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-primary/50" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">فيديوهات حصرية وغير مشفرة</span>
            <span className="h-px w-8 bg-primary/50" />
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            أنت على وشك الدخول إلى أرشيف الفيديوهات المسربة والحصرية. <br /> 
            <span className="text-white font-semibold italic">يجب أن يكون عمرك 18 عاماً على الأقل للمتابعة.</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 0, 0, 0.6)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onVerify}
            data-testid="button-verify"
            className="w-full py-5 px-6 bg-gradient-to-r from-primary to-red-600 text-white font-extrabold text-xl uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(139,0,0,0.4)] flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10">أؤكد أن عمري +18 | دخول</span>
            <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> وصول آمن وسري</span>
            <span className="flex items-center gap-1">🔞 محتوى للبالغين</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RestrictedContent({ show }: { show: boolean }) {
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
            تم منح الوصول
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 text-glow-red">
            أرشيف الفيديوهات المسربة
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            شاهد الفيديوهات التي تم حذفها من المنصات العامة. <br />
            <span className="text-primary font-medium italic underline decoration-primary/30">وصول كامل لجميع المقاطع الحصرية.</span>
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Teaser Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-primary via-transparent to-secondary opacity-30 group-hover:opacity-60 blur-lg transition-opacity duration-500" />
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
             <img 
              src={teaserImage} 
              alt="Exclusive Content" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-display text-white mb-1">File: "Whisper"</h3>
                  <p className="text-sm text-gray-400">Duration: 12:04 • Status: <span className="text-green-400">Unlocked</span></p>
                </div>
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                   <Eye className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* "Live" Badge */}
            <div className="absolute top-4 left-4 px-2 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live Feed
            </div>
          </div>
        </motion.div>

        {/* Call to Action Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-display text-primary mb-2">فيديوهات حصرية 100%</h3>
            <p className="text-gray-400 leading-relaxed">
              يحتوي هذا القسم على لقطات مسربة وفيديوهات خاصة لم تظهر من قبل. نحن نضمن لك الخصوصية التامة أثناء التصفح والمشاهدة.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
                <p className="text-primary font-bold text-xl">HD</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">جودة عالية</p>
             </div>
             <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                <p className="text-white font-bold text-xl">Private</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">تصفح مخفي</p>
             </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              className="w-full py-5 bg-primary hover:bg-red-700 text-white font-black text-xl uppercase tracking-widest rounded-xl shadow-[0_10px_40px_rgba(139,0,0,0.6)] transition-all hover:scale-[1.03] active:scale-95 animate-pulse-glow"
              data-testid="button-cta-primary"
            >
              مشاهدة جميع الفيديوهات
            </button>
            <p className="text-xs text-center text-red-500 font-bold animate-pulse">
              * تحذير: المحتوى قد يكون صادماً للبعض
            </p>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500">
             <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
               ))}
             </div>
             <span>62,431 مستخدم نشط الآن</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}