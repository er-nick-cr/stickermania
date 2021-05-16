import React from 'react';
import icon from '../images/advantages-elips.png';

function Advantages() {
	return (
		<section className="advantages">
			<h3 className="advantages__title">Почему мы?</h3>
			<ul className="advantages__cards">
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">
						Работаем с иллюстраторами и дизайнерами
					</h4>
					<p className="advantages__description">
						Создадим лого или набор иллюстраций по вашему ТЗ или с ноля. Разные
						стили рисования и виды дизайна.
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">Быстрое изготовление</h4>
					<p className="advantages__description">
						Изготовление 2-3 рабочих дня
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">
						Принимаем макеты в любом формате
					</h4>
					<p className="advantages__description">
						Напечатаем наклейки с любых исходников, даже сканов изображений.
						Поможем подготовить такие макеты к печати и резке.
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">Качественные материалы </h4>
					<p className="advantages__description">
						Печатаем на виниловой пленке с ламинацией. Такие наклейки не боятся
						влаги, изображение не стирается.
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">Цветопроба бесплатно</h4>
					<p className="advantages__description">
						Нужен конкретный цвет? Напечатаем несколько вариантов цвета, чтобы
						вы выбрали нужный вам оттенок.
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">Ровная резка</h4>
					<p className="advantages__description">
						Минимальная погрешность при резке. Так же делаем сквозную вырубку по
						контуру.
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">Отдаем товар поштучно</h4>
					<p className="advantages__description">
						Отдаем наклейки и листы поштучно, никаких рулонов.
					</p>
				</li>
				<li className="advantages__card">
					<img className="advantages__icon" src={icon} alt="icon" />
					<h4 className="advantages__card-header">Александр Придворный</h4>
					<p className="advantages__description">
						Да, он делает эти наклейки и да, он невероятно красив
					</p>
				</li>
			</ul>
		</section>
	);
}

export default Advantages;
