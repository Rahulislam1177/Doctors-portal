import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen pt-10">
      <div className="hero-content">
        <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <h4 className="text-center font-semibold">SignUp</h4>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
              {signUpError && <p className="text-red-500">{signUpError}</p>}
            </div>

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
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[@$!%*#?&])/,
                      message:
                        "Password must have two uppercase and one special caracters",
                    },
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Sign Up
              </button>
            </div>
            <p className="text-center mt-2">
              Already Have an account?{" "}
              <Link className="text-secondary" to="/login">
                Please Login
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

export default SignUp;
