import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Auth({ register }) {
	const [showPassword, setShowPassword] = useState(false);
	const [userDetails, setUserDetails] = useState({
		userName: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserDetails({ ...userDetails, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userDetails);
	};
	return (
		<>
			<div className="w-full min-h-screen bg-charcoal flex justify-center items-center px-6 py-20">
				<div className=" bg-gray text-gold border border-gold rounded-xl w-full max-w-md p-10 backdrop-blur">
					<h1 className="text-center mb-6  font-bold text-4xl">
						{register ? "Register" : "Login"}
					</h1>
					<form className="flex flex-col p-3" onSubmit={handleSubmit}>
						{register && (
							<div className="flex flex-col gap-3 mb-4">
								<label htmlFor="userName">Username</label>
								<input
									type="text"
									placeholder="Enter your username"
									className="p-3 border border-gray-300 rounded"
									name="userName"
									value={userDetails.userName}
									onChange={handleChange}
								/>
							</div>
						)}

						<div className="flex flex-col gap-3 mb-4">
							<label htmlFor="userName">Email</label>
							<input
								type="email"
								placeholder="Enter your email"
								className="p-3 border border-gray-300 rounded"
								name="email"
								value={userDetails.email}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-3 relative mb-6">
							<label htmlFor="userName">Password</label>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								className="p-3 border border-gray-300 rounded"
								name="password"
								value={userDetails.password}
								onChange={handleChange}
							/>
							{showPassword ? (
								<FaEye
									className="absolute text-gold right-5 bottom-13 cursor-pointer "
									onClick={() => setShowPassword((prev) => !prev)}
								/>
							) : (
								<FaEyeSlash
									className="absolute text-gold right-5 bottom-13 cursor-pointer opacity-30 hover:opacity-100"
									onClick={() => setShowPassword((prev) => !prev)}
								/>
							)}

							<Link
								to={"/*"}
								className="cursor-pointer text-gray-400 underline hover:text-white"
							>
								Forgot password?
							</Link>
						</div>

						<Link to={"/"}>
							<button
								type="button"
								className="w-full cursor-pointer p-3 border border-gold rounded-xl hover:bg-gold hover:text-black transition font-bold mb-6"
							>
								{register ? "Register" : "Login"}
							</button>
						</Link>

						{register ? (
							<p className="cursor-pointer text-gray-400 ">
								Already have an account?{" "}
								<Link to={"/login"} className="underline hover:text-white">
									Login
								</Link>{" "}
							</p>
						) : (
							<p className="cursor-pointer text-gray-400 ">
								Dont have an account?{" "}
								<Link to={"/register"} className="underline hover:text-white">
									Register
								</Link>{" "}
							</p>
						)}
					</form>
				</div>
			</div>
		</>
	);
}

export default Auth;
