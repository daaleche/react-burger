import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRouteNotAuthorized({ element }) {
    const location = useLocation();
    const isAuth = useSelector(store => store.userData.isAuth);

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return element;
}

ProtectedRouteNotAuthorized.propTypes = {
    element: PropTypes.element.isRequired,
};