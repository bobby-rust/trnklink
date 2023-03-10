export async function registerUser({
    email,
    username,
    password,
  }) {
  
    try {
      
      return fetch(`${process.env.API_URL}/user/register`, {
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
          return {
            success: false,
            message: err.message
          };
        });
    } catch (err) {
      return {
        success: false,
        message: err.message
      };
    }
  }