import { Link } from 'react-router-dom';
import { languageLinks, serviceLinks } from 'constants/footer-link';

export const Footer = () => {
  return (
    <footer className="a-login-footer">
      <div className="a-login-footer__wrapper">
        {languageLinks.map(({ name, to }, index) => (
          <Link key={index} to={to}>
            {name}
          </Link>
        ))}
        <Link to="/" className="a-login-footer__square">
          <i className="plus_icon"></i>
        </Link>
      </div>

      <div className="divider" />

      <div className="a-login-footer__wrapper">
        {serviceLinks.map(({ name, to }, index) => (
          <Link key={index} to={to}>
            {name}
          </Link>
        ))}

        <Link to="/">
          AdChoices
          <i className="adChoices_icon"></i>
        </Link>
        <Link to="/">Terms</Link>
        <Link to="/">Help</Link>
      </div>

      <div className="a-login-footer__wrapper">
        <Link to="/" style={{ fontSize: '12px', marginTop: '10px' }}>
          Meta © 2022
        </Link>
      </div>
    </footer>
  );
};
