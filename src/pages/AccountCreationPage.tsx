"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/Greenie Logo.png";
import BtnPrimary from "@/components/BtnPrimary";
import toast from "react-hot-toast";
import axios from "axios";

type Props = {};

const AccountCreationPage = (props: Props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		try {
			const response = await axios.post("/api/register", {
				email,
				password,
				confirmPassword,
			});
			toast.success("Account created successfully");
		} catch (error) {
			toast.error("Error creating account");
		}
	};

	return (
		<div className="flex w-full h-full">
			<div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Image
						aria-label="Greenie Logo"
						src={logo.src}
						alt="Workflow"
						width={999}
						height={999}
					/>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						aria-label="Account Creation Form"
						className="space-y-6"
						method="POST"
						onSubmit={handleSubmit}>
						<div>
							<label
								aria-label="email address"
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									aria-label="email address input"
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
									ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
									focus:ring-inset focus:ring-lime-200 px-2 outline-none sm:text-sm sm:leading-6"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									aria-label="password"
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									aria-label="password input"
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
									ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
									focus:ring-lime-200 px-2 outline-none sm:text-sm sm:leading-6"
									onChange={(e) =>
										setPassword(e.target.value)
									}
									value={password}
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									aria-label="confirm password"
									htmlFor="confirm-password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Confirm Password
								</label>
							</div>
							<div className="mt-2">
								<input
									aria-label="confirm password input"
									id="confirm-password"
									name="confirm-password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
									ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
									focus:ring-inset focus:ring-lime-200 px-2 outline-none sm:text-sm sm:leading-6"
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
									value={confirmPassword}
								/>
							</div>
						</div>
						<div>
							<BtnPrimary
								type="submit"
								aria-label="Create Account Button">
								Create Account
							</BtnPrimary>
						</div>
					</form>
				</div>
			</div>
			<div className="w-[15vw] hidden sm:block"></div>
		</div>
	);
};

export default AccountCreationPage;
