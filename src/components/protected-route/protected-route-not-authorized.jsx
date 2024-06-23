import { Navigate } from 'react-router-dom'
import PropTypes from "prop-types";
import { getRefreshToken } from '../../utils/utils'

export default function ProtectedRouteNotAuthorized({ element }) {

    if (!getRefreshToken())
        return <Navigate to={'/login'} />

    return element;
}

ProtectedRouteNotAuthorized.propTypes = {
    element: PropTypes.element.isRequired,
};