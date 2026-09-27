type Props = {
  label: string;
  gradient?: string;
  className?: string;
  aspect?: string;
  badge?: string;
};

export default function BeautyPlaceholder({
  label,
  gradient = "from-rose-100 via-pink-300 to-plum",
  className = "",
  aspect = "aspect-square",
  badge,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-blush-mid ${aspect} ${className}`}
      role="img"
      aria-label={`Placeholder de catálogo: ${label}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`} />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.55), transparent 45%), radial-gradient(circle at 78% 80%, rgba(42,21,36,0.35), transparent 50%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-15"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <ellipse cx="100" cy="110" rx="28" ry="48" stroke="white" strokeWidth="1.4" />
        <path d="M100 62 C100 62, 88 78, 100 92 C112 78, 100 62, 100 62" stroke="white" strokeWidth="1.2" />
        <circle cx="100" cy="55" r="6" stroke="white" strokeWidth="1.2" />
      </svg>
      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-plum-deep/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-blush backdrop-blur">
          {badge}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum-deep/85 to-transparent p-4 pt-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-blush-deep/90">
          Placeholder catálogo
        </p>
        <p className="mt-1 font-serif text-sm text-cream line-clamp-2">{label}</p>
      </div>
    </div>
  );
}
