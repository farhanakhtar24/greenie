import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
	debouncedSearchTerm: string;
	setDebouncedSearchTerm: any;
};

const SearchBar = ({ debouncedSearchTerm, setDebouncedSearchTerm }: Props) => {
	const [searchTerm, setSearchTerm] = useState("");

	// debounce the search term
	useEffect(() => {
		const debounceId = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 1000);

		return () => {
			clearTimeout(debounceId);
		};
	}, [searchTerm, setDebouncedSearchTerm]);

	return (
		<div className="w-[85%] flex items-center justify-center border p-3 rounded gap-3">
			<CiSearch className="text-xl text-gray-400" />
			<input
				aria-label="search bar"
				placeholder="Search based upon username, email, phone number or birthdate"
				className="w-full outline-none tracking-wide"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
