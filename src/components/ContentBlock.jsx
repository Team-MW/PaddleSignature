import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContentBlock = ({
  eyebrow,
  title,
  quote,
  lead,
  rule,
  rule2,
  list,
  steps,
  cards,
  flags,
  cta,
  ctaLink,
  ctaGhost,
  img,
  price,
  reverse = false,
  toggleHover
}) => {
  const hasContent = quote || lead || rule || rule2 || list || steps || cards || flags || cta || price;

  return (
    <section className={`content-block-section section-padding ${reverse ? 'reverse' : ''}`}>
      <div className="container">
        <div className={`content-block-grid ${!img ? 'no-img' : ''} align-center`}>
          
          {/* Content Wrapper */}
          <div className="content-block-wrapper">
            {eyebrow && <span className="badge-terracotta mb-20">{eyebrow}</span>}
            {title && <h2 className="serif xl-title mb-30" dangerouslySetInnerHTML={{ __html: title }} />}
            
            {quote && <blockquote className="serif italic lg-quote mb-30">{quote}</blockquote>}
            {lead && <p className="description-text mb-30">{lead}</p>}
            
            {rule && <p className="rule-text mb-30"><em>{rule}</em></p>}
            
            {list && (
              <ul className="premium-list content-block-grid-list mb-30">
                {list.map((item, idx) => (
                  <li key={idx} className="mb-10 grid-list-item">
                    <strong className="list-title">{item[0]}</strong>
                    {item[1] && (
                      <span className="list-desc">
                        {item[1]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {steps && (
              <div className="steps-container mb-30">
                {steps.map((step, idx) => (
                  <div key={idx} className="step-item mb-20">
                    <div className="step-number serif terracotta-accent">{step[0]}</div>
                    <div className="step-content">
                      <h4 className="serif">{step[1]}</h4>
                      <p>{step[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {price && <p className="price-text serif mb-30">{price}</p>}

            {cards && (
              <div className="cards-grid mb-30">
                {cards.map((card, idx) => (
                  <div key={idx} className="info-card-premium">
                    {card[3] && <span className="badge-terracotta" style={{ position: 'absolute', top: '-15px', right: '15px' }}>{card[3]}</span>}
                    <h3 className="serif">{card[0]}</h3>
                    {card[1] && <div className="card-price serif terracotta-accent mb-10" style={{ fontSize: '1.5rem' }}>{card[1]}</div>}
                    <p>{card[2]}</p>
                  </div>
                ))}
              </div>
            )}

            {rule2 && <p className="rule-text mb-30" style={{ opacity: 0.7 }}><em>{rule2}</em></p>}

            {flags && (
              <div className="flags-container mb-30" style={{ background: 'var(--cream)', padding: '20px', borderRadius: '8px' }}>
                {flags.map((flag, idx) => (
                  <div key={idx} className="mb-10">
                    <strong className="terracotta-accent">{flag[0]}</strong>: {flag[1]}
                  </div>
                ))}
              </div>
            )}

            {cta && (
              <Link to={ctaLink || "/infos#reservation-form"} className={`btn ${ctaGhost ? 'btn-ghost' : 'btn-primary'} mt-40`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>{cta}</span>
              </Link>
            )}
          </div>

          {/* Image Wrapper */}
          {img && (
            <div className="content-block-image">
              <div className="img-decoration-box"></div>
              <img
                src={img.startsWith('/') || img.startsWith('http') ? img : "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"}
                alt={eyebrow || 'Illustration'}
                className="img-premium-border"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
