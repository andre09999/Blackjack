import { useContext } from "react"
import { Link } from "react-router-dom";
import Context from "../Context/context"
import '../styles/header.css'

function Header({ inGame }) {
  const { balance, betValue } = useContext(Context);

  return(
    <header className="Header">
        <p>Balance: {balance}</p>
        <p>Betting: {betValue}</p>
        <p className="p">
        { !inGame && <a href="/history">Bet history</a> }
        </p>
        <p>
        <a href="/">Logout</a>
        </p>
    </header>
  )
}

export default Header
