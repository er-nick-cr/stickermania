import React from 'react';

function Intro() {
	return (
		<section className="intro">
			<article className="intro__description">
				Привет. Я - Наташа, а <span className="intro__accent">Стикермания</span>{' '}
				- мой проект, который помогает бизнесу в Красноярске запомниться своим
				клиентам за счёт
				<span className="intro__accent"> ярких неубиваемых наклеек.</span> Их
				можно
				<span className="intro__accent">
					{' '}
					лепить на упаковку или раздавать, как сувенирку.
				</span>{' '}
				В любом случае получится эффективно, ёмко и узнаваемо.
				<span className="intro__accent">
					{' '}
					Это реклама, которую ваш клиент захочет оставить себе.
				</span>{' '}
				А еще мы делаем огромные клейкие постеры -
				<span className="intro__accent">до двух метров размером.</span>
			</article>
			<div className="intro__picture"></div>
		</section>
	);
}

export default Intro;
