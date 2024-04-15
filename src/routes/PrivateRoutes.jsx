import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({children}) => {
    const {user,loading} =useAuth();
    const location = useLocation();

    if (loading) {
        return <span className='loading loading-spinner loading-lg'></span>;
    }
    if(!user) {
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
     
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children:PropTypes.node
}