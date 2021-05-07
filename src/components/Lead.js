import React from 'react';
import cat from '../images/lead-cat.jpg';

function Lead() {
	return (
		<section className="lead">
			<h2 className="lead__title">ДЛАЕМ НЕУБИВАЕМЫЕ СТИКЕРЫ</h2>
			<img className="lead__image" src={cat} alt="cat" />
			<h3 className="lead__title">Любых размеров и форм за 2-3 дня</h3>
		</section>
	);
}

export default Lead;
