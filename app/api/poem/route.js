import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Poem from "../schemas/poem";
import dotenv from "dotenv";
import connectToDatabase from "../db";


dotenv.config();

await connectToDatabase();

export async function POST(request) {
    const { title, body, password } = await request.json();

    if (!title || !body || !password) {
        return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    if (password !== process.env.PASSWORD) {
        return NextResponse.json({ error: "Invalid password!" }, { status: 401 });
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const newPoem = new Poem({
        title,
        body,
        slug
    });

    try {
        await newPoem.save();
        return NextResponse.json({ message: "Poem added successfully!" });
    } catch (error) {
        return NextResponse.json({ error}, { status: 500 });
    }
}

export async function GET(request) {
    const poems = await Poem.find().sort({ date: -1 });
    return NextResponse.json(poems);
}
