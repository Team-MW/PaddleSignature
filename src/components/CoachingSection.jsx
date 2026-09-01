import React from 'react';
import { Link } from 'react-router-dom';

const CoachingSection = ({ toggleHover }) => {
  return (
    <section className="coaching-section">
      <div className="container">
        
        <div className="coaching-header">
          <div className="community-subtitle-wrapper" style={{ justifyContent: 'flex-start' }}>
            <span className="community-line"></span>
            <span className="community-subtitle">COACHING</span>
          </div>
          
          <h2 className="serif xl-title mb-20">
            Progressez <span className="italic" style={{ color: 'var(--terracotta)' }}>avec un coach</span>
          </h2>
          
          <p className="coaching-desc">
            Des séances d'une heure, seul ou à plusieurs. Le tarif est par personne, il baisse dès que vous venez accompagné.
          </p>
        </div>

        <div className="coaching-table-wrapper">
          <table className="coaching-table">
            <thead>
              <tr>
                <th className="th-left">Formule</th>
                <th>1 séance</th>
                <th>
                  <div className="pack-header">Pack 5 séances</div>
                  <div className="pack-discount">-5 %</div>
                </th>
                <th>
                  <div className="pack-header">Pack 10 séances</div>
                  <div className="pack-discount">-10 %</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-left font-bold">Individuel</td>
                <td>50 €</td>
                <td>237 €</td>
                <td>450 €</td>
              </tr>
              <tr>
                <td className="td-left font-bold">En duo</td>
                <td>30 €</td>
                <td>142 €</td>
                <td>270 €</td>
              </tr>
              <tr>
                <td className="td-left font-bold">À trois ou quatre</td>
                <td>25 €</td>
                <td>118 €</td>
                <td>225 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="coaching-footer">
          <Link 
            to="/infos#reservation-form" 
            className="btn btn-outline-dark" 
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Nous contacter
          </Link>
          <div className="coaching-footer-note">
            Tarifs par personne, séances d'1 heure. L'organisation se fait directement avec le coach.
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoachingSection;
