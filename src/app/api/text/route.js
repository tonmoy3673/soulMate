import { NextResponse } from "next/server"
export async function GET(request) {
    return NextResponse.json( { data: ['text', 'body'] },{ status: 200 });
}