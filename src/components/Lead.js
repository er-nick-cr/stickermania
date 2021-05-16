import React from 'react';
import cat from '../images/lead-cat.jpg';

function Lead() {
	return (
		<section className="lead">
			<h2 className="lead__title">
				ДЕЛАЕМ <span className="lead__accent">НЕУБИВАЕМЫЕ</span> СТИКЕРЫ
			</h2>
			<img className="lead__image" src={cat} alt="cat" />
			<h2 className="lead__title">
				Любых размеров и форм <span className="lead__accent">за 2-3 дня</span>
			</h2>
		</section>
	);
}

export default Lead;
