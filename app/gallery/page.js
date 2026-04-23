'use client';

import { useEffect, useRef } from 'react';

const CATEGORIES = [
  {
    id: 'railings', slug: 'railings', label: 'Railings',
    images: ['railings-1.jpg','railings-2.jpg','railings-3.jpg','railings-4.jpg','railings-5.jpg','railings-6.jpg','railings-7.jpg','railings-8.jpg','railings-9.jpg'],
  },
  {
    id: 'wine-rooms', slug: 'wine-rooms', label: 'Wine Rooms',
    images: ['20200108_141210 (1).jpg','FB_IMG_1775989371265.jpg'],
  },
  {
    id: 'sauna-gym', slug: 'sauna-gym', label: 'Sauna & Gym',
    images: ['Tempered_Glass_For_Sauna.jpg','images_c1466200-1c96-45.jpg'],
  },
  {
    id: 'commercial', slug: 'commercial', label: 'Commercial',
    images: ['commercial-1.jpg','commercial-2.jpg','commercial-3.jpg','commercial-4.jpg'],
  },
  {
    id: 'open-concept', slug: 'open-concept', label: 'Open Concept',
    images: ['open-concept-1.jpeg','open-concept-2.jpg','open-concept-3.jpg','open-concept-4.jpg'],
  },
  {
    id: '90-degree', slug: 'neo-angle', label: '90° Glass',
    images: ['90-degree-1.jpg','90-degree-3.jpg','90-degree-4.jpg','90-degree-5.jpg','90-degree-6.jpg','90-degree-7.jpg','90-degree-8.jpg','90-degree-9.jpg','90-degree-10.jpg'],
  },
  {
    id: 'barn-door', slug: 'barn-door', label: 'Barn Door',
    images: ['barn-door-1.jpg','barn-door-2.jpg','barn-door-3.jpg','barn-door-4.jpg','barn-door-5.jpg'],
  },
  {
    id: 'inline', slug: 'inline', label: 'Inline',
    images: ['inline-1.jpeg','inline-2.jpg','inline-3.jpg','inline-4.jpg','inline-5.jpg','inline-6.jpg','inline-7.jpg'],
  },
];

export default function GalleryPage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.classList.add('revealed');
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el, index) => {
    revealRefs.current[index] = el;
  };

  let refIndex = 0;

  return (
    <>
      <style>{`
        .glry-page {
          background: #0a0a0a;
          min-height: 100vh;
        }

        /* ── Back link ── */
        .glry-back {
          position: fixed;
          top: 1.75rem;
          left: 2rem;
          z-index: 50;
          font-family: var(--font-montserrat, 'Montserrat', sans-serif);
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #F2F1ED;
          text-decoration: none;
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        .glry-back:hover { opacity: 1; }

        /* ── Hero banner ── */
        .glry-hero {
          background: #0a0a0a;
          padding: 9rem 2rem 5rem;
          text-align: center;
        }
        .glry-hero-eyebrow {
          font-family: var(--font-montserrat, 'Montserrat', sans-serif);
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin: 0 0 1.5rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .glry-hero-title {
          font-family: 'Cormorant Garamond', 'Cormorant', Georgia, serif;
          font-size: clamp(3.5rem, 9vw, 7rem);
          color: #F2F1ED;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 300;
          margin: 0;
          line-height: 1;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s;
        }
        .glry-hero-rule {
          width: 48px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          border: none;
          margin: 2.25rem auto 0;
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }
        .glry-hero-eyebrow.revealed,
        .glry-hero-title.revealed,
        .glry-hero-rule.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Category section (cream) ── */
        .glry-section {
          background: #F2F1ED;
          padding: 5.5rem 5vw 5.5rem;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .glry-section.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .glry-heading-wrap {
          margin-bottom: 2.5rem;
        }
        .glry-heading {
          font-family: 'Cormorant Garamond', 'Cormorant', Georgia, serif;
          font-size: clamp(1.75rem, 4.5vw, 3.25rem);
          color: #0a0a0a;
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 0.75rem;
          line-height: 1.1;
        }
        .glry-heading-rule {
          width: 36px;
          height: 1px;
          background: rgba(10,10,10,0.15);
          border: none;
          margin: 0;
          display: block;
        }

        /* ── Equal grid ── */
        .glry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.1rem;
        }
        .glry-item {
          overflow: hidden;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .glry-item.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .glry-item img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }

        /* ── Black transition panel ── */
        .glry-panel {
          background: #0a0a0a;
          height: 7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .glry-panel-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          opacity: 0.35;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .glry-grid { grid-template-columns: repeat(2, 1fr); }
          .glry-section { padding: 4.5rem 5vw; }
        }
        @media (max-width: 560px) {
          .glry-grid { grid-template-columns: repeat(2, 1fr); gap: 0.6rem; }
          .glry-hero { padding: 7rem 1.5rem 3.5rem; }
          .glry-section { padding: 3.5rem 1.25rem; }
          .glry-back { left: 1.25rem; }
        }
      `}</style>

      <a href="/" className="glry-back">← Home</a>

      <div className="glry-page">
        {/* Hero */}
        <div className="glry-hero">
          <p
            className={`glry-hero-eyebrow`}
            ref={(el) => addRef(el, refIndex++)}
          >
            LeJeune Glass
          </p>
          <h1
            className="glry-hero-title"
            ref={(el) => addRef(el, refIndex++)}
          >
            Gallery
          </h1>
          <hr
            className="glry-hero-rule"
            ref={(el) => addRef(el, refIndex++)}
          />
        </div>

        {CATEGORIES.map((cat, catIdx) => {
          const sectionRefIdx = refIndex++;
          const itemRefIdxStart = refIndex;
          refIndex += cat.images.length;

          return (
            <div key={cat.id}>
              <section
                id={cat.slug}
                className="glry-section"
                ref={(el) => addRef(el, sectionRefIdx)}
              >
                <div className="glry-heading-wrap">
                  <h2 className="glry-heading">
                    {cat.label}
                  </h2>
                  <hr className="glry-heading-rule" />
                </div>

                <div className="glry-grid">
                  {cat.images.map((filename, imgIdx) => {
                    const src = `/images/projects/${cat.id}/${encodeURIComponent(filename)}`;
                    return (
                      <div
                        key={filename}
                        className="glry-item"
                        ref={(el) => addRef(el, itemRefIdxStart + imgIdx)}
                        style={{ transitionDelay: `${imgIdx * 0.07}s` }}
                      >
                        <img
                          src={src}
                          alt={`${cat.label} — photo ${imgIdx + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>

              {catIdx < CATEGORIES.length - 1 && (
                <div className="glry-panel">
                  <div className="glry-panel-dot" />
                  <div className="glry-panel-dot" />
                  <div className="glry-panel-dot" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
