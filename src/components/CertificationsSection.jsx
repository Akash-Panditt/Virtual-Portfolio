import { motion } from 'framer-motion';

export default function CertificationsSection() {
  const certs = [
    { title: "Quantitative Research Job Simulation", issuer: "JPMorgan Chase & Co. / Forage", year: "2026", image: "/images/cert-jpmorgan.png", link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_6a5453b086066ba056df379f_1783915355730_completion_certificate.pdf" },
    { title: "Claude 101", issuer: "Anthropic", year: "2026", image: "/images/cert-claude.png", link: "https://verify.skilljar.com/c/4zz6bm4xnb6e" },
    { title: "Prompt Engineering for Everyone", issuer: "CognitiveClass.ai", year: "2025", image: "/images/cert-ibm.png", link: "https://courses.cognitiveclass.ai/certificates/f2dfc8c2c8054bc896e6229662a31c90" },
  ];
  return (
    <section id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="section-label">05 — CERTIFICATIONS</p>
          <h2 className="section-title">Certifications & Learning.</h2>
        </motion.div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <motion.div 
              key={i} 
              className="card cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={c.image} alt={c.title} className="cert-card-img" />
              <div className="cert-card-body">
                <div>
                  <h4>{c.title}</h4>
                  <div className="cert-meta">
                    <span>{c.issuer}</span>
                    <span className="cert-year">{c.year}</span>
                  </div>
                </div>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Credential →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
