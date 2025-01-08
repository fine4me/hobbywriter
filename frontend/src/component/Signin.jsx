import { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-2">
            Sign In
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Welcome back! Please enter your details.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="input input-bordered w-full"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <button type="button" className="btn btn-link btn-sm px-0">
                Forgot password?
              </button>
              <Link 
                to="/signup" 
                className="btn btn-link btn-sm px-0"
              >
                Create account
              </Link>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
          </form>
          <p className="text-center text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link 
              to="/signup" 
              className="text-primary hover:text-primary-focus font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;