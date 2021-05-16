import React from 'react';
import tatoo from '../images/users-tatoo.png';
import markets from '../images/users-markets.png';
import companies from '../images/users-companies.png';

function Users() {
	return (
		<section className="users">
			<h3 className="users__title">КТО ЮЗАЕТ?????</h3>
			<p className="users__subtitle">
				Эти ребята уже вкусили преимущества стикера как рекламного продукта
			</p>
			<div className="users__cards">
				<div className="users__card">
					<img className="users__image" src={tatoo} alt="тату" />
					<h4 className="users__card-title">Мастера тату</h4>
					<p className="users__card-subtitle">
						Дарите своим нынешним или потенциальным клиентам наклейки со своими
						эскизами
					</p>
				</div>
				<div className="users__card">
					<img className="users__image" src={markets} alt="тату" />
					<h4 className="users__card-title">Мэйкеры/магазины</h4>
					<p className="users__card-subtitle">
						Путешествующая визитка бренда. Ваш логотип и ли оффер
					</p>
				</div>
				<div className="users__card">
					<img className="users__image" src={companies} alt="тату" />
					<h4 className="users__card-title">Коропоративные компании?</h4>
					<p className="users__card-subtitle">
						Сувенирная продукция на различные инфоповоды как для вашего клиента,
						так и для сотрудников.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Users;
