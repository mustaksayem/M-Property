import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";


const useAuth = () => {
   return  useContext(AuthContext);
     
};

export default useAuth;