import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const handelGoogleLogin = ()=>{
        googleLogin()
        .then((result) =>{
            const user = result.user;
            console.log('google login', user);
        })
        .catch((error) =>{
            console.log('google login error', error.message);
        })
    }
    return (
        <div className="text-center mt-5">
                <p>Or Sign In with</p>
                <div className="mt-5 flex items-center justify-center gap-10">
                  <FaFacebookF className="w-8 h-5"></FaFacebookF>
                  <FaLinkedinIn className="w-8 h-5"></FaLinkedinIn>
                  <FcGoogle onClick={handelGoogleLogin} className="w-8 h-5"></FcGoogle>
                </div>
              </div>
    );
};

export default SocialLogin;