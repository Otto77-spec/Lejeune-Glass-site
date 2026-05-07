import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glass Shower & Railing FAQ | LeJeune Glass Atlanta',
  description:
    'Answers to your top questions about frameless glass showers, railing installation, cost, timelines, and hardware options in Metro Atlanta.',
  alternates: {
    canonical: 'https://www.lejeuneshowerglass.com/faq',
  },
  openGraph: {
    title: 'Glass Shower & Railing FAQ | LeJeune Glass Atlanta',
    description:
      'Answers to your top questions about frameless glass showers, railing installation, cost, timelines, and hardware options in Metro Atlanta.',
    url: 'https://www.lejeuneshowerglass.com/faq',
    siteName: 'LeJeune Glass',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'How much does a frameless shower door cost in Atlanta?',
    answer:
      'Custom frameless shower enclosures in the Atlanta area typically range from $1,200 to $4,500+ depending on the size, style (90°, neo-angle, barn door, inline), glass thickness, and hardware finish chosen. LeJeune Glass provides free in-home estimates — contact us and we’ll give you an exact quote for your space.',
  },
  {
    question: 'How long does frameless shower installation take?',
    answer:
      'Most frameless shower enclosures are measured, fabricated, and installed within 1–3 weeks from your free estimate appointment. Installation itself typically takes 2–4 hours, leaving your bathroom fully functional the same day.',
  },
  {
    question: 'What’s the difference between frameless and semi-frameless shower doors?',
    answer:
      'Frameless shower enclosures use thick tempered glass (3/8" or 1/2") with minimal metal hardware — no frame around the perimeter. They offer a sleek, open look and are easier to clean. Semi-frameless designs have a partial metal channel along some edges, providing added support at a slightly lower price point. Both are available from LeJeune Glass in Metro Atlanta.',
  },
  {
    question: 'Do you offer a warranty on glass installations?',
    answer:
      'Yes. LeJeune Glass stands behind every installation. We warranty all workmanship and coordinate directly with glass and hardware manufacturers on product warranties. Ask your estimator for full warranty details.',
  },
  {
    question: 'What areas in Metro Atlanta do you serve?',
    answer:
      'We serve all of Metro Atlanta including Buckhead, Midtown, Marietta, Alpharetta, Roswell, Sandy Springs, Smyrna, Kennesaw, Dunwoody, and surrounding areas. Contact us to confirm service in your specific location.',
  },
  {
    question: 'Can you match my existing shower hardware finish?',
    answer:
      'Yes. We carry premium hardware in all major finishes including brushed nickel, matte black, polished chrome, oil-rubbed bronze, and satin gold. During your estimate, we’ll help you choose hardware that coordinates with your existing fixtures.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. LeJeune Shower & Glass, LLC is fully licensed and insured. We are also a BBB Accredited Business with an A+ rating and a veteran-owned and operated company.',
  },
  {
    question: 'Do you install glass railings for stairs and balconies?',
    answer:
      'Absolutely. We design and install custom frameless glass stair railings, interior hallway railings, balcony railings, and commercial railing systems throughout Metro Atlanta. All railing systems meet local building codes and are installed to the highest safety standards.',
  },
  {
    question: 'Can you build a custom wine room with glass walls?',
    answer:
      'Yes. We specialize in custom frameless glass wine room enclosures and display rooms. Whether you’re looking for a floor-to-ceiling glass wine cellar or a custom display case, our team handles the full design and installation process.',
  },
  {
    question: 'How do I clean and maintain frameless glass shower doors?',
    answer:
      'Frameless glass is easy to maintain. Use a squeegee after each shower to prevent water spots and mineral buildup. For deep cleaning, a 50/50 mix of white vinegar and water works well. Avoid abrasive cleaners. We also recommend applying a glass sealant treatment annually to keep surfaces looking like new.',
  },
]

function FaqStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FaqPage() {
  return (
    <>
      <FaqStructuredData />

      <nav aria-label="Breadcrumb" style={{ padding: '1rem 2rem', fontSize: '0.75rem', color: 'rgba(242,241,237,0.4)', letterSpacing: '0.1em', background: '#0a0a0a' }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
        <span style={{ margin: '0 0.5rem' }}>&rsaquo;</span>
        <span style={{ color: 'rgba(242,241,237,0.7)' }}>FAQ</span>
      </nav>

      <section style={{ background: '#0a0a0a', padding: '5rem 2rem 3rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(242,241,237,0.45)', marginBottom: '1.25rem' }}>
          LeJeune Glass — Metro Atlanta
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Frequently Asked<br />Questions
        </h1>

        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: 'rgba(242,241,237,0.6)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
          Everything you need to know about our custom glass installations, from cost and timelines to hardware options and service areas.
        </p>
      </section>

      <section style={{ background: '#F2F1ED', padding: '4rem 5vw' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                borderBottom: '1px solid rgba(10,10,10,0.1)',
                padding: '0',
              }}
            >
              <summary
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                  fontWeight: 400,
                  color: '#0a0a0a',
                  letterSpacing: '0.03em',
                  lineHeight: 1.4,
                  padding: '1.5rem 2rem 1.5rem 0',
                  cursor: 'pointer',
                  listStyle: 'none',
                  position: 'relative',
                }}
              >
                {faq.question}
                <span style={{
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.2rem',
                  color: '#C8A96E',
                  fontWeight: 300,
                  pointerEvents: 'none',
                }}>+</span>
              </summary>
              <p style={{
                fontSize: '0.92rem',
                color: '#444',
                lineHeight: 1.85,
                padding: '0 0 1.75rem 0',
                letterSpacing: '0.02em',
              }}>
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '4rem 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F2F1ED', marginBottom: '1rem' }}>
            Still Have Questions?
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(242,241,237,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>
            We&apos;re happy to walk you through options, pricing, and timelines for your project.
            Reach out anytime — no pressure, no obligation.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid rgba(242,241,237,0.4)', color: '#F2F1ED', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Contact Us
            </a>
            <a href="tel:+16785492993" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', border: '1px solid #C8A96E', color: '#C8A96E', textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Call (678) 549-2993
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
