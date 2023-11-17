import { userDataInterface } from "@/app/pages/UserDetailsPage";
import React from "react";
import { ImCross as Cross } from "react-icons/im";

type Props = {
	selectedUser: userDataInterface;
	setSelectedUser: any;
};

const Modal = ({ selectedUser, setSelectedUser }: Props) => {
	const { id, email, birthDate, phone, username } = selectedUser;
	return (
		<div className="absolute bg-white w-4/5 h-[70vh] border rounded shadow-2xl z-20">
			<div className="relative w-full h-full p-5 flex flex-col gap-5">
				<Cross
					className="absolute -top-2 -right-2 bg-gray-400 text-xl p-1 rounded-full cursor-pointer"
					onClick={() => setSelectedUser(null)}
				/>
				<h1 className="font-bold text-2xl uppercase ">User report</h1>
				<ul className="w-full h-full sm:text-xl flex flex-col gap-2">
					<li className="flex ">
						<span className="w-2/6 sm:w-1/5 font-semibold">Id</span>
						<span className="sm:w-10">:</span>
						<span className="sm:w-2/5">{id}</span>
					</li>
					<li className="flex">
						<span className="w-2/6 sm:w-1/5 font-semibold">
							Username
						</span>
						<span className="sm:w-10">:</span>
						<span className="sm:w-2/5">{username}</span>
					</li>
					<li className="flex flex-wrap">
						<span className="w-2/6 sm:w-1/5 font-semibold">
							E-Mail
						</span>
						<span className="sm:w-10">:</span>
						<span className="sm:w-2/5">{email}</span>
					</li>
					<li className="flex">
						<span className="w-2/6 sm:w-1/5 font-semibold">
							Phone
						</span>
						<span className="sm:w-10">:</span>
						<span className="sm:w-2/5">{phone}</span>
					</li>
					<li className="flex">
						<span className="w-2/6 sm:w-1/5 font-semibold">
							Birthdate
						</span>
						<span className="sm:w-10">:</span>
						<span className="sm:w-2/5">{birthDate}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Modal;
