import NavBar from '../shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const LoginOrSignup = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginOrSignup;