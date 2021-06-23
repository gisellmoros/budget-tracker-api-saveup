import React from "react";
import '../pages/style.css'

export default function Expense({ income, expense }) {
	return (
		<div>
			<h2>Your Balance</h2>
			<div>Php{income - expense}</div>
			<div>
				<div>
					<h2>Income</h2>
					<div>Php{income}</div>
				</div>
				<div>
					<h2>Expense</h2>
					<div>Php{expense}</div>
				</div>
			</div>
		</div>
	);
}