"use client";
import { useState, useEffect, useRef } from "react";
import ReviewsSection from "./components/ReviewsSection";

// ============================================================
// DATA
// ============================================================
const galleryCategories = [
  { name: "Architectural Railings", tags: ["Interior", "Exterior", "Balcony"], slug: "railings" },
  { name: "Wine & Display Rooms", tags: ["Climate Controlled", "Custom"], slug: "wine-rooms" },
  { name: "Sauna & Gym Glass", tags: ["Floor to Ceiling", "Frameless"], slug: "sauna-gym" },
  { name: "Commercial Glass", tags: ["Partitions", "Facades", "Offices"], slug: "commercial" },
  { name: "Open Concept", tags: ["Walk-In", "Frameless"], slug: "open-concept" },
  { name: "Neo-Angle", tags: ["Custom Angle", "Corner"], slug: "neo-angle" },
  { name: "Barn Door", tags: ["Sliding", "Frameless"], slug: "barn-door" },
  { name: "Inline", tags: ["Seamless", "Fixed Panel"], slug: "inline" },
];

const services = [
  { name: "Custom Shower Solutions", desc: "Every shape, every style — 90°, neo-angle, in-line, barn door, framed, and semi-frameless. If you can imagine it, we can install it." },
  { name: "Architectural & Interior Railings", desc: "Glass railings for staircases, hallways, balconies, and custom interior spaces — clean, modern, and engineered to elevate your design." },
  { name: "Luxury Wine & Display Rooms", desc: "Showcase your collection in a climate-controlled, visually stunning glass enclosure — fully custom, fully precise, fully show-stopping." },
  { name: "Residential & Commercial Glass", desc: "Floor-to-ceiling panels, partitions, doors, nooks, studios, saunas — any architectural application, tailored to your exact vision." },
  { name: "Sauna & Gym Glass Walls", desc: "Floor-to-ceiling glass panels for saunas, home gyms, and wellness spaces — creating an open concept that maximizes light, space, and movement." },
];

const projectHeadings = {
  "": "Start Your Project",
  "Architectural Railings": "Let's Design Your Railings",
  "Wine & Display Room": "Let's Build Your Wine Room",
  "Sauna & Gym Glass": "Let's Design Your Wellness Space",
  "Commercial Glass": "Let's Plan Your Commercial Project",
  "Open Concept": "Let's Open Up Your Space",
  "Neo-Angle": "Let's Design Your Neo-Angle",
  "Barn Door": "Let's Design Your Barn Door",
  "Inline": "Let's Design Your Inline Glass",
};

