import Swal from "sweetalert2"
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react"

const AlertSuccess = (msj, uri) => {
    let redirect = useNavigate()

    const successAlert = () =>{
        Swal.fire({
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          timer: 1500
        })
    }    
    successAlert()
    useEffect(() => {
        if (uri){
            redirect(uri)
        } else redirect('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uri]);
    
}

export default AlertSuccess;