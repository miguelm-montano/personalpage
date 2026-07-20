/**
 * Shared layout for all pages except Home.
 * Renders a vertical email on the left and the page content on the right.
 */
export default function PageLayout({ children }) {
  return (
    <div className="relative h-full flex">

      {/* ── Vertical email — left side ── */}
      <div className="flex items-end justify-center w-16 pb-10 shrink-0">
        <span
          className="font-open-sans text-xs text-white tracking-widest whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          migmontm@gmail.com
        </span>
      </div>

      {/* ── Page content ── */}
      <div className="flex-1 h-full">
        {children}
      </div>

    </div>
  )
}
