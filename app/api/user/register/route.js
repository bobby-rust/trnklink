export async function POST(req) {
  const {email, username, password} = await req.json();
  const res = await fetch(`${process.env.API_URL}/user/register`, {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });

    const data = await res.json();

    return Response.json(data);
}
