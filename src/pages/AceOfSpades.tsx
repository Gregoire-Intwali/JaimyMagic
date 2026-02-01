import { useState, useEffect, useRef } from "react";

const AceOfSpades = () => {
  // Stages: 0 = pure black, 1 = text appearing, 2 = card flipping in, 3 = burst + full reveal
  const [stage, setStage] = useState(0);
  const [visibleWords, setVisibleWords] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [burst, setBurst] = useState(false);
  const particlesRef = useRef([]);
  const sparksRef = useRef([]);

  // Pre-generate stable random values
  if (particlesRef.current.length === 0) {
    particlesRef.current = [...Array(40)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      opacity: 0.15 + Math.random() * 0.35,
    }));
  }
  if (sparksRef.current.length === 0) {
    sparksRef.current = [...Array(24)].map((_, i) => ({
      id: i,
      angle: (i / 24) * 360,
      distance: 80 + Math.random() * 70,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 0.3,
      duration: 0.6 + Math.random() * 0.4,
    }));
  }

  const words = ["Je", "maakt", "deel", "uit", "van", "de", "show."];

  // Stage 0 → 1: after a brief dark pause, start text
  useEffect(() => {
    const t = setTimeout(() => setStage(1), 1200);
    return () => clearTimeout(t);
  }, []);

  // Stage 1: reveal words one by one
  useEffect(() => {
    if (stage !== 1) return;
    if (visibleWords >= words.length) {
      // All words shown — pause, then move to card stage
      const t = setTimeout(() => setStage(2), 1400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleWords((v) => v + 1), 380);
    return () => clearTimeout(t);
  }, [stage, visibleWords]);

  // Stage 2: card appears (flips in)
  useEffect(() => {
    if (stage !== 2) return;
    const t1 = setTimeout(() => setCardFlipped(true), 300);
    // After card lands, trigger burst
    const t2 = setTimeout(() => {
      setStage(3);
      setBurst(true);
    }, 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [stage]);

  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #1a1a1e 0%, #0a0a0c 60%, #000 100%)" }}
    >
      {/* ─── Floating ambient particles (always present after stage 1) ─── */}
      {stage >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {particlesRef.current.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.left}%`,
                bottom: "-10px",
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: "rgba(255,255,255,0.7)",
                boxShadow: "0 0 4px rgba(255,255,255,0.4)",
                opacity: 0,
                animation: `floatUp ${p.duration}s ${p.delay}s infinite ease-in`,
              }}
            />
          ))}
        </div>
      )}

      {/* ─── Vignette overlay ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* ─── Stage 1: Whispered text ─── */}
      {stage >= 1 && (
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="flex gap-3 items-baseline">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  fontSize: i === words.length - 1 ? "2rem" : "2.2rem",
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                  color: i < visibleWords ? "rgba(255,255,255,0.92)" : "transparent",
                  textShadow:
                    i < visibleWords
                      ? "0 0 20px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)"
                      : "none",
                  transition: "color 0.5s ease, text-shadow 0.5s ease",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {word}
              </span>
            ))}
          </div>
          {/* Subtitle fades in after all words */}
          <p
            className="mt-4 text-sm tracking-widest uppercase"
            style={{
              color: visibleWords >= words.length ? "rgba(255,255,255,0.35)" : "transparent",
              transition: "color 0.8s ease 0.3s",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.25em",
            }}
          >
            Is dit je kaart?
          </p>
        </div>
      )}

      {/* ─── Stage 2+: Card with 3D flip ─── */}
      {stage >= 2 && (
        <div
          className="relative mt-16 z-10"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 30%",
          }}
        >
          {/* Burst sparks — radiate outward on stage 3 */}
          {burst && (
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
              {sparksRef.current.map((s) => {
                const rad = (s.angle * Math.PI) / 180;
                const tx = Math.cos(rad) * s.distance;
                const ty = Math.sin(rad) * s.distance;
                return (
                  <div
                    key={s.id}
                    className="absolute rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      width: `${s.size}px`,
                      height: `${s.size}px`,
                      background: s.id % 3 === 0 ? "#fff" : s.id % 3 === 1 ? "#ffe8a3" : "#ffd060",
                      boxShadow: `0 0 ${s.size * 2}px ${s.size}px ${s.id % 2 === 0 ? "rgba(255,224,130,0.6)" : "rgba(255,255,255,0.5)"}`,
                      animation: `sparkOut 0.8s ${s.delay}s cubic-bezier(0,0,0.2,1) forwards`,
                      transform: `translate(-50%,-50%)`,
                      "--tx": `${tx}px`,
                      "--ty": `${ty}px`,
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* Glow behind card */}
          <div
            className="absolute rounded-3xl"
            style={{
              inset: "-20px",
              background: burst
                ? "radial-gradient(ellipse, rgba(255,220,120,0.25) 0%, transparent 70%)"
                : "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
              filter: "blur(18px)",
              transition: "background 0.6s ease",
              pointerEvents: "none",
            }}
          />

          {/* 3D flip container */}
          <div
            style={{
              width: "320px",
              height: "480px",
              transformStyle: "preserve-3d",
              transform: cardFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
              transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* BACK of card (visible before flip) */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "linear-gradient(145deg, #2a2a2e 0%, #1a1a1e 50%, #111 100%)",
                border: "2px solid rgba(255,255,255,0.08)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Diamond pattern on back */}
              <div className="absolute inset-4 border border-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-6xl opacity-10 select-none" style={{ color: "#fff" }}>♠</div>
              </div>
            </div>

            {/* FRONT of card */}
            <div
              className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(160deg, #ffffff 0%, #f0f0f0 100%)",
                border: "3px solid #e8e8e8",
                boxShadow: burst
                  ? "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(255,220,120,0.3), inset 0 1px 0 rgba(255,255,255,0.9)"
                  : "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.9)",
                transition: "box-shadow 0.5s ease",
              }}
            >
              {/* Top-left corner */}
              <div className="absolute top-4 left-5 flex flex-col items-center leading-tight">
                <span className="text-3xl font-bold" style={{ color: "#1a1a1e", fontFamily: "Georgia, serif" }}>A</span>
                <span className="text-2xl" style={{ color: "#1a1a1e" }}>♠</span>
              </div>

              {/* Center spade */}
              <div
                className="select-none"
                style={{
                  fontSize: "11rem",
                  lineHeight: 1,
                  color: "#1a1a1e",
                  textShadow: burst ? "0 0 30px rgba(255,220,120,0.4)" : "none",
                  transition: "text-shadow 0.5s ease",
                }}
              >
                ♠
              </div>

              {/* Bottom-right corner (rotated) */}
              <div className="absolute bottom-4 right-5 flex flex-col items-center leading-tight rotate-180">
                <span className="text-3xl font-bold" style={{ color: "#1a1a1e", fontFamily: "Georgia, serif" }}>A</span>
                <span className="text-2xl" style={{ color: "#1a1a1e" }}>♠</span>
              </div>

              {/* Subtle shine sweep */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "60%",
                    height: "100%",
                    background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.45), transparent)",
                    animation: cardFlipped ? "shineSweep 2.5s 0.8s ease forwards" : "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Stage 3: "Your card" label fades in below ─── */}
      {stage >= 3 && (
        <p
          className="absolute text-sm tracking-widest uppercase mt-96"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "Georgia, serif",
            letterSpacing: "0.3em",
            animation: "fadeInUp 1s 0.4s ease forwards",
            opacity: 0,
          }}
        >
          ✦ Remember this card ✦
        </p>
      )}

      {/* ─── CSS keyframes ─── */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes sparkOut {
          0% { transform: translate(-50%, -50%) translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        @keyframes shineSweep {
          0% { left: -60%; }
          100% { left: 140%; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 0.4; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AceOfSpades;