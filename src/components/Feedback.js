import React from 'react';

function Feedback() {
	return (
		<section className="feedback">
			<h3 className="feedback__title">Оставь заявку и узнай стоимость</h3>
			<p className="feedback__subtitle">
				Заполни форму и получи точный рассчет стоимости своего заказа.
			</p>
			<form className="feedback__form">
				<fieldset className="feedback__form-container">
					<input
						type="text"
						className="feedback__input"
						placeholder="Имя или название организации"
						minLength="2"
					></input>
					<input
						type="tel"
						className="feedback__input"
						placeholder="Телефон"
					></input>
					<input
						type="email"
						className="feedback__input"
						placeholder="Эл. почта"
					></input>
					<input
						type="text"
						className="feedback__input"
						placeholder="Размер и количество наклеек"
						minLength="2"
					></input>
					<input
						type="text"
						className="feedback__input"
						placeholder="Назначение наклеек"
						minLength="2"
					></input>
				</fieldset>
				<button type="submit" className="feedback__button">
					Отправить
				</button>
			</form>
		</section>
	);
}

export default Feedback;
