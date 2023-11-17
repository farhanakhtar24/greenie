"use client";
import React from "react";
import { queryClient } from "./QueryClient";
import { QueryClientProvider } from "react-query";

type Props = {
	children: React.ReactNode;
};

const ReactQueryContext = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default ReactQueryContext;
