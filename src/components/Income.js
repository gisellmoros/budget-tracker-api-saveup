import React from 'react'
import {GlobalContextProvider} from '../globalState'

const Income = () => {
	return(
		<GlobalContextProvider>
		<div>
			<h4>Transaction History</h4>
			<ul>
				<li>
					<span>Salary</span>
					<span>Php5000</span>
					<button>Delete</button>
				</li>
			</ul>
		</div>
		</GlobalContextProvider>
		)
}

export default Income