// ============================================================
// STYLES
// ============================================================
const pageStyles = `
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,400;1,6..96,500&family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Bebas+Neue&family=Montserrat:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body { background: #F2F1ED; }

/* NAV */
.nav-wrap {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 48px;
  background: transparent;
  border-bottom: none;
  transition: background 0.4s ease, padding 0.3s ease, border-bottom 0.4s ease;
}
.nav-wrap.scrolled { padding: 14px 48px; background: rgba(10,10,10,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.06); }
.nav-logo { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; text-decoration: none; align-self: center; }
.nav-logo-name { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: 0.78rem; color: white; letter-spacing: 0.08em; line-height: 1.2; font-style: normal; display: block; text-align: center; }
.nav-logo-beacon { font-family: 'Bebas Neue', sans-serif; font-size: 0.38rem; color: rgba(255,255,255,0.35); letter-spacing: 0.45em; text-align: center; }
.nav-links { display: flex; gap: 32px; align-items: center; }
.nav-link { font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.65); cursor: pointer; text-decoration: none; transition: color 0.2s; }
.nav-link:hover { color: white; }
.nav-cta { font-family: 'Montserrat', sans-serif; font-size: 0.54rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.5); padding: 8px 18px; color: white; background: transparent; cursor: pointer; transition: all 0.2s; }
.nav-cta:hover { background: white; color: #0a0a0a; }

/* HERO */
.hero { position: relative; width: 100%; min-height: 100vh; min-height: 100dvh; overflow: hidden; background: #111; display: flex; align-items: center; justify-content: flex-start; padding: 0 64px; }
.hero-video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; min-height: 100%; object-fit: cover; object-position: center; }
.hero-content { position: relative; z-index: 2; text-align: center; }
.hero-title { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(2rem, 4.5vw, 3.5rem); font-weight: 400; color: white; line-height: 0.88; letter-spacing: 0.01em; text-shadow: 0 2px 40px rgba(0,0,0,0.3); display: block; text-align: center; width: 100%; }
.hero-beacon { font-family: 'Bebas Neue', sans-serif; font-size: clamp(0.62rem, 1vw, 0.8rem); color: rgba(255,255,255,0.6); letter-spacing: 0.55em; margin-top: 8px; }

/* PARALLAX */
.parallax-section { position: relative; overflow: hidden; }
.parallax-bg { position: absolute; inset: -20%; width: 100%; height: 140%; background-attachment: fixed; background-size: cover; background-position: center; }

/* STATEMENT */
.statement { background: #F2F1ED; padding: 48px 64px; display: flex; align-items: center; justify-content: center; gap: 40px; }
.statement-text { font-family: 'Montserrat', sans-serif; font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 500; color: #0a0a0a; line-height: 1.05; max-width: 700px; width: 100%; margin: 0 auto; text-align: center; }
@keyframes stmtReveal { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
.stmt-line { display: block; opacity: 0; }
.stmt-line.animate { animation: stmtReveal 0.35s ease forwards; }
.statement-tag { font-family: 'Montserrat', sans-serif; font-size: 0.52rem; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: rgba(10,10,10,0.3); writing-mode: vertical-rl; flex-shrink: 0; }

/* PROCESS */
.process { background: #E8E7E2; padding: 100px 64px; position: relative; overflow: hidden; }
.eyebrow { font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: #555; margin-bottom: 10px; }
.section-heading { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 400; color: #0a0a0a; line-height: 1.1; margin-bottom: 56px; }
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: #d0cfc9; }
.step { background: #E8E7E2; padding: 44px 28px; }
.step-num { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: #0a0a0a; line-height: 1; margin-bottom: 18px; }
.step-bar { width: 24px; height: 1px; background: rgba(10,10,10,0.3); margin-bottom: 14px; }
.step-name { font-family: 'Montserrat', sans-serif; font-size: 0.62rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #0a0a0a; margin-bottom: 10px; }
.step-desc { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 400; color: #222; line-height: 1.85; }

/* ABOUT */
.about-section { background: #F2F1ED; padding: 100px 8vw; position: relative; overflow: hidden; display: flex; align-items: flex-start; gap: 6vw; }
.about-section::before, .about-section::after { content: ''; position: absolute; left: 0; right: 0; height: 1px; background: rgba(0,0,0,0.08); }
.about-section::before { top: 0; }
.about-section::after { bottom: 0; }
.about-photo { width: 42%; flex-shrink: 0; position: relative; z-index: 2; will-change: transform; }
.about-photo img { width: 100%; height: 480px; object-fit: cover; object-position: center top; display: block; }
.about-content { flex: 1; position: relative; z-index: 1; will-change: transform; padding-top: 8px; }
.about-heading { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 400; color: #0a0a0a; line-height: 1.15; margin-bottom: 36px; }
.about-body { font-family: 'Montserrat', sans-serif; font-size: 0.82rem; font-weight: 400; color: #333; line-height: 1.95; margin-bottom: 18px; }
.about-closing { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: 1rem; font-weight: 400; font-style: italic; color: #555; line-height: 1.6; margin-top: 8px; }

/* GALLERY LIST */
.gallery-section { background: #F2F1ED; padding: 100px 64px; }
.gallery-list { border-top: 1px solid #e0dfd9; margin-top: 48px; }
.gallery-item { position: relative; display: flex; align-items: center; justify-content: space-between; padding: 22px 0; border-bottom: 1px solid #e0dfd9; cursor: pointer; transition: all 0.35s ease; text-decoration: none; overflow: visible; }
.gallery-item:hover { padding-left: 12px; }
.gallery-left { display: flex; align-items: baseline; gap: 20px; flex: 1; }
.gallery-name { font-family: 'Montserrat', sans-serif; font-size: 0.78rem; font-weight: 500; color: #0a0a0a; letter-spacing: 0.18em; text-transform: uppercase; transition: all 0.35s ease; line-height: 1; }
.gallery-item:hover .gallery-name { color: #555; letter-spacing: 0.1em; }
.gallery-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.gallery-tag { font-family: 'Montserrat', sans-serif; font-size: 0.54rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #555; border: 1px solid #999; padding: 3px 8px; }
.gallery-arrow { font-size: 0.62rem; color: #555; transition: all 0.35s ease; }
.gallery-item:hover .gallery-arrow { color: #0a0a0a; transform: translateX(6px); }

/* STATS STRIP */
.stats-strip { background: #0a0a0a; padding: 40px 64px; display: flex; align-items: stretch; justify-content: center; }
.stat-item { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 8px 48px; }
.stat-item + .stat-item { border-left: 1px solid rgba(255,255,255,0.1); }
.stat-num { font-family: 'Bebas Neue', sans-serif; font-size: clamp(1.4rem, 2.8vw, 2.1rem); color: #F2F1ED; line-height: 1; letter-spacing: 0.1em; }
.stat-label { font-family: 'Montserrat', sans-serif; font-size: 0.52rem; font-weight: 400; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 8px; }

/* SERVICES */
.services-section { background: #0a0a0a; padding: 100px 64px; }
.services-eyebrow-line { height: 1px; background: rgba(255,255,255,0.12); width: 0; margin-bottom: 20px; }
.services-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; background: rgba(255,255,255,0.05); margin-top: 0; }
.service-card { background: #0a0a0a; padding: 40px 24px; border-right: 1px solid rgba(255,255,255,0.05); transition: background 0.3s; }
.service-card:hover { background: #111; }
.service-line { width: 28px; height: 1px; background: rgba(255,255,255,0.2); margin-bottom: 20px; transition: width 0.3s; }
.service-card:hover .service-line { width: 48px; }
.service-name { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 400; color: white; letter-spacing: 0.04em; line-height: 1.4; margin-bottom: 14px; }
.service-desc { font-family: 'Montserrat', sans-serif; font-size: 0.82rem; font-weight: 400; color: rgba(255,255,255,0.75); line-height: 1.85; }

/* HARDWARE */
.hw-section { position: relative; background: url('/images/hardware-2.jpg') center/cover fixed; min-height: 620px; display: flex; align-items: center; padding: 100px 64px; filter: brightness(1.18) saturate(0.72); }
.hw-overlay { position: absolute; inset: 0; background: rgba(8,8,20,0.28); }
.hw-inner { position: relative; z-index: 1; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.hw-watermark { position: absolute; left: -8px; bottom: -20px; font-family: 'Bebas Neue', sans-serif; font-size: clamp(7rem, 16vw, 14rem); color: rgba(255,255,255,0.05); line-height: 1; pointer-events: none; z-index: 0; white-space: nowrap; user-select: none; }
.hw-list { position: relative; z-index: 1; }
.hw-item { display: block; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-family: 'Montserrat', sans-serif; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.92); text-shadow: 0 1px 14px rgba(0,0,0,0.7); opacity: 0; transform: translateY(16px); transition: opacity 0.4s ease, transform 0.4s ease; }
.hw-item:first-child { border-top: 1px solid rgba(255,255,255,0.1); }
.hw-item.animate { opacity: 1; transform: translateY(0); }
.hw-right { position: relative; z-index: 1; }
.hw-label { font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.38em; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 24px; }
.hw-headline { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 400; color: white; line-height: 1.15; margin-bottom: 32px; opacity: 0; transform: scale(0.97); transition: opacity 0.45s ease, transform 0.45s ease; }
.hw-headline.animate { opacity: 1; transform: scale(1); }
.hw-body { font-family: 'Montserrat', sans-serif; font-size: 0.82rem; font-weight: 400; color: rgba(255,255,255,0.9); line-height: 1.9; margin-bottom: 20px; text-shadow: 0 1px 14px rgba(0,0,0,0.7); }
@media (max-width: 768px) {
  .hw-section { padding: 80px 24px; background-attachment: scroll; }
  .hw-inner { grid-template-columns: 1fr; gap: 48px; }
}

/* REVIEW BAR */
.review-bar { background: #0a0a0a; padding: 64px; display: flex; gap: 48px; align-items: center; }
.review-line { width: 1px; height: 80px; background: rgba(255,255,255,0.12); flex-shrink: 0; }
.review-quote-text { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(1.3rem, 2.5vw, 1.7rem); font-weight: 400; font-style: italic; color: white; line-height: 1.6; }
.review-attr { font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-top: 16px; }

/* CONTACT */
.contact-section { position: relative; height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.contact-form-reveal { opacity: 1; width: 100%; max-width: 560px; }
.contact-video-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.contact-form-wrap { position: relative; z-index: 1; width: 100%; display: flex; justify-content: center; padding: 84px 24px 48px; overflow-y: auto; max-height: 100vh; }
.contact-footer-bar { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; display: flex; justify-content: space-between; align-items: center; padding: 16px 48px; background: rgba(0,0,0,0.35); }
.contact-footer-logo { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: 0.72rem; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; }
.contact-footer-copy { font-family: 'Montserrat', sans-serif; font-size: 0.54rem; color: rgba(255,255,255,0.4); letter-spacing: 0.08em; }
.contact-footer-socials { display: flex; gap: 14px; }
.contact-footer-social { font-family: 'Montserrat', sans-serif; font-size: 0.54rem; letter-spacing: 0.2em; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
.contact-footer-social:hover { color: white; }
.contact-heading { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 400; color: white; line-height: 1.2; margin-bottom: 8px; transition: all 0.4s ease; }
.contact-sub { font-family: 'Montserrat', sans-serif; font-size: 0.68rem; font-weight: 400; color: rgba(255,255,255,0.65); letter-spacing: 0.1em; margin-bottom: 28px; }
.info-row { display: flex; gap: 32px; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.15); }
.info-block { display: flex; flex-direction: column; gap: 4px; }
.info-label { font-family: 'Montserrat', sans-serif; font-size: 0.56rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.5); }
.info-val { font-family: 'Montserrat', sans-serif; font-size: 0.78rem; font-weight: 400; color: white; margin-top: 3px; }
.estimator { background: rgba(255,255,255,0.1); padding: 14px 18px; margin-bottom: 18px; border-left: 2px solid rgba(255,255,255,0.6); }
.estimator-label { font-family: 'Montserrat', sans-serif; font-size: 0.58rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.55); margin-bottom: 6px; }
.estimator-range { font-family: 'Montserrat', sans-serif; font-size: 1.4rem; font-weight: 400; color: white; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
.finput { background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.6); padding: 12px 0; font-size: 0.78rem; font-family: 'Montserrat', sans-serif; font-weight: 400; color: white; width: 100%; outline: none; }
.finput::placeholder { color: rgba(255,255,255,0.9); }
.fselect { background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.6); padding: 12px 0; font-size: 0.78rem; font-family: 'Montserrat', sans-serif; font-weight: 400; color: white; width: 100%; margin-bottom: 10px; outline: none; }
.fselect option { background: #1a1a1a; color: white; }
.ftextarea { background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.6); padding: 12px 0; font-size: 0.78rem; font-family: 'Montserrat', sans-serif; font-weight: 400; color: white; width: 100%; min-height: 90px; resize: vertical; margin-bottom: 16px; outline: none; }
.ftextarea::placeholder { color: rgba(255,255,255,0.9); }
.fbtn { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.6); padding: 15px 36px; font-size: 0.58rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; cursor: pointer; font-family: 'Montserrat', sans-serif; transition: background 0.25s, border-color 0.25s; }
.fbtn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.9); }
.fbtn:disabled { opacity: 0.4; cursor: not-allowed; }
.success-msg { text-align: center; padding: 60px 0; }
.success-title { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: 2rem; font-weight: 400; color: white; margin-bottom: 16px; }
.success-sub { font-family: 'Montserrat', sans-serif; font-size: 0.76rem; font-weight: 400; color: rgba(255,255,255,0.65); line-height: 1.9; }

/* FOOTER */
.footer { background: #0a0a0a; padding: 28px 64px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); }
.footer-logo-name { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: 0.75rem; color: rgba(255,255,255,0.45); letter-spacing: 0.08em; }
.footer-beacon { font-family: 'Bebas Neue', sans-serif; font-size: 0.4rem; color: rgba(255,255,255,0.25); letter-spacing: 0.45em; margin-top: 2px; }
.footer-copy { font-family: 'Montserrat', sans-serif; font-size: 0.58rem; color: rgba(255,255,255,0.55); letter-spacing: 0.08em; }
.footer-socials { display: flex; gap: 14px; }
.social-link { font-family: 'Montserrat', sans-serif; font-size: 0.58rem; letter-spacing: 0.2em; color: rgba(255,255,255,0.6); text-decoration: none; transition: color 0.2s; }
.social-link:hover { color: white; }

/* SCROLL REVEAL */
.reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* BIRTHDAY OVERLAY */
@keyframes bdFadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bdShimmer { 0% { background-position: 100% 50%; } 100% { background-position: -100% 50%; } }
.bd-overlay { position: fixed; inset: 0; z-index: 9999; background: #000; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; overflow-y: auto; overflow-x: hidden; padding: 60px 24px 80px; text-align: center; transition: opacity 1.2s ease; }
.bd-overlay.fading { opacity: 0; pointer-events: none; }
.bd-divider { width: 40px; height: 1px; background: rgba(200,169,110,0.4); margin: 28px auto; }
.bd-title { font-family: 'Bodoni Moda', Georgia, serif; font-size: clamp(2.2rem, 6vw, 3.6rem); font-weight: 400; background: linear-gradient(90deg, #C8A96E, #fff8e7, #C8A96E); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: bdShimmer 3.5s linear infinite, bdFadeUp 1s ease 0.2s both; letter-spacing: 0.06em; }
.bd-year { font-family: 'Bebas Neue', sans-serif; font-size: clamp(5rem, 18vw, 11rem); color: rgba(200,169,110,0.08); letter-spacing: 0.12em; line-height: 1; animation: bdFadeUp 1s ease 0.4s both; margin: -12px 0; pointer-events: none; }
.bd-message { font-family: 'Montserrat', sans-serif; font-size: clamp(0.78rem, 2vw, 0.92rem); font-weight: 300; color: rgba(255,255,255,0.72); line-height: 2.1; max-width: 560px; animation: bdFadeUp 1s ease 0.7s both; }
.bd-sign { font-family: 'Bodoni Moda', Georgia, serif; font-style: italic; font-size: clamp(1rem, 2.5vw, 1.3rem); color: rgba(200,169,110,0.9); animation: bdFadeUp 1s ease 1s both; margin-top: 8px; }
.bd-enter { border: 1px solid #C8A96E; background: transparent; color: #C8A96E; font-family: 'Montserrat', sans-serif; font-size: 0.62rem; letter-spacing: 0.3em; text-transform: uppercase; padding: 14px 48px; cursor: pointer; white-space: nowrap; transition: color 0.4s ease, background 0.4s ease; animation: bdFadeUp 1s ease 1.3s both; margin-top: 8px; }
.bd-enter:hover { background: #C8A96E; color: #121212; }

/* HAMBURGER */
.hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; cursor: pointer; background: none; border: none; padding: 6px; z-index: 110; }
.hamburger-line { width: 22px; height: 1px; background: white; display: block; transition: transform 0.35s ease, opacity 0.35s ease; }
.hamburger.open .hamburger-line:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.open .hamburger-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open .hamburger-line:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* MOBILE DRAWER */
.mobile-drawer { position: fixed; inset: 0; z-index: 105; background: rgba(8,8,8,0.97); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0; opacity: 0; pointer-events: none; transition: opacity 0.45s ease; }
.mobile-drawer.open { opacity: 1; pointer-events: all; }
.mobile-drawer-inner { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.mobile-nav-link { font-family: 'Bodoni Moda', 'Playfair Display', Georgia, serif; font-size: clamp(2.2rem, 10vw, 3.2rem); font-weight: 400; color: rgba(255,255,255,0.75); text-decoration: none; letter-spacing: 0.04em; padding: 10px 0; opacity: 0; transform: translateY(18px); transition: opacity 0.4s ease, transform 0.4s ease, color 0.2s; }
.mobile-drawer.open .mobile-nav-link { opacity: 1; transform: translateY(0); }
.mobile-drawer.open .mobile-nav-link:nth-child(1) { transition-delay: 0.08s; }
.mobile-drawer.open .mobile-nav-link:nth-child(2) { transition-delay: 0.14s; }
.mobile-drawer.open .mobile-nav-link:nth-child(3) { transition-delay: 0.20s; }
.mobile-drawer.open .mobile-nav-link:nth-child(4) { transition-delay: 0.26s; }
.mobile-nav-link:hover { color: white; }
.mobile-nav-cta { margin-top: 28px; font-family: 'Montserrat', sans-serif; font-size: 0.62rem; font-weight: 600; letter-spacing: 0.28em; text-transform: uppercase; color: white; border: 1px solid rgba(255,255,255,0.5); padding: 14px 36px; text-decoration: none; opacity: 0; transform: translateY(12px); transition: opacity 0.4s ease 0.32s, transform 0.4s ease 0.32s, background 0.2s, border-color 0.2s; }
.mobile-drawer.open .mobile-nav-cta { opacity: 1; transform: translateY(0); }
.mobile-nav-cta:hover { background: rgba(255,255,255,0.08); border-color: white; }
.mobile-drawer-rule { width: 1px; height: 40px; background: rgba(255,255,255,0.12); margin: 32px auto 0; opacity: 0; transition: opacity 0.4s ease 0.38s; }
.mobile-drawer.open .mobile-drawer-rule { opacity: 1; }
.mobile-drawer-tagline { font-family: 'Bebas Neue', sans-serif; font-size: 0.45rem; color: rgba(255,255,255,0.2); letter-spacing: 0.5em; margin-top: 14px; opacity: 0; transition: opacity 0.4s ease 0.42s; }
.mobile-drawer.open .mobile-drawer-tagline { opacity: 1; }

/* MOBILE */
@media (max-width: 768px) {
  .nav-wrap { padding: 14px 24px; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .hero { padding: 0 24px 48px; }
  .statement { padding: 36px 24px; flex-direction: column; gap: 24px; }
  .statement-tag { writing-mode: horizontal-tb; }
  .process { padding: 64px 24px; }
  .steps { grid-template-columns: 1fr 1fr; }
  .about-section { padding: 72px 24px; flex-direction: column; gap: 40px; }
  .about-photo { width: 100%; }
  .about-photo img { height: 300px; }
  .about-content { padding-top: 0; }
  .gallery-section { padding: 64px 24px; }
  .gallery-tags { display: none; }
  .services-section { padding: 64px 24px; }
  .services-grid { grid-template-columns: 1fr; }
  .products-wrap { padding: 64px 24px; flex-direction: column; }
  .products-block { width: 100%; }
  .review-bar { padding: 40px 24px; flex-direction: column; gap: 24px; }

  /* CONTACT — MOBILE */
  .contact-form-wrap { padding: 88px 20px 110px; }
  .contact-heading { font-size: clamp(1.6rem, 7vw, 2.2rem); }
  .contact-sub { font-size: 0.82rem; letter-spacing: 0.06em; margin-bottom: 20px; }
  .info-row { gap: 20px; flex-wrap: wrap; }
  .info-val { font-size: 1rem; }
  .form-row { grid-template-columns: 1fr; gap: 0; }
  .finput { font-size: 1rem; padding: 16px 0; }
  .fselect { font-size: 1rem; padding: 16px 0; }
  .ftextarea { font-size: 1rem; padding: 16px 0; min-height: 80px; }
  .fbtn { width: 100%; padding: 18px; font-size: 0.7rem; letter-spacing: 0.2em; }

  /* CONTACT FOOTER BAR — MOBILE: simplify to just copyright */
  .contact-footer-bar { padding: 14px 20px; justify-content: center; gap: 0; }
  .contact-footer-logo { display: none; }
  .contact-footer-socials { display: none; }
  .contact-footer-copy { font-size: 0.58rem; text-align: center; }

  .footer { padding: 24px; flex-direction: column; gap: 16px; text-align: center; }
}
`;

