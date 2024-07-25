import { useEffect, FC, SyntheticEvent } from "react";
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
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { FeedPage } from "../../pages/feed/feed";
import { OrderPage } from "../../pages/order/order";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const prevLocation = location.state && location.state.prevLocation;
  const ingredientDetailModalIsOpen = useAppSelector(store => store.ingredientDetails.modalIsOpen);

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

      <Routes location={prevLocation || location}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<ProtectedRouteAuthorized element={<LoginPage />} />} />
        <Route path='/register' element={<ProtectedRouteAuthorized element={<RegisterPage />} />} />
        <Route path='/forgot-password' element={<ProtectedRouteAuthorized element={<ForgotPasswordPage />} />} />
        <Route path='/reset-password' element={<ProtectedRouteAuthorized element={<ResetPasswordPage />} />} />
        <Route path='/profile' element={<ProtectedRouteNotAuthorized element={<ProfilePage />} />} />
        <Route path='/profile/orders' element={<ProtectedRouteNotAuthorized element={<ProfileOrdersPage />} />} />
        <Route path='/profile/orders/:id' element={<ProtectedRouteNotAuthorized element={<OrderPage />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:id" element={<OrderPage />} />
      </Routes>

      {ingredientDetailModalIsOpen && (
        <Routes>
          <Route path="/ingredients/:id" element={
            <Modal title='Детали ингредиента' onClose={handleClose}>
              <IngredientDetails />
            </Modal>} />
        </Routes>
      )}

      {prevLocation && (
        <Routes>
          <Route path="/feed/:id" element={
            <Modal onClose={handleClose}>
              <OrderPage />
            </Modal>} />
        </Routes>
      )}


      {prevLocation && (
        <Routes>
          <Route path="/profile/orders/:id" element={
            <Modal onClose={handleClose}>
              <OrderPage />
            </Modal>} />
        </Routes>
      )}
    </>
  );
}