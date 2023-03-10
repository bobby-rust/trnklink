export async function GET(request) {
    try {
      return fetch(`${process.env.REACT_APP_SERVER_URL}/user/register`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "./login";
          } else {
            throw Error(data.message);
          }
        })
        .catch((err) => {
          return Response.json({
            success: false,
          });
        });
    } catch (err) {
      return Response.json({
        success: false,
      });
    }
  }
  
  export async function POST(request) {
    return new Response("Hello, Next.js! POST");
  }
  