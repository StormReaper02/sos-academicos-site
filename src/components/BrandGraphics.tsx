import React from 'react';

/**
 * Official SOS Acadêmicos Brand Graphics & SVGs
 * Faithfully designed based on the Brand Guidelines
 */

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

/**
 * Official SOS Acadêmicos Logo
 * Available in:
 * - 'badge': white rounded container with orange text (as seen in header & mockup)
 * - 'flat-orange': direct orange text with buoy
 * - 'white': for dark navy backgrounds like the footer
 */
export const SosLogo: React.FC<{
  variant?: 'badge' | 'flat-orange' | 'white';
  className?: string;
  showSubtitle?: boolean;
}> = ({ variant = 'badge', className = '', showSubtitle = true }) => {
  const [imgError, setImgError] = React.useState(false);

  if (!imgError) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        {variant === 'white' ? (
          /* Logo branco transparente puro para o rodapé escuro */
          <img
            src="/assets/logo.png"
            alt="SOS Acadêmicos"
            className="h-10 sm:h-12 w-auto object-contain brightness-0 invert transition-transform hover:scale-105 duration-200"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <img
            src="/assets/logo.png"
            alt="SOS Acadêmicos"
            className="h-11 sm:h-14 w-auto object-contain transition-transform hover:scale-105 duration-200"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        )}
      </div>
    );
  }

  const isWhite = variant === 'white';
  const isBadge = variant === 'badge';

  const textColor = isWhite ? '#FFFFFF' : '#fc520a';
  const buoyBg = isWhite ? '#FFFFFF' : '#fc520a';
  const buoyStraps = isWhite ? '#1b09b7' : '#f7eddb';
  const buoyInner = isWhite ? '#1b09b7' : '#f7eddb';

  if (isBadge) {
    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        <div className="bg-white px-3.5 py-1.5 rounded-2xl shadow-sm border-2 border-[#fc520a]/20 flex flex-col items-center select-none transition-transform hover:scale-105 duration-200">
          <div className="flex items-center gap-0.5">
            {/* S */}
            <span className="font-display font-extrabold text-[#fc520a] text-3xl sm:text-4xl leading-none tracking-tight">
              S
            </span>
            {/* O as Lifebuoy */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 mx-0.5 my-auto flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="46" fill="#fc520a" />
                {/* Cream inner ring */}
                <circle cx="50" cy="50" r="30" fill="#f7eddb" />
                {/* Center hole */}
                <circle cx="50" cy="50" r="16" fill="#fc520a" />
                {/* 4 Straps */}
                <rect x="44" y="4" width="12" height="18" fill="#f7eddb" rx="2" />
                <rect x="44" y="78" width="12" height="18" fill="#f7eddb" rx="2" />
                <rect x="4" y="44" width="18" height="12" fill="#f7eddb" rx="2" />
                <rect x="78" y="44" width="18" height="12" fill="#f7eddb" rx="2" />
              </svg>
            </div>
            {/* S */}
            <span className="font-display font-extrabold text-[#fc520a] text-3xl sm:text-4xl leading-none tracking-tight">
              S
            </span>
          </div>
          {showSubtitle && (
            <span className="font-display font-bold text-[#fc520a] text-[11px] sm:text-[13px] tracking-wide mt-[-2px] lowercase">
              acadêmicos
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-0.5">
        <span
          className="font-display font-black text-3xl sm:text-4xl leading-none tracking-tight"
          style={{ color: textColor }}
        >
          S
        </span>
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 mx-0.5 my-auto flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="46" fill={buoyBg} />
            <circle cx="50" cy="50" r="30" fill={buoyInner} />
            <circle cx="50" cy="50" r="16" fill={buoyBg} />
            <rect x="44" y="4" width="12" height="18" fill={buoyStraps} rx="2" />
            <rect x="44" y="78" width="12" height="18" fill={buoyStraps} rx="2" />
            <rect x="4" y="44" width="18" height="12" fill={buoyStraps} rx="2" />
            <rect x="78" y="44" width="18" height="12" fill={buoyStraps} rx="2" />
          </svg>
        </div>
        <span
          className="font-display font-black text-3xl sm:text-4xl leading-none tracking-tight"
          style={{ color: textColor }}
        >
          S
        </span>
      </div>
      {showSubtitle && (
        <span
          className="font-display font-bold text-[12px] sm:text-[14px] tracking-wide mt-[-2px] lowercase"
          style={{ color: isWhite ? '#FFFFFF' : textColor }}
        >
          acadêmicos
        </span>
      )}
    </div>
  );
};

/**
 * The Brand Lifebuoy (Bóia Salva-Vidas)
 */
export const Lifebuoy: React.FC<IconProps & { ringColor?: string; strapColor?: string }> = ({
  size = 120,
  className = '',
  ringColor = '#fc520a',
  strapColor = '#f7eddb',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer Glow / Shadow */}
      <circle cx="100" cy="100" r="92" fill={ringColor} filter="drop-shadow(0 8px 16px rgba(0,0,0,0.1))" />
      {/* Inner Cream Ring */}
      <circle cx="100" cy="100" r="60" fill={strapColor} />
      {/* Center Hole */}
      <circle cx="100" cy="100" r="32" fill={ringColor} />
      {/* 4 Cream Straps */}
      <path d="M88 10 H112 V44 H88 Z" fill={strapColor} rx="4" />
      <path d="M88 156 H112 V190 H88 Z" fill={strapColor} rx="4" />
      <path d="M10 88 H44 V112 H10 Z" fill={strapColor} rx="4" />
      <path d="M156 88 H190 V112 H156 Z" fill={strapColor} rx="4" />
      {/* Subtle 3D highlight rim */}
      <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="3" strokeOpacity="0.3" fill="none" />
    </svg>
  );
};

/**
 * 8-petal curved pink starburst (Image 1 from brand guide)
 */
export const PinkFlowerBurst: React.FC<IconProps> = ({ size = 48, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M50 0 C50 25 25 50 0 50 C25 50 50 75 50 100 C50 75 75 50 100 50 C75 50 50 25 50 0 Z"
        fill="#f20961"
      />
      <path
        d="M50 0 C53 20 65 35 85 15 C65 35 80 47 100 50 C80 53 65 65 85 85 C65 65 53 80 50 100 C47 80 35 65 15 85 C35 65 20 53 0 50 C20 47 35 35 15 15 C35 35 47 20 50 0 Z"
        fill="#f20961"
      />
    </svg>
  );
};

/**
 * 16-point sharp starburst (Images 2, 3, 5 from brand guide)
 */
export const Starburst: React.FC<
  IconProps & { color?: string; points?: number }
> = ({ size = 48, color = '#fc520a', className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <polygon points="50,0 59,32 90,20 73,47 100,50 73,53 90,80 59,68 50,100 41,68 10,80 27,53 0,50 27,47 10,20 41,32" />
    </svg>
  );
};

/**
 * 4-point curved diamond sparkle (Image 4 from brand guide)
 */
export const DiamondSparkle: React.FC<IconProps & { color?: string }> = ({
  size = 36,
  color = '#fc520a',
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" />
    </svg>
  );
};

/**
 * 4-scalloped orange pill shape (Image 6 from brand guide)
 */
export const ScallopPill: React.FC<IconProps & { color?: string }> = ({
  size = 60,
  color = '#fc520a',
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={Number(size) * 0.6}
      viewBox="0 0 150 90"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="25" y="10" width="100" height="70" rx="35" />
      <circle cx="35" cy="45" r="30" />
      <circle cx="65" cy="45" r="30" />
      <circle cx="95" cy="45" r="30" />
      <circle cx="115" cy="45" r="30" />
    </svg>
  );
};

/**
 * Brand blue cursor arrow pointer (Image 7 from brand guide)
 */
export const CursorPointer: React.FC<IconProps & { color?: string }> = ({
  size = 36,
  color = '#0d48ff',
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10 10 L85 45 L50 55 L35 90 Z" />
      <path d="M45 55 L75 85" stroke={color} strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
};

/**
 * 8-spoke Asterisk burst (Image 8 from brand guide)
 */
export const AsteriskBurst: React.FC<IconProps & { color?: string }> = ({
  size = 40,
  color = '#fc520a',
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="42" y="5" width="16" height="90" rx="8" />
      <rect x="5" y="42" width="90" height="16" rx="8" />
      <rect
        x="42"
        y="5"
        width="16"
        height="90"
        rx="8"
        transform="rotate(45 50 50)"
      />
      <rect
        x="42"
        y="5"
        width="16"
        height="90"
        rx="8"
        transform="rotate(-45 50 50)"
      />
    </svg>
  );
};

/**
 * Graduation Cap (Page 2 of Brand Book)
 */
export const GraduationCap: React.FC<IconProps> = ({ size = 32, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cap top diamond */}
      <polygon points="32,10 60,22 32,34 4,22" fill="#1e293b" />
      {/* Cap skull underneath */}
      <path d="M14 26 V38 C14 47 32 52 32 52 C32 52 50 47 50 38 V26 L32 34 Z" fill="#334155" />
      {/* Golden tassel cord and fringe */}
      <path d="M32 22 Q48 24 50 36" stroke="#ffae1e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="38" r="3" fill="#ffae1e" />
      <rect x="48" y="39" width="4" height="8" fill="#ffae1e" rx="1" />
    </svg>
  );
};

/**
 * Wavy Top Divider (Blue organic wave from page 13 mockup)
 */
export const BlueWaveDivider: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-10 sm:h-14 md:h-16"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill="#0d48ff"
        />
      </svg>
    </div>
  );
};

