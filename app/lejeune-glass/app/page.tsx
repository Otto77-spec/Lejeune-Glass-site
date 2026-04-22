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
  {
    name: "Custom Shower Solutions",
    desc: "Every shape, every style — 90°, neo-angle, in-line, barn door, framed, and semi-frameless. If you can imagine it, we can install it.",
  },
  {
    name: "Architectural & Interior Railings",
    desc: "Glass railings for staircases, hallways, balconies, and custom interior spaces — clean, modern, and engineered to elevate your design.",
  },
  {
    name: "Luxury Wine & Display Rooms",
    desc: "Showcase your collection in a climate-controlled, visually stunning glass enclosure — fully custom, fully precise, fully show-stopping.",
  },
  {
    name: "Residential & Commercial Glass",
    desc: "Floor-to-ceiling panels, partitions, doors, nooks, studios, saunas — any architectural application, tailored to your exact vision.",
  },
  {
    name: "Sauna & Gym Glass Walls",
    desc: "Floor-to-ceiling glass panels for saunas, home gyms, and wellness spaces — creating an open concept that maximizes light, space, and movement.",
  },
];

const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@300;400;500&display=swap');
@keyframes bdFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes bdShimmer {
  0%   { background-position: 100% 50%; }
  100% { background-position: -100% 50%; }
}
@keyframes shardIn {
  0%   { opacity: 0; transform: var(--shard-from); }
  60%  { opacity: 1; }
  100% { opacity: 1; transform: translate(0,0) rotate(0deg) scale(1); }
}
.bd-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: #000;
  display: flex; flex-direction: column; align-items: center;
  justify-content: flex-start; overflow-y: auto; overflow-x: hidden;
  padding: 60px 24px 80px; text-align: center;
  transition: opacity 1.2s ease;
}
.bd-overlay.fading { opacity: 0; pointer-events: none; }
.bd-shard-wrap { position: relative; width: 280px; height: 170px; margin-bottom: 24px; flex-shrink: 0; }
.bd-shard {
  position: absolute;
  background: linear-gradient(135deg, rgba(200,169,110,0.9), rgba(232,207,160,0.6), rgba(200,169,110,0.4));
  border: 1px solid rgba(200,169,110,0.3);
  opacity: 0;
  animation: shardIn 1.8s cubic-bezier(0.16,1,0.3,1) forwards;
}
.bd-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.6rem, 5vw, 2.8rem);
  font-weight: 300; letter-spacing: 0.3em; text-transform: uppercase;
  background: linear-gradient(90deg, #C8A96E 0%, #e8cfa0 40%, #fff8ee 50%, #e8cfa0 60%, #C8A96E 100%);
  background-size: 300%;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  animation: bdFadeUp 1s ease 1.4s both, bdShimmer 4s linear 2.5s infinite;
}
.bd-tagline {
  font-family: 'Montserrat', sans-serif; font-size: 0.65rem;
  letter-spacing: 0.25em; color: rgba(200,169,110,0.55); text-transform: uppercase;
  margin-top: 10px; animation: bdFadeUp 1s ease 1.7s both;
}
.bd-msg { animation: bdFadeUp 1s ease 2.1s both; max-width: 580px; }
.bd-enter {
  margin-top: 36px; animation: bdFadeUp 1s ease 2.6s both;
  border: 1px solid #C8A96E; background: transparent;
  color: #C8A96E; font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase;
  padding: 14px 48px; cursor: pointer; white-space: nowrap;
  transition: color 0.4s ease, background 0.4s ease;
}
.bd-enter:hover { background: #C8A96E; color: #121212; }
@keyframes goldLine {
  from { width: 0; opacity: 0; }
  to { width: 40px; opacity: 1; }
}
@keyframes titleFadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.project-hover {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 28px 24px;
  opacity: 0;
  transition: opacity 0.35s ease;
  background: linear-gradient(to top, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.4) 65%, transparent 100%);
}
.project-gold-line {
  height: 1px;
  background: #C8A96E;
  width: 0;
  margin-bottom: 12px;
}
.project-title-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.06em;
  line-height: 1.3;
  opacity: 0;
  transform: translateY(10px);
}
.project-card:hover .project-hover { opacity: 1; }
.project-card:hover .project-gold-line {
  animation: goldLine 0.45s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s both;
}
.project-card:hover .project-title-text {
  animation: titleFadeUp 0.4s ease 0.3s both;
}
.nav-wrap {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  transition: background 0.4s ease, padding 0.3s ease;
  padding: 22px 48px;
  background: rgba(18,18,18,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(200,169,110,0.15);
}
.nav-wrap.scrolled {
  background: rgba(18,18,18,0.96);
  backdrop-filter: blur(12px);
  padding: 16px 48px;
  border-bottom: 1px solid rgba(200,169,110,0.2);
}
.nav-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
}
.nav-left { display: flex; gap: 32px; align-items: center; }
.nav-center { display: flex; justify-content: center; }
.nav-right { display: flex; gap: 32px; align-items: center; justify-content: flex-end; }
.brand-logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 0.28em;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}
.brand-divider { color: #C8A96E; font-weight: 300; }
.nav-link-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;
}
.nav-link-item:hover { color: #C8A96E; }
.nav-link-item.gold { color: #C8A96E; }
.nav-link-item.gold:hover { color: #dfc28e; }
.menu-btn {
  display: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);
  color: white;
  font-size: 1.2rem;
  width: 42px;
  height: 42px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: border-color 0.2s;
}
.menu-btn:hover { border-color: #C8A96E; color: #C8A96E; }
.mobile-menu {
  display: none;
  position: fixed;
  top: 70px; left: 0; right: 0;
  z-index: 99;
  background: rgba(18,18,18,0.98);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(200,169,110,0.2);
  flex-direction: column;
  padding: 32px;
  gap: 0;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: color 0.2s;
}
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu a:hover { color: #C8A96E; }
.mobile-menu a.gold { color: #C8A96E; }
@media (max-width: 768px) {
  .nav-left, .nav-right { display: none; }
  .menu-btn { display: flex; }
  .nav-wrap { padding: 16px 24px; }
  .nav-wrap.scrolled { padding: 14px 24px; }
  .brand-logo { font-size: 1.6rem; letter-spacing: 0.18em; }
}
`;

export default function LeJeuneGlass() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("happy-birthday") === "justin") setShowOverlay(true);
  }, []);
  const [overlayFading, setOverlayFading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const enterSite = () => {
    setOverlayFading(true);
    setTimeout(() => setShowOverlay(false), 1200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const shards = [
    { w:80, h:90, t:10, l:50, clip:"polygon(50% 0%,100% 100%,0% 100%)", from:"translate(-120px,-80px) rotate(-45deg) scale(0.3)", delay:"0.1s" },
    { w:60, h:70, t:0,  l:120, clip:"polygon(0 0,100% 40%,60% 100%)",   from:"translate(100px,-60px) rotate(60deg) scale(0.2)",  delay:"0.25s" },
    { w:90, h:80, t:30, l:160, clip:"polygon(20% 0%,100% 0%,80% 100%,0% 80%)", from:"translate(150px,40px) rotate(30deg) scale(0.3)", delay:"0.15s" },
    { w:70, h:100,t:80, l:20,  clip:"polygon(30% 0%,100% 20%,70% 100%,0% 90%)", from:"translate(-100px,80px) rotate(-30deg) scale(0.2)", delay:"0.35s" },
    { w:100,h:60, t:110,l:90,  clip:"polygon(0 0,100% 30%,85% 100%,15% 80%)",  from:"translate(20px,120px) rotate(15deg) scale(0.3)",  delay:"0.2s" },
    { w:55, h:65, t:60, l:105, clip:"polygon(50% 0%,100% 100%,0% 85%)",  from:"translate(-30px,-90px) rotate(-20deg) scale(0.4)", delay:"0.4s" },
    { w:65, h:75, t:85, l:180, clip:"polygon(10% 0%,90% 10%,100% 90%,0% 100%)", from:"translate(130px,60px) rotate(50deg) scale(0.2)", delay:"0.3s" },
  ];

  return (
    <>
      <style>{pageStyles}</style>

      {showOverlay && (
        <div className={`bd-overlay${overlayFading ? " fading" : ""}`}>
          <div className="bd-shard-wrap">
            {shards.map((s, i) => (
              <div key={i} className="bd-shard" style={{
                width: s.w, height: s.h, top: s.t, left: s.l,
                clipPath: s.clip,
                ["--shard-from" as any]: s.from,
                animationDelay: s.delay,
              }} />
            ))}
          </div>

          <div className="bd-name">LeJeune &amp; Glass</div>
          <div className="bd-tagline">Metro Atlanta · Est. 2018</div>

          <div className="bd-msg">
            <p style={{fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:"clamp(1.4rem,3.5vw,2.2rem)", fontWeight:300, background:"linear-gradient(90deg,#C8A96E,#e8cfa0,#C8A96E)", backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"bdShimmer 3s linear infinite", marginTop:32}}>
              Happy Birthday, Justin
            </p>
            <p style={{fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:"clamp(0.95rem,2vw,1.15rem)", fontWeight:300, color:"rgba(248,246,242,0.8)", lineHeight:1.9, letterSpacing:"0.04em", fontStyle:"italic", marginTop:24}}>
              You are the best friend anyone could have<br/>the pleasure of knowing — and I get extra.
            </p>
            <p style={{fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:"clamp(0.95rem,2vw,1.15rem)", fontWeight:300, color:"rgba(248,246,242,0.8)", lineHeight:1.9, letterSpacing:"0.04em", fontStyle:"italic", marginTop:16}}>
              Working on a personal project with you has uplifted not only my life,<br/>
              but I hope you know that every day is a gift —
            </p>
            <p style={{fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:"clamp(1rem,2.2vw,1.3rem)", fontWeight:400, color:"rgba(248,246,242,0.95)", lineHeight:1.9, letterSpacing:"0.04em", fontStyle:"italic", marginTop:16}}>
              and today, in <span style={{color:"#C8A96E"}}>&apos;75</span>, the universe gifted us <em>you.</em>
            </p>
            <p style={{fontFamily:"Cormorant Garamond, Georgia, serif", fontSize:"clamp(0.95rem,2vw,1.15rem)", fontWeight:300, color:"rgba(248,246,242,0.75)", lineHeight:1.9, letterSpacing:"0.04em", fontStyle:"italic", marginTop:16}}>
              I wouldn&apos;t want to live in a world where there was no you.
            </p>
            <div style={{width:60, height:1, background:"#C8A96E", margin:"24px auto", opacity:0.5}} />
            <p style={{fontFamily:"Montserrat, sans-serif", fontSize:"0.6rem", letterSpacing:"0.35em", color:"#C8A96E", textTransform:"uppercase", opacity:0.85}}>
              With love — Happy Birthday, Dear Justin
            </p>
          </div>

          <button className="bd-enter" onClick={enterSite}>Enter the Experience</button>
        </div>
      )}

      <nav className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-left">
            <a href="#projects" className="nav-link-item">Projects</a>
            <a href="#services" className="nav-link-item">Services</a>
          </div>
          <div className="nav-center">
            <a href="#hero" className="brand-logo">
              LEJEUNE <span className="brand-divider">|</span> GLASS
            </a>
          </div>
          <div className="nav-right">
            <a href="#contact" className="nav-link-item">Contact</a>
            <a href="/estimator" className="nav-link-item gold">Free Estimate</a>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "X" : "="}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="/estimator" onClick={closeMenu} className="gold">Free Estimate</a>
      </div>

      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" style={{background: '#121212'}}>
        <img
          src="/images/hero.jpg"
          alt="LeJeune Glass hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-none"
        />
        <div className="absolute inset-0 rounded-none" style={{ background: "linear-gradient(to bottom, rgba(18,18,18,0.15) 0%, rgba(18,18,18,0.5) 55%, rgba(18,18,18,0.92) 100%)" }} />
        <div className="relative z-10 text-center max-w-2xl px-6 w-full">
          <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 300, fontStyle: "italic", letterSpacing: "0.15em", color: "rgba(255,255,255,0.92)", marginBottom: "20px", lineHeight: 1.7 }}>
            Frameless Glass, Designed to Elevate Your Space.
          </p>
          <div style={{ width: "56px", height: "1px", background: "linear-gradient(to right, transparent, rgba(200,169,110,0.8), transparent)", margin: "0 auto 48px" }} />
          <div style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            {[
              { label: "View Projects", href: "#projects", gold: false },
              { label: "Free Estimate", href: "/estimator", gold: true },
              { label: "Contact Us", href: "#contact", gold: false },
            ].map((btn, i, arr) => (
              <div key={btn.label} style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                <a href={btn.href} style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: btn.gold ? "#C8A96E" : "rgba(255,255,255,0.85)", textDecoration: "none", borderBottom: btn.gold ? "1px solid rgba(200,169,110,0.5)" : "1px solid rgba(255,255,255,0.35)", paddingBottom: "3px", transition: "color 0.2s, border-color 0.2s" }}>
                  {btn.label}
                </a>
                {i < arr.length - 1 && (
                  <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "36px", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", fontSize: "0.62rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #C8A96E, transparent)" }} />
          Scroll
        </div>
      </section>

      <section id="projects" className="py-28 px-8 md:px-12" style={{background: '#F8F6F2'}}>
        <div className="text-center mb-20">
          <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "14px", display: "block" }}>Portfolio</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.03em", color: "#121212", lineHeight: 1.15 }}>Featured Projects</h2>
          <div style={{ width: "48px", height: "1px", background: "#C8A96E", margin: "20px auto 0" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="project-card group relative overflow-hidden rounded cursor-pointer" style={{ height: "380px", background: '#1e1e1e' }}>
              <img src={p.src} alt={p.title} className="w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
              <div className="project-hover">
                <div className="project-gold-line" />
                <div className="project-title-text">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-28 px-8 md:px-12" style={{background: '#121212'}}>
        <div className="text-center mb-20">
          <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "14px", display: "block" }}>What We Do</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.03em", color: "white", lineHeight: 1.15 }}>Our Services</h2>
          <div style={{ width: "48px", height: "1px", background: "#C8A96E", margin: "20px auto 0" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px max-w-screen-xl mx-auto" style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)'}}>
          {services.map((s, i) => (
            <div key={i} className="px-8 py-12 flex flex-col gap-5 transition-all duration-300 group" style={{background: '#121212'}}
              onMouseEnter={e => e.currentTarget.style.background = '#1a1a1a'}
              onMouseLeave={e => e.currentTarget.style.background = '#121212'}>
              <div className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{background: '#C8A96E'}} />
              <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.35rem", fontWeight: 400, color: "white", letterSpacing: "0.03em", lineHeight: 1.3 }}>{s.name}</div>
              <p style={{ fontSize: "0.82rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, letterSpacing: "0.04em" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-28 px-8 md:px-12" style={{background: '#F5F4F1'}}>
        <div className="text-center mb-20">
          <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "14px", display: "block" }}>Start Your Project</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.03em", color: "#121212", lineHeight: 1.15 }}>Get a Free Estimate</h2>
          <div style={{ width: "48px", height: "1px", background: "#C8A96E", margin: "20px auto 0" }} />
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          <div>
            <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#121212", letterSpacing: "0.04em", lineHeight: 1.3, marginBottom: "20px" }}>
              Your Vision. Our Craft.
            </h3>
            <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "#444", lineHeight: 1.95, letterSpacing: "0.04em", marginBottom: "36px" }}>
              From concept to installation, we work with homeowners, builders, and designers to deliver premium, flawless glass solutions — stress-free, polished, and magical. Tell us about your project today!
            </p>
            <div className="flex flex-col gap-6">
              {[
                { label: "Call Us", value: "(678) 549-2993" },
                { label: "Service Area", value: "Metro Atlanta & Surrounding Counties" },
                { label: "Hours", value: "Monday - Friday, 8 AM - 6 PM" },
              ].map((row) => (
                <div key={row.label}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8A96E", marginBottom: "6px" }}>{row.label}</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 400, color: "#222", letterSpacing: "0.04em" }}>{row.value}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(18,18,18,0.1)" }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 300, color: "#666", lineHeight: 1.9, letterSpacing: "0.04em", fontStyle: "italic" }}>
                From precision measurement to final installation, every job is handled personally by our own team — never subcontracted, never compromised.
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center min-h-[380px] gap-4 text-center">
              <div style={{ width: "48px", height: "1px", background: "#C8A96E", margin: "0 auto" }} />
              <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#121212", marginTop: "16px" }}>Thank you.</div>
              <p style={{ fontSize: "0.88rem", color: "#666", letterSpacing: "0.04em", lineHeight: 1.9 }}>
                We will review your project details and reach out within one business day.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }} htmlFor="name">Full Name</label>
                  <input id="name" name="name" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 400, color: "#222", background: "white", border: "1px solid #ccc", padding: "14px 16px", outline: "none", borderRadius: "2px", letterSpacing: "0.04em" }} placeholder="John Smith" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }} htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 400, color: "#222", background: "white", border: "1px solid #ccc", padding: "14px 16px", outline: "none", borderRadius: "2px", letterSpacing: "0.04em" }} placeholder="(404) 555-0100" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }} htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 400, color: "#222", background: "white", border: "1px solid #ccc", padding: "14px 16px", outline: "none", borderRadius: "2px", letterSpacing: "0.04em" }} placeholder="john@email.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }} htmlFor="service">Type of Project</label>
                <select id="service" name="service" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 400, color: "#222", background: "white", border: "1px solid #ccc", padding: "14px 16px", outline: "none", borderRadius: "2px", letterSpacing: "0.04em" }} value={formData.service} onChange={handleChange} required>
                  <option value="" disabled>Select a service...</option>
                  <option value="Custom Shower">Custom Shower Solutions</option>
                  <option value="Railings">Architectural & Interior Railings</option>
                  <option value="Wine Room">Luxury Wine & Display Room</option>
                  <option value="Residential / Commercial">Residential & Commercial Glass</option>
                  <option value="Sauna / Gym">Sauna & Gym Glass Walls</option>
                  <option value="Other">Other / Not Sure Yet</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }} htmlFor="message">Project Details</label>
                <textarea id="message" name="message" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.88rem", fontWeight: 400, color: "#222", background: "white", border: "1px solid #ccc", padding: "14px 16px", outline: "none", borderRadius: "2px", letterSpacing: "0.04em", minHeight: "130px", resize: "vertical" }} placeholder="Dimensions, location, timeline, or anything else that helps us prepare your estimate..." value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", padding: "18px 40px", background: "#121212", color: "white", border: "none", borderRadius: "2px", cursor: "pointer", alignSelf: "flex-start", marginTop: "8px" }}>
                Request My Free Estimate
              </button>
            </form>
          )}
        </div>
      </section>

      <footer style={{ background: "#121212", borderTop: "1px solid rgba(200,169,110,0.12)", padding: "40px 48px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.28em", color: "white" }}>
          LEJEUNE <span style={{ color: "#C8A96E" }}>|</span> GLASS
        </div>
        <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em" }}>
          {new Date().getFullYear()} LeJeune Glass. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["ig", "fb", "hz"].map((s) => (
            <a key={s} href="#" style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.75rem" }}>
              {s}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

