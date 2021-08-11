import { createContext } from "react"

export interface Themetype {
	theme : boolean,
	setTheme : (theme : boolean) => void
}

const initialState : Themetype = {
	theme:false,
	setTheme : (theme : boolean) => {}
}

const Theme = createContext<Themetype>(initialState);

export default Theme;