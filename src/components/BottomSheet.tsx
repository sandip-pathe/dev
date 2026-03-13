import { useEffect, useState } from "react";

export default function BottomSheet({
  open,
  onClose,
  url,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose, url]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-all">
      <div className="relative w-full h-[86vh] bg-accent/30 backdrop-blur-xl rounded-t-3xl shadow-2xl overflow-hidden animate-slideup px-32 pt-4">
        <button
          onClick={onClose}
          className="absolute bottom-4 right-4 z-10 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl p-4 shadow-lg transition-colors"
          aria-label="Close"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 relative">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 w-2 h-6 rounded bg-accent/30"
                  style={{
                    transform: `rotate(${i * 30}deg) translate(0, -28px)`,
                    opacity: 0.2 + 0.8 * (i / 12),
                  }}
                />
              ))}
              <style>{`
                .w-16.h-16.relative > div {
                  animation: ios-spinner 1s linear infinite;
                }
                @keyframes ios-spinner {
                  0% { opacity: 1; }
                  100% { opacity: 0.2; }
                }
              `}</style>
            </div>
          </div>
        )}
        <iframe
          src={url}
          title="Project Preview"
          className="w-full h-full border-0 bg-white"
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
