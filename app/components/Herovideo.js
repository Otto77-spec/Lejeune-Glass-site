"use client";

export default function HeroVideo({ videoSrc, headline, subtext, buttons }) {
return (
<section className="relative h-screen w-full">
<video
src={videoSrc}
autoPlay
loop
muted
className="absolute w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{headline}</h1>
<p className="text-white text-lg md:text-2xl mb-6">{subtext}</p>
<div className="flex gap-4 flex-wrap justify-center">
{buttons.map((btn, idx) => (
<a
key={idx}
href={btn.href}
className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
>
{btn.text}
</a>
))}
</div>
</div>
</section>
);
}

