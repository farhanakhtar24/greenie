"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/Greenie Logo.png";
import Link from "next/link";
import BtnPrimary from "./BtnPrimary";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
	const path = usePathname()?.slice(1);

	return (
		<nav className="w-full sm:w-[15vw] sm:h-full flex sm:flex-col p-2 sm:p-0">
			<Image
				aria-label="Greenie Logo"
				src={logo.src}
				alt="logo"
				width={999}
				height={999}
				className="sm:w-full w-1/3 sm:p-3 sm:pt-10 object-contain"
			/>
			<ul className="px-3 sm:mt-20 flex sm:flex-col gap-4">
				<Link href="/userDetails">
					<li>
						<BtnPrimary
							aria-label="user details"
							extraClass={`text-start ${
								path === "userDetails" ? "bg-green-500" : ""
							}`}>
							User Details
						</BtnPrimary>
					</li>
				</Link>
				<Link href="/">
					<li>
						<BtnPrimary
							aria-label="account creation"
							extraClass={`text-start ${
								path === "" ? "bg-green-500" : ""
							}`}>
							Create Account
						</BtnPrimary>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
