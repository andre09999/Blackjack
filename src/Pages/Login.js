import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context/context';
import '../styles/login.css'
   
function Login({history}) {
    const [login, SetLogin]= useState('')
    const [MSg, SetMsg]= useState('')
    const { SetloginNumber, DataResult }= useContext(Context);
    const navigate = useNavigate();
    useEffect(()=> {
        console.log(DataResult)
        if(DataResult.code === 'successful'){
         navigate('/home')
      }
        if(DataResult.code === 'internal_issue'){
            console.log('aq')
        SetMsg('Put a valid wallet')
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[DataResult]);

    const validation =(event) => {
        SetloginNumber(login)
        event.preventDefault();
    }
  return (
  <div className='container'>
    <form className='login'>
        <label className='wallet'>
            <h1 className="h1">Wallet:</h1>
            <input type="text" className='input' placeholder='Enter your wallet number
' value={login} onChange={ ({target}) => {SetLogin(target.value)}}/>
            {MSg? <p className='red'>{MSg}</p> : <p/>}
        </label>
        <button type='submit' className='button' onClick={(e)=> validation(e) }>
            Enter
        </button>
    </form>
    <h1>Numero de carteira simulada da Klever</h1>
    <h3>Copie a chave para conseguir acesso</h3>
    <p>klv1dym27svhh6py2t5g56rf6t36emwme2ed2wtqqdanyjf7640s583s9mq444</p>
  </div>
  );
}

export default Login;
