import axios from "axios";

export const getUserData = async ({ queryKey }: any) => {
	const limit = queryKey[1];
	const skip = queryKey[2];
	const { data } = await axios.get(
		`https://dummyjson.com/users?limit=${limit}&skip=${skip}`
	);
	return data;
};
