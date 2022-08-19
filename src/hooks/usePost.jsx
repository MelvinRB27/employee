import axios from  "axios"
import Swal from "sweetalert2"

const PostApi = (data,url) => {
    // var FormData = require('form-data');
    // var data = new FormData();
    // data.append('id', id);
    // data.append('name', name);
    // data.append('last_name', lastName);
    // data.append('date_birth', date_birth);
    // data.append('email', email);
    // data.append('phone', phone);
    // data.append('address', address);
    // data.append('rol', rol) 

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

    axios.post('http://localhost:3000'+url,data)
    .then(function (response) {
        console.log(response);
        successAlert("added successfully")
        if (url === "/users"){
            window.location.href = "/login"
            return
        }
        window.location.href = url
    })
    .catch(function (error) {
        console.log(error);
        errorAlert("Error adding")
    });

}

export default PostApi;