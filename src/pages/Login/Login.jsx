import login from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handelLogin =event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        loginUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
  return (
    <>
      <div className="hero h-[calc(100vh-100px)] ">
        <div className="hero-content flex ">
          <div className="text-center  w-1/2">
            <img className="w-[660px] h-[502px]" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg ml-10 shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <p className="text-lg text-error text-center">{error}</p>
              <form onSubmit={handelLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-error text-white">Login</button>
                </div>
              </form>
              <div className="text-center mt-5">
                <p>Or Sign In with</p>
                <div className="mt-5 flex items-center justify-center gap-10">
                  <FaFacebookF className="w-8 h-5"></FaFacebookF>
                  <FaLinkedinIn className="w-8 h-5"></FaLinkedinIn>
                  <FcGoogle className="w-8 h-5"></FcGoogle>
                </div>
              </div>
              <p className="text-center mt-8">
                Have an account? <Link to={`/auth/register`} className="text-error">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
