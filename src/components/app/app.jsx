import AppHeader from "../app-header/app-header";
import styles from './app.module.css'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import data from '../../utils/data.json'

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.main}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data}/>
      </div>
    </>
  );
}

export default App;