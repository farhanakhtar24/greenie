import React from "react";

type Props = {
	children: React.ReactNode;
	extraClass?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BtnPrimary = ({ children, extraClass, ...props }: Props) => {
	return (
		<button
			{...props}
			className={`py-3 px-5 bg-gray-700 text-white rounded-full hover:bg-green-700 transition-all
					ease-linear hover:shadow-2xl duration-75 font-semibold w-full ${extraClass}`}>
			{children}
		</button>
	);
};

export default BtnPrimary;
