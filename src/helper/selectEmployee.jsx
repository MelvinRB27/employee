import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebaseDB"
import { useState } from 'react';

const SelectEmployee = () => {
    const [data, setData] = useState([])
    let rowss = [
        {}
    ]

    const getdata = async () => {
              
        const querySnapshot = await getDocs(collection(db, "EmployeeData"));
        querySnapshot.forEach(doc => {
        rowss.push(doc.data())
    
        setData(rowss)
        });
    
      } 
      getdata()

    var employee = document.getElementById("selectEmployee"); /* Para no tener que llamar a cada rato a getElementById */
    for(let i = 1; i < data.length; i++){
        employee.options[i] = new Option(data[i]["First name"] +" - "+ data[i].id);
    }
}

export default SelectEmployee;