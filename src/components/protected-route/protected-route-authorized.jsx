import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProtectedRouteAuthorized({ element }) {
    const location = useLocation();
    const isAuth = useSelector(store => store.userData.isAuth);

    if (isAuth) {
        return <Navigate to="/profile" state={{ from: location }} />;
    }

    return element;
}

ProtectedRouteAuthorized.propTypes = {
    element: PropTypes.element.isRequired,
};