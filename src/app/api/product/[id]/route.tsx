import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Fetch product by ID
export async function GET(_: Request, { params }: { params: { id: string } }) {
    try {
        const filePath = path.join(process.cwd(), "public", "json/products.json");
        const jsonData = await fs.readFile(filePath, "utf-8");
        const products = JSON.parse(jsonData).product;

        const product = products.find((p: { id: string }) => p.id === params.id);

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error loading product data:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
