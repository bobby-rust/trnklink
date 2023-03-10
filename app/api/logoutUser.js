export async function logoutUser() {
    window.localStorage.clear();
    window.location.href = "./login";
  }