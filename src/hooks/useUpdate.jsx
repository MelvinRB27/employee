import axios from "axios";
import Swal from "sweetalert2"

const UpdateEmployee = (url, id, dt) => {

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

    axios.put("http://localhost:3000"+url+"/"+id, dt)
    .then(({data}) => {
        console.log(data)
        successAlert("Row updated successfully")
        window.location.href = url
    })
    .catch((e) => {
        console.log(e)
        errorAlert("Error updating row")
        window.location.href = "/"
    })
}
export default UpdateEmployee;