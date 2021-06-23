import React from 'react'
import {GlobalContextProvider} from '../globalState'

const Transaction = () => {

	return(
		<GlobalContextProvider>
		<div className="form-wrapper">
			<form>
				<div className="input-group-income">
					<input type="text" placeholder="Add Income..." autoComplete="off"/>
					<input type="number" placeholder="Amount" autoComplete="off"/>
					<input type="submit" value="Submit"/>
				</div>
			</form>
			<form>
				<div>
					<input type="text" placeholder="Add Expense..." autoComplete="off"/>
					<input type="number" placeholder="Amount" autoComplete="off"/>
					<input type="submit" value="Submit"/>
				</div>
			</form>
		</div>
</GlobalContextProvider>
		)
}

export default Transaction