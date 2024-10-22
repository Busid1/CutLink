import { redirect } from "next/navigation";
import dbConnect from "@/db/dbConnect";
import Link from "@/models/Link";

export default async function ShortIdPage({ params }: { params: { shortId: string } }) {
    await dbConnect();
    const data = await Link.findOne({ shortURL: params.shortId });

    if (!data) {
        redirect("/");
    }

    redirect(data.longURL);
}