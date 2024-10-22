import { NextRequest, NextResponse } from "next/server";
import Link from "@/models/Link";
import dbConnect from "@/db/dbConnect";

export async function POST(req: NextRequest) {
    try {
        await dbConnect()
        const { longURL } = await req.json();
        const shortURL = Math.random().toString(36).substring(2, 5);
        const newLink = new Link({ longURL, shortURL });
        await newLink.save();

        return NextResponse.json({ longURL, shortURL });
    } catch (error) {
        console.error("Error en la solicitud POST:", error);

        return NextResponse.json(
            { error: "Ocurrió un error al procesar la solicitud." },
            { status: 500 }
        );
    }
}