
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

  export async function GET(req) {
    let response = NextResponse.next();
    // Set a cookie to hide the banner
    response.cookies.set('show-banner', 'false');
    // Response will have a `Set-Cookie:show-banner=false;path=/home` header
    return response;
    const cookieStore = cookies();
    const token = cookieStore.get('jwt');
    console.log(token.value);
    return Response.json({cookie: token})
    // window.localStorage.clear();
    // return redirect("/login");
  }
