import React,{useContext,useEffect} from 'react'
import UserContext from 'userContext'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Logout(){

	const {user,setUser,unsetUser} = useContext(UserContext)

	console.log(user)
	console.log(setUser)
	console.log(unsetUser)

	useEffect(()=>{
		unsetUser()

		Swal.fire({

					icon: "success",
					title: "Hope to see you again!",
					text: "Thank you for using SaveUp."

				})

		setUser({
			email: null,
			isAdmin: null
		})

	},[])

	return (

		<Redirect to="/"/>


		)

}
