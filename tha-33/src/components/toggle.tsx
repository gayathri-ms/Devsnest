import React , { useContext } from "react"
import Theme from "./theme"

const Toggle = () => {
	const { theme , setTheme } = useContext(Theme)

	return (
		<div style={{textAlign : "right"}} >
			<button className={ !theme ? "theme_btn" : "theme_btn dark" } onClick={() => setTheme(!theme)} >
				{!theme ? "Light" : "Dark"} 
			</button>
      	</div>	
		);
}

export default Toggle;