import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: any) {
	const { email, password, confirmPassword } = await request.json();
	if (!email || !password || !confirmPassword) {
		return new NextResponse("Missing fields", { status: 400 });
	}

	if (password !== confirmPassword) {
		return new NextResponse("Passwords do not match", { status: 400 });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	// Do something with the email and password
	// post it to db

	return NextResponse.json({ email, password, hashedPassword });
}
