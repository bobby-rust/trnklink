export async function logoutUser() {
    window.localStorage.clear();
    document.cookie.clear();
    window.location.href = "/login";
  }