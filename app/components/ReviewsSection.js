"use client";
import { useState } from "react";

const reviews = [
  {
    name: "Jessica L.",
    location: "Atlanta, GA",
    platform: "Google",
    stars: 5,
    text: "Justin was excellent to work with — very responsive, easy to contact, and quick to follow up. He arrived on extremely short notice and efficiently repaired our glass door. We truly appreciate his prompt service and exceptional professionalism.",
    initials: "JL",
    color: "#1a73e8",
  },
  {
    name: "Kristi C.",
    location: "Alpharetta, GA",
    platform: "Yelp",
    stars: 5,
    text: "LeJeune did such a great job on 3 luxury showers in my home. I would highly recommend them and will be using the company for all of my shower and glass needs moving forward. Professional and very responsive during the entire process from ordering to install.",
    initials: "KC",
    color: "#555",
  },
  {
    name: "Sharon P.",
    location: "Metro Atlanta",
    platform: "Thumbtack",
    stars: 5,
    text: "I chose them over another company because they measured carefully and my shower is not square by any means. Installed last week and happy with look and function. I recommend them.",
    initials: "SP",
    color: "#121212",
    verified: true,
  },
  {
    name: "Nathan Heald",
    location: "Atlanta, GA",
    platform: "Google",
    stars: 5,
    text: "These guys are the real deal. Honest, affordable, good quality work and materials. Very nice and communicate well. I would recommend!",
    initials: "NH",
    color: "#1a73e8",
  },
  {
    name: "Kane Martin",
    location: "Atlanta, GA",
    platform: "Google",
    stars: 5,
    text: "LeJeune did a great job on my bathroom shower doors. It was an in-line seamless door with extension. They came out and measured, we spoke about options and installation. Install took just over an hour. Hardware was all included and price was as quoted.",
    initials: "KM",
    color: "#1a73e8",
  },
  {
    name: "Resa P.",
    location: "Eatonton, GA",
    platform: "Yelp",
    stars: 5,
    text: "Very good experience. The appointment for the estimate was on time and professional. The price was very reasonable — much lower than one competitor. The installers did a great job. Very good turnaround time from estimate to installation. I would definitely do business with this company again.",
    initials: "RP",
    color: "#555",
  },
];

const platformColors = {
  Google: "#1a73e8",
  Yelp: "#d32323",
  Thumbtack: "#009fd9",
};

const PlatformIcon = ({ platform }) => {
  if (platform === "Google") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
  if (platform === "Yelp") return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#d32323">
      <path d="M20.16 12.53l-4.96 1.4c-.96.27-1.79-.8-1.25-1.64l2.86-4.38c.57-.87 1.81-.61 2.01.4l.78 3.93c.12.6-.44 1.12-1.44 1.29zM12.5 7.08l.56-5.08C13.17 1.05 12.1.5 11.35 1.1L7.56 4.2c-.77.62-.5 1.85.45 2.1l3.49.94c.6.16 1.06-.5.95-1.16zM11.05 13.5l-3.27 3.96c-.63.77-.21 1.93.77 2.09l5.03.82c.98.16 1.67-.86 1.2-1.74l-1.76-3.37c-.43-.83-1.51-.95-1.97-.76zM8.34 12.26L3.5 11.34c-.98-.18-1.68.83-1.22 1.72l2.32 4.54c.46.9 1.68.87 2.1-.05l1.52-3.37c.37-.82-.06-1.74-.88-1.92zM8.63 10.5l1.45-3.4c.42-.98-.38-2.03-1.42-1.87L3.6 6.1c-.98.15-1.37 1.35-.65 2.01l3.57 3.25c.69.63 1.7.2 2.11-.86z"/>
    </svg>
  );
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#009fd9">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
  );
};

