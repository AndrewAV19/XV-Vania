import React, { useState, useRef, useEffect } from "react";

interface XVEnvelopeOpeningProps {
  onOpen: () => void;
}

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  emoji: string;
  rotation: number;
}

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const PETAL_EMOJIS = ["🌸", "🌺", "🌷", "🌹", "💐", "🌼", "🌸", "🌺"];
const XV_DATE = "2027-03-12T19:00:00";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Pinyon+Script&display=swap');

  .xv-scene {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 50%, #fff5f0 0%, #fce4ec 45%, #f8d7e0 75%, #f3c1d0 100%);
  }

  .xv-scene::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255,215,215,0.3) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(255,200,200,0.2) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(255,230,240,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .xv-star {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d9a15a;
    animation: xv-twinkle 3s ease-in-out infinite;
    pointer-events: none;
    box-shadow: 0 0 8px rgba(217, 161, 90, 0.4);
  }

  @keyframes xv-twinkle {
    0%, 100% { opacity: 0.15; transform: scale(0.8); }
    50% { opacity: 0.9; transform: scale(1.8); }
  }

  .xv-petal {
    position: absolute;
    top: -40px;
    pointer-events: none;
    animation: xv-fall linear infinite;
    opacity: 0;
    filter: drop-shadow(0 4px 8px rgba(200,100,130,0.15));
  }

  @keyframes xv-fall {
    0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0; }
    8% { opacity: 0.85; }
    85% { opacity: 0.6; }
    100% { transform: translateY(110vh) rotate(720deg) scale(0.4); opacity: 0; }
  }

  .xv-petal-slow {
    animation-duration: 14s;
  }

  .xv-petal-medium {
    animation-duration: 10s;
  }

  .xv-petal-fast {
    animation-duration: 7s;
  }

  .xv-center {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }

  .xv-pretitle {
    font-family: 'Pinyon Script', cursive;
    font-size: 56px;
    color: #a04060;
    line-height: 1;
    margin-bottom: 4px;
    transition: opacity 0.6s ease, transform 0.6s ease;
    text-shadow: 0 2px 20px rgba(176, 54, 103, 0.15);
  }

  .xv-pretitle span {
    color: #d9a15a;
  }

  .xv-subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 0.25em;
    color: #b56a7a;
    text-transform: uppercase;
    margin-bottom: 28px;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .xv-fade-out {
    opacity: 0 !important;
    transform: translateY(-16px) !important;
    pointer-events: none;
  }

  .xv-wrap {
    width: 340px;
    height: 210px;
    position: relative;
    cursor: pointer;
    animation: xv-float 3.5s ease-in-out infinite;
    filter: drop-shadow(0 16px 40px rgba(176, 54, 103, 0.2));
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    user-select: none;
  }

  .xv-wrap:hover {
    transform: scale(1.04);
  }

  .xv-wrap:active {
    transform: scale(0.96);
  }

  .xv-wrap.xv-opened {
    animation: none;
    pointer-events: none;
  }

  @keyframes xv-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .xv-svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .xv-flap {
    transform-origin: 50% 0%;
    transform-box: fill-box;
  }

  .xv-flap.xv-opening {
    animation: xv-openFlap 1s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  }

  @keyframes xv-openFlap {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(180deg); }
  }

  .xv-seal-pulse {
    transform-origin: center;
    animation: xv-pulse 2s ease-in-out infinite;
    font-family: 'Pinyon Script', cursive;
  }

  @keyframes xv-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.12); }
  }

  .xv-ornament {
    animation: xv-glow 3s ease-in-out infinite;
  }

  @keyframes xv-glow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .xv-letter {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 70px)) scale(0.88);
    width: 360px;
    max-width: 92vw;
    max-height: 85vh;
    overflow-y: auto;
    background: linear-gradient(160deg, #fffbf4, #fef6f0);
    border: 1px solid #f0d0dc;
    border-radius: 18px;
    padding: 38px 32px 30px;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.9s cubic-bezier(0.2, 0, 0.2, 1),
                transform 0.9s cubic-bezier(0.2, 0, 0.2, 1);
    box-shadow: 0 30px 80px rgba(176, 54, 103, 0.18),
                0 10px 30px rgba(176, 54, 103, 0.08);
    z-index: 10;
  }

  .xv-letter.xv-letter-visible {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }

  .xv-letter-deco {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #d9a15a, #b5436a, #d9a15a, transparent);
    border-radius: 2px;
  }

  .xv-letter-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .xv-letter-line {
    flex: 1;
    height: 0.5px;
    background: linear-gradient(90deg, transparent, #e8bfcc, transparent);
  }

  .xv-letter-icon {
    color: #d9a15a;
    font-size: 14px;
    animation: xv-sparkle 2s ease-in-out infinite;
  }

  @keyframes xv-sparkle {
    0%, 100% { opacity: 0.5; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  .xv-letter-script {
    font-family: 'Pinyon Script', cursive;
    font-size: 58px;
    color: #a04060;
    line-height: 1;
    margin-bottom: 4px;
    text-shadow: 0 2px 20px rgba(176, 54, 103, 0.12);
  }

  .xv-letter-script span {
    color: #d9a15a;
  }

  .xv-letter-names {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-weight: 400;
    color: #a87a2e;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .xv-letter-divider {
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e8bfcc, transparent);
    margin: 0 auto 14px;
  }

  .xv-letter-body {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-weight: 300;
    color: #7a3a55;
    line-height: 1.8;
    letter-spacing: 0.03em;
    font-style: italic;
  }

  .xv-letter-body strong {
    font-weight: 400;
    color: #a04060;
    font-style: normal;
  }

  .xv-letter-date {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 400;
    color: #a04060;
    letter-spacing: 0.14em;
    margin-top: 16px;
  }

  .xv-letter-city {
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #b56a7a;
    margin-top: 2px;
  }

  .xv-countdown {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 18px;
    margin-bottom: 2px;
  }

  .xv-countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(160deg, #fff3e6, #fce8ef);
    border: 0.5px solid #f0c4d4;
    border-radius: 12px;
    padding: 10px 4px 8px;
    box-shadow: inset 0 1px 4px rgba(255,255,255,0.6);
  }

  .xv-countdown-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    font-weight: 500;
    color: #a04060;
    line-height: 1;
  }

  .xv-countdown-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #b56a7a;
    margin-top: 2px;
  }

  .xv-countdown-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #b56a7a;
    margin-top: 14px;
    margin-bottom: 6px;
  }

  .xv-letter-flower {
    font-size: 22px;
    display: inline-block;
    animation: xv-flower-sway 3s ease-in-out infinite;
  }

  @keyframes xv-flower-sway {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .xv-letter-flower-right {
    animation-delay: 0.5s;
  }

  .xv-scene-flower {
    position: absolute;
    font-size: 30px;
    opacity: 0.15;
    pointer-events: none;
    animation: xv-float-flower 6s ease-in-out infinite;
  }

  @keyframes xv-float-flower {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }

  .xv-close-btn {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #b56a7a;
    background: rgba(255,255,255,0.7);
    border: 0.5px solid #f0c4d4;
    border-radius: 30px;
    padding: 10px 28px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    opacity: 0;
    pointer-events: none;
    z-index: 20;
  }

  .xv-close-btn.xv-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .xv-close-btn:hover {
    background: rgba(255,255,255,0.9);
    transform: translateX(-50%) scale(1.04);
    box-shadow: 0 4px 20px rgba(176, 54, 103, 0.12);
  }
`;

const XVEnvelopeOpening: React.FC<XVEnvelopeOpeningProps> = ({ onOpen }) => {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const calledOnOpen = useRef(false);
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [petals] = useState<Petal[]>(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 12,
      size: 14 + Math.random() * 14,
      emoji: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
      rotation: Math.random() * 360,
    })),
  );

  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
    })),
  );

  useEffect(() => {
    const tick = () => {
      const diff = new Date(XV_DATE).getTime() - Date.now();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);

    setTimeout(() => {
      setShowLetter(true);
      setTimeout(() => {
        if (!calledOnOpen.current) {
          calledOnOpen.current = true;
          onOpen();
        }
      }, 10000);
    }, 1000);
  };

  const cdItems = [
    { val: countdown.days, label: "Días" },
    { val: countdown.hours, label: "Horas" },
    { val: countdown.minutes, label: "Min" },
    { val: countdown.seconds, label: "Seg" },
  ];

  return (
    <>
      <style>{styles}</style>

      <div className="xv-scene">
        <div
          className="xv-scene-flower"
          style={{ left: "5%", top: "10%", animationDelay: "0s" }}
        >
          🌺
        </div>
        <div
          className="xv-scene-flower"
          style={{ right: "5%", top: "15%", animationDelay: "1s" }}
        >
          🌷
        </div>
        <div
          className="xv-scene-flower"
          style={{ left: "8%", bottom: "20%", animationDelay: "2s" }}
        >
          🌹
        </div>
        <div
          className="xv-scene-flower"
          style={{ right: "8%", bottom: "25%", animationDelay: "0.5s" }}
        >
          🌸
        </div>
        <div
          className="xv-scene-flower"
          style={{ left: "50%", top: "5%", animationDelay: "1.5s" }}
        >
          🌼
        </div>

        {stars.map((s) => (
          <div
            key={s.id}
            className="xv-star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}

        {petals.map((p) => (
          <div
            key={p.id}
            className="xv-petal"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              transform: `rotate(${p.rotation}deg)`,
            }}
          >
            {p.emoji}
          </div>
        ))}

        <div className="xv-center">
          <div className={`xv-pretitle${opened ? " xv-fade-out" : ""}`}>
            Vania <span>✦</span>
          </div>
          <div className={`xv-subtitle${opened ? " xv-fade-out" : ""}`}>
            🌸 Toca el sobre para abrir la invitación 🌸
          </div>

          <div
            className={`xv-wrap${opened ? " xv-opened" : ""}`}
            onClick={handleOpen}
            role="button"
            aria-label="Abrir invitación"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleOpen()}
          >
            <svg
              className="xv-svg"
              viewBox="0 0 340 210"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="xvBodyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fff8f0" />
                  <stop offset="40%" stopColor="#fff0f0" />
                  <stop offset="100%" stopColor="#fce4ec" />
                </linearGradient>
                <linearGradient id="xvFlapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fce4ec" />
                  <stop offset="40%" stopColor="#f8d0de" />
                  <stop offset="100%" stopColor="#f0b8cc" />
                </linearGradient>
                <radialGradient id="xvSealGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fff5f0" />
                  <stop offset="60%" stopColor="#fce4ec" />
                  <stop offset="100%" stopColor="#f0c4d4" />
                </radialGradient>
              </defs>

              <rect
                x="0"
                y="65"
                width="340"
                height="145"
                rx="10"
                fill="url(#xvBodyGrad)"
                stroke="#f0c4d4"
                strokeWidth="1"
              />

              <polygon
                points="0,70 0,210 146,140"
                fill="#f8dce6"
                stroke="#f0c4d4"
                strokeWidth="0.6"
              />

              <polygon
                points="340,70 340,210 194,140"
                fill="#f8dce6"
                stroke="#f0c4d4"
                strokeWidth="0.6"
              />

              <polygon
                points="0,210 340,210 170,126"
                fill="#f0b8cc"
                stroke="#f0c4d4"
                strokeWidth="0.6"
              />

              <g className={`xv-flap${opened ? " xv-opening" : ""}`}>
                <polygon
                  points="0,65 340,65 170,160"
                  fill="url(#xvFlapGrad)"
                  stroke="#f0c4d4"
                  strokeWidth="0.8"
                />
              </g>

              <circle
                cx="170"
                cy="126"
                r="26"
                fill="url(#xvSealGrad)"
                stroke="#d9a15a"
                strokeWidth="1.2"
              />

              <circle
                cx="170"
                cy="126"
                r="22"
                fill="none"
                stroke="#d9a15a"
                strokeWidth="0.4"
                strokeDasharray="3 4"
              />

              <text
                x="170"
                y="135"
                textAnchor="middle"
                className="xv-seal-pulse"
                fontSize="24"
                fill="#a04060"
                fontFamily="'Pinyon Script', cursive"
              >
                XV
              </text>

              <circle
                cx="170"
                cy="126"
                r="28"
                fill="none"
                stroke="#d9a15a"
                strokeWidth="0.3"
                opacity="0.3"
              />

              <text
                x="98"
                y="185"
                fontSize="8"
                fill="#b56a7a"
                opacity="0.2"
                fontFamily="'Cormorant Garamond', serif"
                letterSpacing="0.3"
              >
                ✿
              </text>
              <text
                x="230"
                y="185"
                fontSize="8"
                fill="#b56a7a"
                opacity="0.2"
                fontFamily="'Cormorant Garamond', serif"
                letterSpacing="0.3"
              >
                ✿
              </text>
            </svg>
          </div>

          <div className={`xv-letter${showLetter ? " xv-letter-visible" : ""}`}>
            <div className="xv-letter-deco" />

            <div className="xv-letter-row">
              <div className="xv-letter-line" />
              <span className="xv-letter-icon">✦</span>
              <span
                className="xv-letter-icon"
                style={{ animationDelay: "0.3s" }}
              >
                ✿
              </span>
              <span
                className="xv-letter-icon"
                style={{ animationDelay: "0.6s" }}
              >
                ✦
              </span>
              <div className="xv-letter-line" />
            </div>

            <div className="xv-letter-script">
              <span className="xv-letter-flower">🌷</span> Vania{" "}
              <span className="xv-letter-flower xv-letter-flower-right">
                🌷
              </span>
            </div>
            <div className="xv-letter-names">Mis Quince Años</div>
            <div className="xv-letter-divider" />

            <div className="xv-letter-body">
              Con la bendición de Dios y de mis padres,
              <br />
              <strong>comparto contigo</strong> esta noche
              <br />
              tan especial en la que celebro
              <br />
              mis <strong>quince años</strong>.
            </div>

            <div className="xv-letter-date">27 · Marzo · 2027</div>
            <div className="xv-letter-city">CD MX</div>

            <div className="xv-countdown-title">🌸 Faltan 🌸</div>
            <div className="xv-countdown">
              {cdItems.map((item) => (
                <div key={item.label} className="xv-countdown-item">
                  <span className="xv-countdown-number">
                    {String(item.val).padStart(2, "0")}
                  </span>
                  <span className="xv-countdown-label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="xv-letter-row" style={{ marginTop: 18 }}>
              <div className="xv-letter-line" />
              <span className="xv-letter-icon">🌺</span>
              <span
                className="xv-letter-icon"
                style={{ animationDelay: "0.4s" }}
              >
                🌹
              </span>
              <span
                className="xv-letter-icon"
                style={{ animationDelay: "0.8s" }}
              >
                🌺
              </span>
              <div className="xv-letter-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default XVEnvelopeOpening;
