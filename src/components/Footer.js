import React from 'react';
import icon from '../images/footer-social.png';

function Footer() {
	return (
		<footer className="footer">
			<h3 className="footer__title">Мы в соц.сетях:</h3>
			<ul className="footer__social">
				<li className="footer__social-icon">
					<img src={icon} alt="social" />
				</li>
				<li className="footer__social-icon">
					<img src={icon} alt="social" />
				</li>
				<li className="footer__social-icon">
					<img src={icon} alt="social" />
				</li>
				<li className="footer__social-icon">
					<img src={icon} alt="social" />
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