// ============================================================
// ESTIMATE RANGES BY PROJECT TYPE
// ============================================================
const estimateRanges = {
  "": null,
  "Architectural Railings": "$1,800 – $6,500",
  "Wine & Display Room": "$4,000 – $18,000",
  "Sauna & Gym Glass": "$2,500 – $9,000",
  "Commercial Glass": "$3,000 – $25,000+",
  "Open Concept": "$1,200 – $5,000",
  "Neo-Angle": "$1,400 – $4,500",
  "Barn Door": "$1,100 – $3,800",
  "Inline": "$900 – $3,200",
};

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function LeJeuneGlass() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayFading, setOverlayFading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "", date: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const revealRefs = useRef([]);
  const stmtTextRef = useRef(null);
  const aboutPanelRef = useRef(null);
  const aboutImgRef = useRef(null);
  const aboutTextRef = useRef(null);
  const hwSectionRef = useRef(null);
  const hwHeadlineRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesLineRef = useRef(null);
  const contactWrapRef = useRef(null);
  const contactSectionRef = useRef(null);
  const contactContentRef = useRef(null);

  // BIRTHDAY OVERLAY
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("happy-birthday") === "justin") setShowOverlay(true);
  }, []);

  const enterSite = () => {
    setOverlayFading(true);
    setTimeout(() => setShowOverlay(false), 1200);
  };

  // SCROLL LISTENER
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  // STATEMENT LINE ANIMATION
  useEffect(() => {
    const el = stmtTextRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      el.querySelectorAll('.stmt-line').forEach((line, i) => {
        setTimeout(() => line.classList.add('animate'), i * 150);
      });
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // HARDWARE SECTION ANIMATIONS
  useEffect(() => {
    const section = hwSectionRef.current;
    const headline = hwHeadlineRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (headline) setTimeout(() => headline.classList.add('animate'), 100);
      section.querySelectorAll('.hw-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('animate'), 200 + i * 150);
      });
    }, { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // PARALLAX — about section opposing drift
  useEffect(() => {
    let rafId;
    const update = () => {
      if (!aboutPanelRef.current) return;
      if (window.innerWidth < 768) {
        if (aboutImgRef.current) aboutImgRef.current.style.transform = '';
        if (aboutTextRef.current) aboutTextRef.current.style.transform = '';
        return;
      }
      const rect = aboutPanelRef.current.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      if (aboutImgRef.current) aboutImgRef.current.style.transform = `translateY(${offset * -0.2}px)`;
      if (aboutTextRef.current) aboutTextRef.current.style.transform = `translateY(${offset * 0.2}px)`;
    };
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  // SERVICES EYEBROW LINE DRAW
  useEffect(() => {
    const section = servicesRef.current;
    const line = servicesLineRef.current;
    if (!section || !line) return;
    let rafId;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      line.style.width = `${progress * 100}%`;
    };
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  // CONTACT SECTION REVEAL
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const section = contactSectionRef.current;
      if (!section) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { section.classList.add('mobile-revealed'); obs.disconnect(); }
      }, { threshold: 0.1 });
      obs.observe(section);
      return () => obs.disconnect();
    }
    let rafId;
    const update = () => {
      if (!contactWrapRef.current || !contactSectionRef.current) return;
      const rect = contactWrapRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      contactSectionRef.current.style.height = `${15 + 85 * progress}vh`;
      if (contactContentRef.current) {
        contactContentRef.current.style.opacity = progress >= 0.6 ? '1' : '0';
      }
    };
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          project: formData.service,
          details: formData.message,
          date: formData.date,
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactHeading = projectHeadings[formData.service] || "Start Your Project";
  const estimateRange = estimateRanges[formData.service];

  return (
    <>
      <style>{pageStyles}</style>

      {showOverlay && (
        <div className={`bd-overlay${overlayFading ? " fading" : ""}`}>
          <div className="bd-title">Happy Birthday</div>
          <div className="bd-year">1975</div>
          <div className="bd-divider" />
          <p className="bd-message">
            You are the best friend anyone could have the pleasure of knowing — and I get extra.<br /><br />
            Working on a personal project with you has uplifted not only my life, but I hope you know that every day is a gift —<br />
            and today, in &apos;75, the universe gifted us you.<br /><br />
            I wouldn&apos;t want to live in a world where there was no you.
          </p>
          <div className="bd-divider" />
          <div className="bd-sign">With love — Happy Birthday, Dear Justin</div>
          <div style={{ marginTop: "40px" }}>
            <button className="bd-enter" onClick={enterSite}>Enter</button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* NAV */}
      {/* ============================================================ */}
      <nav className={`nav-wrap${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">
          <div className="nav-logo-name">LeJeune Glass</div>
          <div className="nav-logo-beacon">Be The Beacon</div>
        </a>
        <div className="nav-links">
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#contact" className="nav-cta">Free Estimate</a>
        </div>
        <button className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        <div className="mobile-drawer-inner">
          <a href="#gallery" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#process" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#products" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Hardware</a>
          <a href="#reviews" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>Free Estimate</a>
          <div className="mobile-drawer-rule" />
          <div className="mobile-drawer-tagline">Be The Beacon</div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section id="hero" className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <div className="hero-title">LE<br />JEUNE<br />GLASS</div>
          <div className="hero-beacon">BE THE BEACON</div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESS */}
      {/* ============================================================ */}
      <section id="process" className="process">
        {/* Architectural SVG background */}
        <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.04, zIndex: 0 }} viewBox="0 0 1440 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#0a0a0a" strokeWidth="0.8" fill="none">
            {/* 60° isometric diagonals — NE direction */}
            {[-240,-80,80,240,400,560,720,880,1040,1200,1360,1520].map((x, i) => (
              <line key={`ne${i}`} x1={x} y1={520} x2={x + 300} y2={0} />
            ))}
            {/* 120° isometric diagonals — NW direction */}
            {[0,160,320,480,640,800,960,1120,1280,1440,1600].map((x, i) => (
              <line key={`nw${i}`} x1={x} y1={520} x2={x - 300} y2={0} />
            ))}
            {/* Horizontal construction lines */}
            <line x1="0" y1="130" x2="1440" y2="130" />
            <line x1="0" y1="260" x2="1440" y2="260" />
            <line x1="0" y1="390" x2="1440" y2="390" />
            {/* Vertical column lines — aligned with 4-column step grid */}
            <line x1="360" y1="0" x2="360" y2="520" />
            <line x1="720" y1="0" x2="720" y2="520" />
            <line x1="1080" y1="0" x2="1080" y2="520" />
            {/* Glass panel outlines */}
            <rect x="60" y="60" width="180" height="400" />
            <rect x="96" y="96" width="108" height="328" />
            <rect x="630" y="40" width="180" height="440" />
            <rect x="666" y="76" width="108" height="368" />
            <rect x="1200" y="70" width="180" height="410" />
            <rect x="1236" y="106" width="108" height="338" />
            {/* Corner tick marks */}
            <line x1="0" y1="0" x2="48" y2="0" /><line x1="0" y1="0" x2="0" y2="48" />
            <line x1="1440" y1="0" x2="1392" y2="0" /><line x1="1440" y1="0" x2="1440" y2="48" />
            <line x1="0" y1="520" x2="48" y2="520" /><line x1="0" y1="520" x2="0" y2="472" />
            <line x1="1440" y1="520" x2="1392" y2="520" /><line x1="1440" y1="520" x2="1440" y2="472" />
          </g>
        </svg>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="eyebrow" ref={addReveal}>◆ Our Process</div>
        <div className="section-heading reveal" ref={addReveal}>From vision<br />to installation.</div>
        <div className="steps">
          {[
            { num: "01", name: "Consultation", desc: "We come to you. On-site analysis, precision measurement, and expert planning at your location." },
            { num: "02", name: "Design", desc: "Ideas become precise plans. Every detail reviewed and approved by you before we proceed." },
            { num: "03", name: "Fabrication", desc: "Every panel cut and finished by our own hands — never subcontracted, never compromised." },
            { num: "04", name: "Installation", desc: "Fast, clean, and precise. Scheduling available as soon as a few days out." },
          ].map((s, i) => (
            <div key={i} className="step reveal" ref={addReveal}>
              <div className="step-num">{s.num}</div>
              <div className="step-bar" />
              <div className="step-name">{s.name}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ABOUT */}
      {/* ============================================================ */}
      <section className="about-section" ref={aboutPanelRef}>
        <div className="about-photo" ref={aboutImgRef}>
          <img src="/images/about-1.jpg" alt="LeJeune Glass team at work" />
        </div>
        <div className="about-content" ref={aboutTextRef}>
          <div className="eyebrow">◆ About LeJeune Glass</div>
          <h2 className="about-heading">The Young. The Relentless.<br />The Ever-Moving.</h2>
          <p className="about-body">LeJeune — the young — is more than a name. It's a posture. A constant momentum that carries through every project, every panel, every space we touch.</p>
          <p className="about-body">We are your local confidant in architectural glass — a single point of contact who handles design, project management, and installation with the precision of a craftsman and the vision of a creative.</p>
          <p className="about-body">What directs us is simple: you. Your space, your need, your standard. We exist to place that satisfactory check mark on the spaces that matter most in your life.</p>
          <p className="about-body">We believe creative process generates momentum. Momentum generates movement. And movement — the right kind — transforms a room into a statement.</p>
          <p className="about-closing">We're not just here to install glass. We're here to grow with you.</p>
        </div>
      </section>

      {/* GALLERY LIST */}
      {/* ============================================================ */}
      <section id="gallery" className="gallery-section">
        <div className="eyebrow reveal" ref={addReveal}>◆ Project Gallery</div>
        <div className="section-heading reveal" ref={addReveal}>Every space,<br />a statement.</div>
        <div className="gallery-list">
          {galleryCategories.map((cat, i) => (
            <a key={i} href={`/gallery#${cat.slug}`} className="gallery-item reveal" ref={addReveal}>
              <div className="gallery-left">
                <span className="gallery-name">{cat.name}</span>
                <div className="gallery-tags">
                  {cat.tags.map((t, j) => <span key={j} className="gallery-tag">{t}</span>)}
                </div>
              </div>
              <span className="gallery-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-num">500+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">5★</div>
          <div className="stat-label">Rated on Google</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">Same Week</div>
          <div className="stat-label">Scheduling Available</div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SERVICES */}
      {/* ============================================================ */}
      <section id="services" className="services-section" ref={servicesRef}>
        <div className="services-eyebrow-line" ref={servicesLineRef} />
        <div className="eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>◆ What We Do</div>
        <div className="section-heading reveal" ref={addReveal} style={{ color: "white", marginTop: "32px", marginBottom: "48px", fontSize: "clamp(2rem, 4vw, 3rem)", textAlign: "center" }}>Any Space. Any Glass.</div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card reveal" ref={addReveal}>
              <div className="service-line" />
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* HARDWARE */}
      {/* ============================================================ */}
      <section id="products" className="hw-section" ref={hwSectionRef}>
        <div className="hw-overlay" />
        <div className="hw-inner">
          <div className="hw-list">
            <div className="hw-watermark">HARDWARE</div>
            {["Hinges & Pivots", "Handles & Pulls", "Clips & Clamps", "Channels & Tracks", "Door Sweeps & Seals", "Mounting Brackets"].map((item, i) => (
              <div key={i} className="hw-item">{item}</div>
            ))}
          </div>
          <div className="hw-right">
            <div className="hw-label">◆ Hardware</div>
            <h2 className="hw-headline" ref={hwHeadlineRef}>Premium Glass<br />Hardware</h2>
            <p className="hw-body">Every installation finished with precision hardware, selected for longevity and elegance.</p>
            <p className="hw-body">From brushed nickel to matte black — we source and supply the hardware that completes your space. Full catalog coming soon.</p>
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* REVIEWS */}
      {/* ============================================================ */}
      <ReviewsSection />

      {/* ============================================================ */}
      {/* CONTACT */}
      {/* ============================================================ */}
      <section id="contact" className="contact-section" ref={contactSectionRef}>
        <video className="contact-video-bg" src="/videos/contact-video.mp4" autoPlay loop muted playsInline />
        <div className="contact-form-wrap">
        <div className="contact-form-reveal" ref={contactContentRef}>
          {submitted ? (
            <div className="success-msg">
              <div className="success-title">Thank you.</div>
              <div className="success-sub">We've received your request and will be in touch within one business day.</div>
            </div>
          ) : (
            <>
              <div className="contact-heading">{contactHeading}</div>
              <div className="contact-sub">Free consultation · Metro Atlanta</div>
              <div className="info-row">
                <div className="info-block"><div className="info-label">Call</div><div className="info-val">(678) 549-2993</div></div>
                <div className="info-block"><div className="info-label">Hours</div><div className="info-val">Mon–Fri, 8AM–6PM</div></div>
              </div>
              {estimateRange && (
                <div className="estimator">
                  <div className="estimator-label">Estimated Budget Range</div>
                  <div className="estimator-range">{estimateRange}</div>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input className="finput" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                  <input className="finput" name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>
                <input className="finput" name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", marginBottom: "10px" }} />
                <select className="fselect" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Type of Project</option>
                  {Object.keys(estimateRanges).filter(k => k !== "").map((k, i) => <option key={i} value={k}>{k}</option>)}
                </select>
                <input className="finput" name="date" placeholder="Preferred Consultation Date" type="date" value={formData.date} onChange={handleChange} style={{ width: "100%", marginBottom: "10px" }} />
                <textarea className="ftextarea" name="message" placeholder="Tell us about your vision..." value={formData.message} onChange={handleChange} required />
                <button className="fbtn" type="submit" disabled={loading}>{loading ? "Sending..." : "Get a Quote"}</button>
              </form>
            </>
          )}
        </div>
        </div>
        <div className="contact-footer-bar">
          <div className="contact-footer-logo">LeJeune Glass</div>
          <div className="contact-footer-copy">© {new Date().getFullYear()} LeJeune Glass. All rights reserved.</div>
          <div className="contact-footer-socials">
            <a href="https://www.instagram.com/lejeuneshowerglass" className="contact-footer-social" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://www.facebook.com/lejeuneshowerglass" className="contact-footer-social" target="_blank" rel="noopener noreferrer">FB</a>
          </div>
        </div>
      </section>
    </>
  );
}
