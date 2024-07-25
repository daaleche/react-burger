import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { TProtectedRoute } from "../../types";
import { useAppSelector } from "../../utils/hooks";

export const ProtectedRouteNotAuthorized: FC<TProtectedRoute> = ({ element }) => {
    const location = useLocation();
    const isAuth = useAppSelector(store => store.userData.isAuth);
    const loc = location.state ? location.state.from.pathname : "/login";

    if (!isAuth) {
        return <Navigate to={loc} state={{ from: location }} />;
    }

    return element;
}