import { toast } from "react-hot-toast";

export default async function verifyLoginStatus() {
    return await fetch("/api/user/auth", {method:"GET"}).then((res) => res.json()).then((data) => {
        if(data.success){
        //   toast.success(data.message);
        } else {
          toast.error(data.message);
          // window.location.href = "/login";
        } 
      });
    }