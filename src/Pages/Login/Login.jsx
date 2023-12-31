import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../context/UserContext";

const Login = () => {
  const { singIn } = UserContext(AuthContext);
  console.log(singIn);
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log();

  const handleLogin = (data) => {
    singIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setLoginError(error);
      });
  };

  return (
    <div className="hero min-h-screen pt-10">
      <div className="hero-content">
        <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <h4 className="text-center font-semibold">LogIn</h4>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is Required",
                })}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                className="input input-bordered"
                required
              />
              {loginError && <p className="text-red-500">{loginError}</p>}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                LogIn
              </button>
            </div>
            <p className="text-center mt-2">
              New to Doctors Portal?{" "}
              <Link className="text-secondary" to="/registration">
                Create new account
              </Link>
            </p>
            <div className="divider">OR</div>

            <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
