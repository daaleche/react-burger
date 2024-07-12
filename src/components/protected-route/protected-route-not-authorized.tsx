import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { TProtectedRoute } from "../../types";
import { RootState } from "../../services/store";

export const ProtectedRouteNotAuthorized: FC<TProtectedRoute> = ({ element }) => {
    const location = useLocation();
    const isAuth = useSelector((store: RootState) => store.userData.isAuth);

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return element;
}