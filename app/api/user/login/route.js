import { cookies } from "next/headers";

export async function POST(req) {
  const {username, password} = await req.json();
  const res = await fetch(`${process.env.API_URL}/user/login`, {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
      // authorization: `Bearer ${cookies().get("jwt").value}`
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

    const data = await res.json();

    return Response.json(data);
}
  