import Swal from "sweetalert2"
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebaseDB"

const GetLogin = (loginData) => {

    const successAlert = (msj) =>{
        Swal.fire({
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          timer: 1500
        })
    }    

    const errorAlert = (msj) =>{
    
        Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: msj,
        })
    }

    const getUser = async () => {

        const q = query(collection(db, "RegisterUser"), where("Email", "==", loginData.Email));        
        const querySnapshot = await getDocs(q);

        if (querySnapshot.docs.length === 0) {
            errorAlert("This user not exists");
            return
        }
        
        querySnapshot.forEach((doc) => {
            
            if(doc.data().Password === loginData.Password) {
                window.localStorage.setItem("loginData", JSON.stringify(doc.data()))
                successAlert("Successfully logged in")
                window.location.href = '/' 
                return
            }

            errorAlert("password is incorrect")
        })
    }
    
    getUser()

}
export default GetLogin;