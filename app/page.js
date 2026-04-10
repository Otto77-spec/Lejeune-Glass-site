"use client";
import { useState, useEffect } from "react";

const projects = [
{ title: "Zero-Edge Enclosure", src: "/images/projects/shower-1.jpg" },
{ title: "Spa-Style Corner Shower", src: "/images/projects/shower-2.jpg" },
{ title: "Open Walk-In Design", src: "/images/projects/shower-3.jpg" },
{ title: "Floating Glass Staircase", src: "/images/projects/stairs-1.jpg" },
{ title: "Modern Panel Railing", src: "/images/projects/stairs-2.jpg" },
{ title: "Cantilevered Glass Rail", src: "/images/projects/stairs-3.jpg" },
{ title: "Climate-Controlled Cellar", src: "/images/projects/wine-1.jpg" },
{ title: "Full-Wall Display Room", src: "/images/projects/wine-2.jpg" },
{ title: "Custom Frameless Cellar", src: "/images/projects/wine-3.jpg" },
{ title: "Executive Office Partition", src: "/images/projects/office-1.jpg" },
{ title: "Commercial Glass Facade", src: "/images/projects/office-2.jpg" },
{ title: "Open-Plan Glass Divider", src: "/images/projects/office-3.jpg" },
];

const services = [
{ name: "Custom Shower Solutions", desc: "Every shape, every style — 90°, neo-angle, in-line, barn door, framed, and semi-frameless. If you can imagine it, we can install it." },
{ name: "Architectural & Interior Railings", desc: "Glass railings for staircases, hallways, balconies, and custom interior spaces — clean, modern, and engineered to elevate your design." },
{ name: "Luxury Wine & Display Rooms", desc: "Showcase your collection in a climate-controlled, visually stunning glass enclosure — fully custom, fully precise, fully show-stopping." },
{ name: "Residential & Commercial Glass", desc: "Floor-to-ceiling panels, partitions, doors, nooks, studios, saunas — any architectural application, tailored to your exact vision." },
{ name: "Sauna & Gym Glass Walls", desc: "Floor-to-ceiling glass panels for saunas, home gyms, and wellness spaces — creating an open concept that maximizes light, space, and movement." },
];

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Quando&family=Montserrat:wght@200;300;400;500;600&display=swap');
@keyframes fadeIn {
from { opacity: 0; transform: translateY(16px); }
to { opacity: 1; transform: translateY(0); }
}
.nav-wrap {
position: fixed; top: 0; left: 0; right: 0; z-index: 100;
padding: 24px 48px; display: flex; align-items: center;
justify-content: flex-end;
transition: background 0.4s ease, padding 0.3s ease;
}
.nav-wrap.scrolled {
background: rgba(8,8,8,0.97); backdrop-filter: blur(16px);
padding: 16px 48px; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.nav-cta {
font-family: 'Montserrat', sans-serif; font-size: 0.65rem; font-weight: 600;
letter-spacing: 0.22em; text-transform: uppercase; color: #0a0a0a;
background: white; text-decoration: none; padding: 10px 24px;
border: 1px solid white; transition: background 0.2s, color 0.2s; white-space: nowrap;
}
.nav-cta:hover { background: transparent; color: white; border-color: white; }
.project-card { position: relative; overflow: hidden; cursor: pointer; background: #1a1a1a; }
.project-hover {
position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; opacity: 0;
transition: opacity 0.3s ease;
background: linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%);
}
.project-card:hover .project-hover { opacity: 1; }
.project-card img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
.project-card:hover img { transform: scale(1.04); }
.service-card {
background: #0a0a0a; padding: 40px 32px; display: flex; flex-direction: column;
gap: 16px; transition: background 0.3s; border-right: 1px solid rgba(255,255,255,0.05);
}
.service-card:hover { background: #111; }
.service-line { width: 32px; height: 1px; background: white; transition: width 0.3s; }
.service-card:hover .service-line { width: 56px; }
@media (max-width: 768px) {
.nav-wrap { padding: 16px 24px; }
.nav-wrap.scrolled { padding: 14px 24px; }
}
`;

export default function LeJeuneGlass() {
const [scrolled, setScrolled] = useState(false);
const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
const [submitted, setSubmitted] = useState(false);

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 60);
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);

const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        project: formData.service,
        details: formData.message,
      }),
    });
    if (res.ok) setSubmitted(true);
  } catch (err) {
    console.error(err);
  }
};
return (
<>
<style>{pageStyles}</style>

{/* NAV */}
<nav className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
<a href="#contact" className="nav-cta">Free Estimate</a>
</nav>

{/* HERO */}
<section id="hero" style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden", background: "#0a0a0a" }}>
<video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", opacity: 1 }}>
<source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
<div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,8,0.1) 0%, rgba(8,8,8,0.2) 50%, rgba(8,8,8,0.55) 100%)" }} />

<div style={{ position: "absolute", top: "120px", left: "8vw", zIndex: 2, animation: "fadeIn 1.2s ease both" }}>
<div style={{ display: "flex", flexDirection: "column" }}>
<div style={{ fontFamily: "'Quando', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 400, color: "white", lineHeight: 1.05, letterSpacing: "0.02em", textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
<div>LE</div>
<div>JEUNE</div>
<div>GLASS</div>
</div>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.45em", color: "white", textTransform: "uppercase", marginTop: "12px", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
BE THE BEACON
</div>
</div>

</div>
</section>

{/* PROJECTS */}
<section id="projects" style={{ background: "#F8F8F8", padding: "112px 48px" }}>
<div style={{ textAlign: "center", marginBottom: "72px" }}>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.38em", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Portfolio</div>
<h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 300, letterSpacing: "0.04em", color: "#0a0a0a", lineHeight: 1.2, margin: 0 }}>Featured Projects</h2>
<div style={{ width: "40px", height: "1px", background: "#0a0a0a", margin: "20px auto 0" }} />
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px", maxWidth: "1280px", margin: "0 auto" }}>
{projects.map((p, i) => (
<div key={i} className="project-card" style={{ height: "380px" }}>
<img src={p.src} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
<div className="project-hover">
<div style={{ width: "32px", height: "1px", background: "white", marginBottom: "12px", opacity: 0.6 }} />
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.78rem", fontWeight: 400, color: "white", letterSpacing: "0.08em" }}>{p.title}</div>
</div>
</div>
))}
</div>
</section>

{/* SERVICES */}
<section id="services" style={{ background: "#0a0a0a", padding: "112px 48px" }}>
<div style={{ textAlign: "center", marginBottom: "72px" }}>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "16px" }}>What We Do</div>
<h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 300, letterSpacing: "0.04em", color: "white", lineHeight: 1.2, margin: 0 }}>Any Space. Any Glass.</h2>
<div style={{ width: "40px", height: "1px", background: "white", margin: "20px auto 0", opacity: 0.3 }} />
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", maxWidth: "1280px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.06)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
{services.map((s, i) => (
<div key={i} className="service-card">
<div className="service-line" />
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.88rem", fontWeight: 400, color: "white", letterSpacing: "0.04em", lineHeight: 1.4 }}>{s.name}</div>
<p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, letterSpacing: "0.03em", margin: 0 }}>{s.desc}</p>
</div>
))}
</div>
</section>

{/* CONTACT */}
<section id="contact" style={{ background: "#F8F8F8", padding: "112px 48px" }}>
<div style={{ textAlign: "center", marginBottom: "72px" }}>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.38em", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Start Your Project</div>
<h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 300, letterSpacing: "0.04em", color: "#0a0a0a", lineHeight: 1.2, margin: 0 }}>Get a Free Estimate</h2>
<div style={{ width: "40px", height: "1px", background: "#0a0a0a", margin: "20px auto 0" }} />
</div>
<div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "80px", alignItems: "start" }}>
<div>
<h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 300, color: "#0a0a0a", letterSpacing: "0.03em", lineHeight: 1.3, marginBottom: "20px" }}>Your Vision. Our Craft.</h3>
<p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "#555", lineHeight: 2, letterSpacing: "0.03em", marginBottom: "40px" }}>
From concept to installation, we work with homeowners, builders, and designers to deliver premium glass solutions — stress-free, precise, and built to last.
</p>
<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
{[
{ label: "Call Us", value: "(678) 549-2993" },
{ label: "Service Area", value: "Metro Atlanta & Surrounding Counties" },
{ label: "Hours", value: "Monday – Friday, 8 AM – 6 PM" },
].map((row) => (
<div key={row.label}>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", marginBottom: "6px" }}>{row.label}</div>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 400, color: "#0a0a0a", letterSpacing: "0.03em" }}>{row.value}</div>
</div>
))}
</div>
<div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(10,10,10,0.08)" }}>
<p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "#888", lineHeight: 1.9, letterSpacing: "0.03em", fontStyle: "italic" }}>
Every panel is cut, fitted, and finished by our own team — never subcontracted.
</p>
</div>
</div>

{submitted ? (
<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "380px", gap: "16px", textAlign: "center" }}>
<div style={{ width: "40px", height: "1px", background: "#0a0a0a", margin: "0 auto" }} />
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 300, color: "#0a0a0a", marginTop: "16px" }}>Thank you.</div>
<p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.82rem", color: "#888", letterSpacing: "0.03em", lineHeight: 1.9 }}>We'll review your project and reach out within one business day.</p>
</div>
) : (
<form style={{ display: "flex", flexDirection: "column", gap: "18px" }} onSubmit={handleSubmit}>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
{[
{ id: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
{ id: "phone", label: "Phone Number", type: "tel", placeholder: "(404) 555-0100" },
].map((f) => (
<div key={f.id} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<label htmlFor={f.id} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#666" }}>{f.label}</label>
<input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} value={formData[f.id]} onChange={handleChange} required
style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#0a0a0a", background: "white", border: "1px solid #ddd", padding: "13px 16px", outline: "none", letterSpacing: "0.03em" }} />
</div>
))}
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<label htmlFor="email" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#666" }}>Email Address</label>
<input id="email" name="email" type="email" placeholder="john@email.com" value={formData.email} onChange={handleChange} required
style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#0a0a0a", background: "white", border: "1px solid #ddd", padding: "13px 16px", outline: "none", letterSpacing: "0.03em" }} />
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<label htmlFor="service" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#666" }}>Type of Project</label>
<select id="service" name="service" value={formData.service} onChange={handleChange} required
style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#0a0a0a", background: "white", border: "1px solid #ddd", padding: "13px 16px", outline: "none", letterSpacing: "0.03em" }}>
<option value="" disabled>Select a service...</option>
<option value="Custom Shower">Custom Shower Solutions</option>
<option value="Railings">Architectural & Interior Railings</option>
<option value="Wine Room">Luxury Wine & Display Room</option>
<option value="Residential / Commercial">Residential & Commercial Glass</option>
<option value="Sauna / Gym">Sauna & Gym Glass Walls</option>
<option value="Other">Other / Not Sure Yet</option>
</select>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
<label htmlFor="message" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#666" }}>Project Details</label>
<textarea id="message" name="message" placeholder="Dimensions, location, timeline, or anything else..." value={formData.message} onChange={handleChange} required
style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#0a0a0a", background: "white", border: "1px solid #ddd", padding: "13px 16px", outline: "none", letterSpacing: "0.03em", minHeight: "130px", resize: "vertical" }} />
</div>
<button type="submit" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", padding: "16px 40px", background: "#0a0a0a", color: "white", border: "none", cursor: "pointer", alignSelf: "flex-start", marginTop: "8px" }}>
Request My Free Estimate
</button>
</form>
)}
</div>
</section>

{/* FOOTER */}
<footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
<img
src="/images/LJG-logo.png"
alt="LeJeune Glass"
style={{ width: "80px", height: "auto", mixBlendMode: "screen" }}
/>
</div>
<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
© {new Date().getFullYear()} LeJeune Glass. All rights reserved.
</div>
<div style={{ display: "flex", gap: "12px" }}>
{["IG", "FB"].map((s) => (
<a key={s} href="#" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.62rem", fontFamily: "'Montserrat', sans-serif", fontWeight: 500, transition: "border-color 0.2s, color 0.2s" }}
onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.color = "white"; }}
onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>
{s}
</a>
))}
</div>
</footer>
</>
);
}