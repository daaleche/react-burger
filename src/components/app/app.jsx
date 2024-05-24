import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import styles from './app.module.css'
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredients, setIngredients] = useState([])
  const [isLoadData, setIsLoadData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(dataUrl);
        const resultData = await res.json();
        setIngredients(resultData.data);
        setIsLoadData(true);
      }
      catch (error) {
        console.error(error);
      }
    }
    getData();
  })

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