import React from 'react';
import visitCard from '../images/small-stickers-visit-card.png';
import image from '../images/small-stickers-image.png';
import pack from '../images/small-stickers-pack.png';
import stickerpage from '../images/stickerpage-image.png';
import color from '../images/color-image.png';
import bigSticker from '../images/stickers-big.png';

function Goods() {
	return (
		<section className="goods">
			<div className="small-stickers">
				<div className="small-stickers__about">
					<h3 className="small-stickers__title">??? Формат мини: 2-20 см </h3>
					<p className="small-stickers__paragraph">
						Наклейки поштучно, вырезанные по заданной фигуре
					</p>
				</div>
				<div className="small-stickers__card">
					<img
						className="small-stickers__image"
						src={visitCard}
						alt="путешествующая визитка"
					/>
					<h4 className="small-stickers__card-title">Путешествующая визитка</h4>
					<p className="small-stickers__description">
						Реклама, которая всегда с тобой — красиво и нативно
					</p>
				</div>
				<div className="small-stickers__card">
					<img
						className="small-stickers__image"
						src={image}
						alt="путешествующая визитка"
					/>
					<h4 className="small-stickers__card-title">
						Брендированная упаковка
					</h4>
					<p className="small-stickers__description">
						описание описание описание
					</p>
				</div>
				<div className="small-stickers__card">
					<img
						className="small-stickers__image"
						src={pack}
						alt="путешествующая визитка"
					/>
					<h4 className="small-stickers__card-title">Имиджевый продукт</h4>
					<p className="small-stickers__description">
						описание описание описание
					</p>
				</div>
			</div>
			<div className="stickerpage">
				<div className="stickerpage__about">
					<h3 className="stickerpage__title">Стикерпэйдж</h3>
					<p className="stickerpage__paragraph">
						Страница со стикерами. Каждая наклейка на странице вырезана по
						контуру.
					</p>
				</div>
				<img
					className="stickerpage__image"
					src={stickerpage}
					alt="стикерпэйдж"
				/>
			</div>
			<div className="stickerpage stickerpage_color">
				<div className="stickerpage__about">
					<h3 className="stickerpage__title">Резка из цветных пленок</h3>
					<p className="stickerpage__paragraph stickerpage__paragraph_color">
						Плоттерная резка из пленок разных оттенков. Для создания аппликаций
						на стекла снаружи и с обратной стороны.
					</p>
				</div>
				<img className="stickerpage__image" src={color} alt="стикерпэйдж" />
			</div>
			<div className="small-stickers small-stickers_big">
				<div className="small-stickers__about">
					<h3 className="small-stickers__title">Биг Сайз наклейки </h3>
					<p className="small-stickers__paragraph small-stickers__paragraph_big">
						Заметные липкие постеры для витрин, окон и стен. Максимальные
						габариты сколько на сколько
					</p>
				</div>
				<img
					className="small-stickers__image small-stickers__image_big"
					src={bigSticker}
					alt="путешествующая визитка"
				/>
			</div>
		</section>
	);
}

export default Goods;
