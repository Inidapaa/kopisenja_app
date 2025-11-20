import { useEffect, useState } from "react";
import { ShoppingCart, X, CheckCircle2 } from "lucide-react";

function Toast({ message, onClose, duration = 3000 }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    // Progress bar animation
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 16); // ~60fps

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onClose, duration]);

  return (
    <div className="fixed top-5 right-5 z-50 animate-slide-in">
      <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm min-w-[320px] relative overflow-hidden border border-white/20 backdrop-blur-sm">
        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-white/40 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />

        {/* Icon container with pulse effect */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-white/20 rounded-full p-2.5 backdrop-blur-sm">
            <ShoppingCart size={22} strokeWidth={2.5} className="text-white" />
          </div>
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base leading-tight">{message}</p>
          <p className="text-xs text-white/90 mt-0.5 flex items-center gap-1">
            <CheckCircle2 size={12} />
            Item berhasil ditambahkan
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:bg-white/20 rounded-full p-1.5 transition-all duration-200 active:scale-90"
          aria-label="Tutup notifikasi"
        >
          <X size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
