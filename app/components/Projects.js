"use client";

const projectImages = [
"/images/picture1.jpg",
"/images/picture2.jpg",
"/images/picture3.jpg",
"/images/picture4.jpg",
"/images/picture5.jpg",
"/images/picture6.jpg",
"/images/picture7.jpg"
];

export default function Projects() {
return (
<section className="py-20 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
Featured Projects
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{projectImages.map((img, idx) => (
<div key={idx} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
<img src={img} alt={`Project ${idx + 1}`} className="w-full h-64 object-cover" />
</div>
))}
</div>
</div>
</section>
);
}
