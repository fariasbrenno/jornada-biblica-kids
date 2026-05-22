export default function WaveDivider({ topColor = '#FFFFFF', bottomColor = '#FFFFFF' }) {
  const isDark = bottomColor === '#1A1035'

  return (
    <div style={{ backgroundColor: bottomColor, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '60px' }}
      >
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill={topColor} />
        {isDark && (
          <path
            d="M0,30 C360,60 1080,0 1440,30"
            fill="none"
            stroke="rgba(245,166,35,0.15)"
            strokeWidth="1"
          />
        )}
      </svg>
    </div>
  )
}
