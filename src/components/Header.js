import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import Context from "../Context/context"
import '../styles/header.css'

function Header({ inGame }) {
  const { balance, betValue } = useContext(Context);
  const navigate = useNavigate();

  return(
    <header className="Header">
        <p>Balance: {balance} KLV</p>
        <p>Betting: {betValue} KLV</p>
        <p className="p">
        { !inGame && <button className="button-menu" onClick={(event) => {
           navigate('/history')
           event.preventDefault()
  ;}
  }
>Bet history</button> }
        </p>
        <p>
        <a href="/">Logout</a>
        </p>
    </header>
  )
}

export default Header

