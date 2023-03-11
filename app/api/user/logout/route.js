import { NextResponse } from "next/server";

export async function GET(req) {
    req.cookies.delete('jwt');
    return Response.json({success:true, message:"Logged out successfully"}, {
        status: 200,
        headers: { 'Set-Cookie': `jwt=None; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT` },
      });
}