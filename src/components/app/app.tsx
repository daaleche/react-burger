import { useEffect, FC, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AppHeader } from "../app-header/app-header";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { getUser } from "../../services/actions/profile";
import { HomePage } from "../../pages/home/home";
import { LoginPage } from "../../pages/login/login"
import { RegisterPage } from "../../pages/register/register"
import { ForgotPasswordPage } from "../../pages/forgot-password/forgot-password"
import { ResetPasswordPage } from "../../pages/reset-password/reset-password"
import { ProfilePage } from "../../pages/profile/profile"
import { ProfileOrdersPage } from "../../pages/profile-orders/profile-orders"
import { ProtectedRouteAuthorized } from "../protected-route/protected-route-authorized"
import { ProtectedRouteNotAuthorized } from "../protected-route/protected-route-not-authorized"
import { IngredientPage } from "../../pages/ingredient/ingredient"
import {
  CLOSE_INGREDIENT_DETAIL_MODAL,
  UNSELECT_INGREDIENT
} from "../../services/actions/ingredient-details";
import { Modal } from '../modal/modal'
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { AppDispatch, RootState } from "../../services/store";

export const App: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const modal = location.state && location.state.fromCardClick;

  const ingredientDetailModalIsOpen = useSelector((store: RootState) => store.ingredientDetails.modalIsOpen);

  const handleClose = (e: SyntheticEvent) => {
    e.stopPropagation();
    dispatch({ type: CLOSE_INGREDIENT_DETAIL_MODAL });
    dispatch({ type: UNSELECT_INGREDIENT });
    navigate(-1)
  };

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <AppHeader />

      <Routes location={ingredientDetailModalIsOpen ? modal : location}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<ProtectedRouteAuthorized element={<LoginPage />} />} />
        <Route path='/register' element={<ProtectedRouteAuthorized element={<RegisterPage />} />} />
        <Route path='/forgot-password' element={<ProtectedRouteAuthorized element={<ForgotPasswordPage />} />} />
        <Route path='/reset-password' element={<ProtectedRouteAuthorized element={<ResetPasswordPage />} />} />
        <Route path='/profile' element={<ProtectedRouteNotAuthorized element={<ProfilePage />} />} />
        <Route path='/profile/orders' element={<ProtectedRouteNotAuthorized element={<ProfileOrdersPage />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />

      </Routes>

      {ingredientDetailModalIsOpen && (
        <Routes>
          <Route path="/ingredients/:id" element={
            <Modal title='Детали ингредиента' onClose={handleClose}>
              <IngredientDetails />
            </Modal>} />
        </Routes>
      )}
    </>
  );
}