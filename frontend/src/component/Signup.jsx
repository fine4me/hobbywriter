import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignupForm = () => {
    const [formData, setFormData] =useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] =useState({});

    const validateForm = () => {
        const newErrors = {};
        
        // Basic required field validation
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        
        // Age validation
        if (!formData.dob) {
            newErrors.dob = 'Date of birth is required';
        } else {
            const birthDate = new Date(formData.dob);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            if (age < 14) {
                newErrors.dob = 'You must be at least 14 years old to sign up';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
    
                const result = await response.json();
                console.log('Server response:', result);
                if ( result) {
                    navigate('/signin');
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center text-2xl font-bold mb-6">Create an Account</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.username ? 'input-error' : ''}`}
                                placeholder="Enter username"
                            />
                            {errors.username && <span className="text-error text-sm mt-1">{errors.username}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
                                placeholder="Enter password"
                            />
                            {errors.password && <span className="text-error text-sm mt-1">{errors.password}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.firstName ? 'input-error' : ''}`}
                                placeholder="Enter first name"
                            />
                            {errors.firstName && <span className="text-error text-sm mt-1">{errors.firstName}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.lastName ? 'input-error' : ''}`}
                                placeholder="Enter last name"
                            />
                            {errors.lastName && <span className="text-error text-sm mt-1">{errors.lastName}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                                placeholder="Enter email"
                            />
                            {errors.email && <span className="text-error text-sm mt-1">{errors.email}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className={`input input-bordered w-full ${errors.dob ? 'input-error' : ''}`}
                            />
                            {errors.dob && <span className="text-error text-sm mt-1">{errors.dob}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className={`select select-bordered w-full ${errors.gender ? 'select-error' : ''}`}
                            >
                                <option value="">Select gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                            {errors.gender && <span className="text-error text-sm mt-1">{errors.gender}</span>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center text-sm mt-6">
            Already Have an Account ?{" "}
            <Link 
              to="/signin" 
              className="text-primary hover:text-primary-focus font-semibold"
            >
              Log In
            </Link>
          </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;