const StarRating = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: "3px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#888">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const reviewStyles = `
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.review-card {
  background: #F2F1ED;
  border: 1px solid rgba(18,18,18,0.08);
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeSlideUp 0.6s ease both;
}
.review-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(18,18,18,0.1);
}
.review-card::before {
  content: '"';
  position: absolute;
  top: 20px;
  right: 28px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 5rem;
  line-height: 1;
  color: rgba(200,169,110,0.15);
  font-weight: 300;
}
.trust-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  padding: 32px 48px;
  background: #F2F1ED;
  border-top: 1px solid rgba(18,18,18,0.06);
  border-bottom: 1px solid rgba(18,18,18,0.06);
  margin-bottom: 64px;
}
.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.bbb-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border: 1px solid rgba(18,18,18,0.1);
  background: #f8f9ff;
}
@media (max-width: 768px) {
  .review-grid { grid-template-columns: 1fr !important; }
  .trust-bar { gap: 28px; padding: 24px; }
}
`;

export default function ReviewsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="reviews" style={{ background: "#F2F1ED", padding: "0 0 80px" }}>
      <style>{reviewStyles}</style>

      {/* Trust Bar */}
      <div className="trust-bar">
        {/* BBB Badge */}
        <div className="bbb-badge">
          <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
            <rect width="60" height="60" fill="#003087"/>
            <text x="30" y="38" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial">B</text>
          </svg>
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#003087" }}>BBB Accredited</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#003087", letterSpacing: "0.05em" }}>A+ Rating</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "48px", background: "rgba(18,18,18,0.1)" }} />

        {/* Star summary */}
        <div className="trust-item">
          <div style={{ display: "flex", gap: "4px" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#888">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, color: "#121212", lineHeight: 1 }}>5.0</div>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", fontWeight: 500 }}>Across All Platforms</div>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "48px", background: "rgba(18,18,18,0.1)" }} />

        {/* Platforms */}
        {["Google", "Yelp", "Thumbtack"].map((p) => (
          <div key={p} className="trust-item">
            <PlatformIcon platform={p} />
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", fontWeight: 500 }}>{p}</div>
          </div>
        ))}
      </div>

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "56px", padding: "0 24px" }}>
        <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "#555", marginBottom: "14px" }}>
          Client Reviews
        </div>
        <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 300, letterSpacing: "0.03em", color: "#121212", lineHeight: 1.15, margin: 0 }}>
          What Our Clients Say
        </h2>
        <div style={{ width: "48px", height: "1px", background: "rgba(18,18,18,0.1)", margin: "20px auto 0" }} />
      </div>

      {/* Review Cards Grid */}
      <div
        className="review-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          background: "rgba(18,18,18,0.06)",
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="review-card"
            style={{ animationDelay: `${i * 0.1}s` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Platform badge */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <PlatformIcon platform={r.platform} />
                <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: platformColors[r.platform] }}>
                  {r.platform}
                </span>
              </div>
              {r.verified && (
                <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#009fd9", border: "1px solid #009fd9", padding: "2px 8px" }}>
                  Verified
                </span>
              )}
            </div>

            {/* Stars */}
            <StarRating count={r.stars} />

            {/* Review text */}
            <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.05rem", fontWeight: 300, color: "#333", lineHeight: 1.85, letterSpacing: "0.02em", margin: 0, fontStyle: "italic", flex: 1 }}>
              {r.text}
            </p>

            {/* Reviewer */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid rgba(18,18,18,0.07)", paddingTop: "20px" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: r.color, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", fontWeight: 600,
                color: "white",
                letterSpacing: "0.05em", flexShrink: 0
              }}>
                {r.initials}
              </div>
              <div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", fontWeight: 500, color: "#121212", letterSpacing: "0.05em" }}>{r.name}</div>
                <div style={{ fontSize: "0.68rem", color: "#999", letterSpacing: "0.08em", marginTop: "2px" }}>{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA nudge */}
      <div style={{ textAlign: "center", marginTop: "56px", padding: "0 24px" }}>
        <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.2rem", fontWeight: 300, fontStyle: "italic", color: "#666", letterSpacing: "0.04em", marginBottom: "24px" }}>
          Join hundreds of satisfied clients across Metro Atlanta.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.72rem", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase",
            padding: "18px 48px",
            background: "#121212", color: "white",
            textDecoration: "none", border: "none",
          }}
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}