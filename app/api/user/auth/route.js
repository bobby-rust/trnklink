import { cookies } from "next/headers";

export async function GET(req) {
  if (cookies().get("jwt")) {
    return Response.json({ success: true, message:"" });
  } else {
    return Response.json({ success: false, message:"Auth session ended, please login again"  });
  }
}
