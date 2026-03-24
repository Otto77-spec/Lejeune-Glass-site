"use client";

export default function HeroVideo() {
return (
<section className="relative h-screen w-full overflow-hidden">

<img
src="/images/hero.jpg"
alt="Lejeune Glass"
className="absolute w-full h-full object-cover object-center"
/>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
<div className="w-px h-12 bg-white/50" />
<span className="text-white/60 tracking-[0.3em] text-xs font-light">
SCROLL
</span>
</div>

</section>
);
}