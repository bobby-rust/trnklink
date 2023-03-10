export async function logoutUser() {
    window.localStorage.clear();
    document.cookie = "jwt=/"
    window.location.href = "/login";
  }