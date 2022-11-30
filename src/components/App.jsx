import '../styles/index.scss'
import Recipes from './Recipes'
import image from '../images/1527042374.svg';

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1></h1>
        </section>
        <img id='warrior' src={image} alt='mounted mongol' />
      </main>
      <Recipes />
    </>
  );
}

export default App