/**
 * Three playful burst lines (Doodle Burst) seen next to titles in the mockup
 */
export const DoodleBurst: React.FC<{
  color?: string;
  size?: number;
  className?: string;
  angle?: number;
}> = ({ color = '#fc520a', size = 32, className = '', angle = 0 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <path
        d="M20 28 L8 36"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M24 22 L18 8"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M28 26 L42 16"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Brazil Map outline icon for "Atendimento em todo o Brasil"
 */
export const BrazilMapIcon: React.FC<IconProps & { color?: string, filled?: boolean }> = ({
  size = 28,
  color = '#1e4a83',
  className = '',
  filled = false,
  ...props
}) => {
  return (
    <img
      src="/assets/mapa-brasil.png"
      alt="Mapa do Brasil"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{
        // If the user uploads a black outline image, this filter can turn it white
        filter: color === '#FFFFFF' ? 'brightness(0) invert(1)' : 'none',
      }}
      {...props}
    />
  );
};

export const GraduationCapIcon: React.FC<IconProps & { color?: string, strokeWidth?: number }> = ({
  size = 28,
  color = '#1e4a83',
  className = '',
  strokeWidth = 5,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M10 40 L50 20 L90 40 L50 60 Z" />
      <path d="M25 50 L25 70 C25 80, 75 80, 75 70 L75 50" />
      <path d="M90 40 L90 65" />
      <circle cx="90" cy="70" r={strokeWidth > 5 ? strokeWidth - 2 : 5} fill={color} stroke="none" />
    </svg>
  );
};

export const DocumentIcon: React.FC<IconProps & { color?: string }> = ({
  size = 28,
  color = '#1e4a83',
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M25 10 L60 10 L80 30 L80 90 L25 90 Z" />
      <path d="M60 10 L60 30 L80 30" />
      <line x1="35" y1="35" x2="45" y2="35" />
      <line x1="35" y1="50" x2="65" y2="50" />
      <line x1="35" y1="65" x2="65" y2="65" />
      <line x1="35" y1="80" x2="65" y2="80" />
    </svg>
  );
};

/**
 * Organic animated wave divider simulating ocean waves
 */
export const WaveDivider: React.FC<{
  fillColor: string;
  className?: string;
  inverted?: boolean;
}> = ({ fillColor, className = '', inverted = false }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none relative ${className} ${
        inverted ? 'rotate-180' : ''
      }`}
    >
      <div className="relative w-full h-10 sm:h-14 md:h-18 overflow-hidden">
        {/* Camada 1 de onda suave de fundo (semitransparente criando profundidade aquática) */}
        <div className="absolute inset-0 w-[200%] h-full animate-wave-flow-slow opacity-40">
          <svg
            viewBox="0 0 2880 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <path
              d="M0,45 C360,15 720,75 1080,45 C1440,15 1800,75 2160,45 C2520,15 2880,75 2880,45 L2880,100 L0,100 Z"
              fill={fillColor}
            />
          </svg>
        </div>

        {/* Camada 2 de onda principal em primeiro plano */}
        <div className="absolute inset-0 w-[200%] h-full animate-wave-flow">
          <svg
            viewBox="0 0 2880 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            <path
              d="M0,50 C360,80 720,20 1080,50 C1440,80 1800,20 2160,50 C2520,80 2880,20 2880,50 L2880,100 L0,100 Z"
              fill={fillColor}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

