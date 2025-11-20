import svgPaths from "./imports/svg-hvmoih2jwx";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="block w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1075 730"
      >
        <g>
          <g>
            <path d={svgPaths.p22502500} fill="#D52169" />
            <path d={svgPaths.pbd37680} fill="#B41353" />
            <path d={svgPaths.p2eb4100} fill="#D52169" />
          </g>
          <rect fill="#28292D" height="285" width="74" x="368.996" y="178" />
          <g>
            <rect fill="#28292D" height="285" width="74" x="822.998" y="178.5" />
            <path d={svgPaths.p1eade380} fill="#28292D" />
          </g>
          <g>
            <path d={svgPaths.p1a690fc0} fill="#28292D" />
            <path d={svgPaths.p1a64f200} fill="#28292D" />
          </g>
          <circle cx="405.998" cy="101" fill="#28292D" r="45" />
        </g>
        <path d="M60 525H1015L955 730H0L60 525Z" fill="#FFBF71" />
        <text
          x="77"
          y="690"
          fill="#28292D"
          fontFamily="Archivo, sans-serif"
          fontSize="150"
          fontWeight="700"
          fontStyle="italic"
          letterSpacing="61.5"
        >
          STUDIO
        </text>
      </svg>
    </div>
  );
}

export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="block w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 36 1003 516"
      >
        <g>
          <g>
            <path d={svgPaths.p22502500} fill="#D52169" />
            <path d={svgPaths.pbd37680} fill="#B41353" />
            <path d={svgPaths.p2eb4100} fill="#D52169" />
          </g>
          <rect fill="#28292D" height="285" width="74" x="368.996" y="178" />
          <g>
            <rect fill="#28292D" height="285" width="74" x="822.998" y="178.5" />
            <path d={svgPaths.p1eade380} fill="#28292D" />
          </g>
          <g>
            <path d={svgPaths.p1a690fc0} fill="#28292D" />
            <path d={svgPaths.p1a64f200} fill="#28292D" />
          </g>
          <circle cx="405.998" cy="101" fill="#28292D" r="45" />
        </g>
      </svg>
    </div>
  );
}
