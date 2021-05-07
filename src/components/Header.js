import React from 'react';
import logo from '../images/header-logo.svg';

function Header() {
	return (
		<header className="header">
			<img className="header__logo" src={logo} alt="Stickermania" />
			<div className="header__container">
				<h1 className="header__title">STICKERMANIA</h1>
				<span className="header__accent">by</span>
			</div>
		</header>
	);
}

export default Header;
