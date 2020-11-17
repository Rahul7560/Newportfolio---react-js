import React, { useContext } from 'react'
import { Themecontex } from '../../../context/Themecontex'
import './button.css'

export default function Button(props) {

    const { theme, settheme } = useContext(Themecontex)

    const mousehover = () => {

        settheme({
            colorone: props.colorone,
            colortwo: props.colortwo,
            img: props.img
        })










    }







    return (
        <div onMouseOver={mousehover} className="buttonskill mt-2 mr-2">
            <p> {props.text} </p>
        </div>
    )
}
