import React, { useState, useRef } from "react";

interface XVEnvelopeOpeningProps {
  onOpen: () => void;
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Pinyon+Script&display=swap');

 .xv-scene {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #fcfcfc;
    transition: opacity 0.6s ease;
}

 .xv-scene::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 15%, rgba(0, 0, 0, 0.02) 0%, transparent 45%),
      radial-gradient(circle at 85% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
    pointer-events: none;
}

  .xv-scene.xv-scene-exit {
    opacity: 0;
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

  /* ===== SOBRE CON IMAGEN ===== */
  .xv-envelope-img {
    width: 340px;
    height: auto;
    max-height: 260px;
    object-fit: contain;
    cursor: pointer;
    user-select: none;
    -webkit-user-drag: none;
    border-radius: 8px;
    transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
                filter 0.7s ease;
  }

  .xv-envelope-img.xv-hidden {
    opacity: 0;
    transform: scale(1.15) translateY(-30px);
    filter: blur(6px);
    pointer-events: none;
  }

  /* ===== IMÁGENES DECORATIVAS SUPERIOR E INFERIOR ===== */
  .xv-deco-top,
  .xv-deco-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.6s ease;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .xv-deco-top {
    top: 0;
  }

  .xv-deco-bottom {
    bottom: 0;
  }

  .xv-deco-top img,
  .xv-deco-bottom img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
  }

  .xv-scene.xv-scene-exit .xv-deco-top,
  .xv-scene.xv-scene-exit .xv-deco-bottom {
    opacity: 0;
  }
`;

const XVEnvelopeOpening: React.FC<XVEnvelopeOpeningProps> = ({ onOpen }) => {
  const [opened, setOpened] = useState(false);
  const [exiting, setExiting] = useState(false);
  const calledOnOpen = useRef(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);

    setTimeout(() => {
      setExiting(true);

      setTimeout(() => {
        if (!calledOnOpen.current) {
          calledOnOpen.current = true;
          onOpen();
        }
      }, 600);
    }, 400);
  };

  return (
    <>
      <style>{styles}</style>

      <div className={`xv-scene${exiting ? " xv-scene-exit" : ""}`}>
        <div className="xv-deco-top">
          <img
            src="/sobre-superior.png"
            alt="Decoración superior"
            draggable={false}
          />
        </div>

        <div className="xv-deco-bottom">
          <img
            src="/sobre-inferior.png"
            alt="Decoración inferior"
            draggable={false}
          />
        </div>

        <div className="xv-center">
          <div className={`xv-pretitle${opened ? " xv-fade-out" : ""}`}>
            Vania
          </div>
          <div className={`xv-subtitle${opened ? " xv-fade-out" : ""}`}>
            Toca el sobre para abrir la invitación
          </div>

          <img
            src="/sobre.jpeg"
            alt="Sobre de invitación"
            className={`xv-envelope-img${opened ? " xv-hidden" : ""}`}
            onClick={handleOpen}
            onKeyDown={(e) => e.key === "Enter" && handleOpen()}
            role="button"
            tabIndex={0}
            aria-label="Abrir invitación"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default XVEnvelopeOpening;