import axios from "axios";
import Swal from "sweetalert2"

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
    const getBooks = async() =>{
        await axios.get("http://localhost:3000/users")
        .then(({data}) => { 
            let i;
            let emailUser;

            for (i = 0; i < data.length; i++){
                if (data[i].email === loginData.email) {
                    emailUser = data[i]

                }else if (loginData.email !== data[i].email && loginData.email.length > 0) {
                    errorAlert("User not found")

                }else if(loginData.email === "") {
                    errorAlert("fill in the missing data")
                }
            }

            if (emailUser.email === loginData.email && emailUser.password === loginData.password) {
                window.localStorage.setItem("loginData", JSON.stringify(data[i]))
                successAlert("Successfully logged in")
                window.location.href = '/'

            }else if (emailUser.email === loginData.email && emailUser.password !== loginData.password) {
                errorAlert("Incorrect password")

            }

        })
        .catch((e) => console.log(e))
    }
    getBooks()

}
export default GetLogin;