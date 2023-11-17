"use client";
import { getUserData } from "@/utils/QueryFunctions";
import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import SearchBar from "@/components/SearchBar";
import Spinner from "@/components/Spinner";
import Modal from "@/components/Modal";
import { useQuery } from "@tanstack/react-query";

type Props = {};

export interface userDataInterface {
	id: number;
	username: string;
	email: string;
	phone: string;
	birthDate: string;
}

const columns: GridColDef[] = [
	{
		field: "id",
		headerName: "ID",
		width: 100,
	},
	{ field: "username", headerName: "User Name", width: 200 },
	{
		field: "email",
		headerName: "E-Mail",
		width: 250,
	},
	{
		field: "phone",
		headerName: "Phone Number",
		width: 200,
	},
	{
		field: "birthDate",
		headerName: "Date of Birth",
		width: 200,
	},
];

const UserDetailsPage = (props: Props) => {
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
	const [selectedUser, setSelectedUser] = useState<userDataInterface | null>(
		null
	);
	const { data: userData, isLoading: isLoadingUserData } = useQuery({
		queryKey: ["userDetails", 100, 0],
		queryFn: getUserData,
		select(data) {
			return data.users.map((user: any) => {
				return {
					id: user.id,
					username: user.username,
					email: user.email,
					phone: user.phone,
					birthDate: user.birthDate,
				};
			});
		},
	});

	if (isLoadingUserData)
		return (
			<div className="w-full h-full flex justify-center items-center">
				<Spinner />
			</div>
		);

	const filteredData = debouncedSearchTerm
		? userData.filter(
				(user: userDataInterface) =>
					user.username.includes(debouncedSearchTerm) ||
					user.email.includes(debouncedSearchTerm) ||
					user.phone.includes(debouncedSearchTerm) ||
					user.birthDate.includes(debouncedSearchTerm)
		  )
		: userData;

	return (
		<div
			className={`w-full h-full p-10 flex justify-center items-center relative`}>
			{selectedUser && (
				<Modal
					selectedUser={selectedUser}
					setSelectedUser={setSelectedUser}
				/>
			)}
			{selectedUser && (
				<div className="absolute w-full h-full opacity-50 bg-white z-10"></div>
			)}
			<div
				className={`w-full flex flex-col justify-center items-center gap-3`}>
				<SearchBar
					debouncedSearchTerm={debouncedSearchTerm}
					setDebouncedSearchTerm={setDebouncedSearchTerm}
				/>
				<div className="h-[70vh] w-[85%]">
					{!isLoadingUserData && (
						<DataGrid
							aria-label="user details"
							loading={isLoadingUserData}
							className="w-full"
							rows={filteredData}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: { page: 0, pageSize: 10 },
								},
							}}
							pageSizeOptions={[10, 20, 50]}
							// checkboxSelection
							onRowClick={(e) => {
								setSelectedUser(e.row as userDataInterface);
							}}
							disableRowSelectionOnClick
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserDetailsPage;
