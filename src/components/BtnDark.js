import { useState, useEffect } from "react"
import sun from "./../styles/img/icons/sun.svg"
import moon from "./../styles/img/icons/moon.svg"
import "./BtnDark.css"

function BtnDark() {
    const [dark, setDark] = useState('light')
    useEffect(() => {
        if (dark === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [dark])
    const darkMode = () => {
        setDark((el) => {
            return el === 'light' ? 'dark' : 'light'
        })
    }
    return (
        <div className="BtnDark">
            <button className="dark-mode-btn" onClick={darkMode}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>
        </div>
    )
}
export default BtnDark