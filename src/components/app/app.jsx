import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import styles from './app.module.css'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from '../../utils/api'

function App() {
  const [ingredients, setIngredients] = useState([])
  const [isLoadData, setIsLoadData] = useState(false);

  useEffect(() => {
    const getData = () => {
      getIngredients()
        .then((resultData) => {
          setIngredients(resultData.data);
          setIsLoadData(true);
        })
        .catch((error) => {
          console.error(error);
        })
    }
    getData();
  }, [])

  return (
    <>
      <AppHeader />
      {isLoadData && (
        <div className={styles.main}>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} />
        </div>
      )}
    </>
  );
}

export default App;