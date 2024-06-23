import { Navigate } from 'react-router-dom'
import PropTypes from "prop-types";
import { getRefreshToken } from '../../utils/utils'

export default function ProtectedRouteAuthorized({ element }) {
    if (getRefreshToken())
        return <Navigate to={'/profile'} />

    return element;
}

ProtectedRouteAuthorized.propTypes = {
    element: PropTypes.element.isRequired,
};