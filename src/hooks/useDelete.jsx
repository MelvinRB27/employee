import axios from "axios";
import Swal from "sweetalert2"

const DeleteEmployee = (url, id) => {

    const errorAlert = (msj) =>{
    
        Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: msj,
        })
        
    }    
    const successAlert = (msj) =>{
        Swal.fire({
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          timer: 1500
        })
    }   

    axios.delete("http://localhost:3000"+url+"/"+id)
    .then(({data}) => {
        console.log(data)
        successAlert("Row deleted successfully")
        window.location.href = url
    })
    .catch((e) => {
        console.log(e)
        errorAlert("Error deleting row")
        window.location.href = "/"
    })
}
export default DeleteEmployee;