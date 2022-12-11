import GameModeButton from '../components/GameModeButton';
import Header from '../components/Header';

function HomePage() {
  return (
    <div className='wall' >
      <Header inGame={ false } />
      <main className='finsh-home'>
      <GameModeButton amountOfPlayers={1} />
      <GameModeButton amountOfPlayers={4}/>
      </main>
    </div>
  )
}

export default HomePage
