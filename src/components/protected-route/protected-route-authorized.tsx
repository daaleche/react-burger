import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../services/store";
import { TProtectedRoute } from "../../types";

export const ProtectedRouteAuthorized: FC<TProtectedRoute> = ({ element }) => {
    const location = useLocation();
    const isAuth = useSelector((store: RootState) => store.userData.isAuth);

    if (isAuth) {
        return <Navigate to="/profile" state={{ from: location }} />;
    }

    return element;
}