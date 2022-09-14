import Swal from "sweetalert2"
import { collection, getDocs, query, where, deleteDoc, doc} from "firebase/firestore";
import { db } from "../firebaseDB"

const DeleteEmployee = (id, url) => {
    let docID;

    console.log(id)

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


    const getUser = async () => {
        const q = query(collection(db, url), where("id", "==", id));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            docID = doc.id
        });

        try {
            await deleteDoc(doc(db, url, docID))
            successAlert("row deleted successfully")
        } catch (error) {
            errorAlert("Could not delete, error: " + error)
        }

    }

    getUser()
}
export default DeleteEmployee;