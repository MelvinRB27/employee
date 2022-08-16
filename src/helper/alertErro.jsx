import Swal from "sweetalert2"
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react"

const AlertError = (msj, login) => {
    let redirect = useNavigate()

    const errorAlert = () =>{
    
        Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: msj,
        })
        
    }    
    errorAlert()
    useEffect(() => {
        if (login){
            redirect('/login')
        } else redirect('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);
    
        
}

export default AlertError;