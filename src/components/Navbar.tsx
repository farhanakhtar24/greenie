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
		<nav className="w-[15vw] h-full flex flex-col">
			<Image
				aria-label="Greenie Logo"
				src={logo.src}
				alt="logo"
				width={999}
				height={999}
				className="w-full p-3 pt-10"
			/>
			<ul className="px-3 mt-20 flex flex-col gap-4">
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
