import { useContext, useEffect } from "react";
import Context from "../Context/context";
import RetryButton from "./RetryButton";

export default function LoseMessage() {
  const { balance, setBalance, betValue, balanceHistory, setBalanceHistory } = useContext(Context);

  useEffect(() => {
    const getLoss = () => {
      setBalance(balance - betValue);
      setBalanceHistory([...balanceHistory, `- ${betValue}`]);
    }
    getLoss();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <h1 className='lose'>You lose!</h1>
      <RetryButton />
    </>
  )
}