import FormHolidays from "../components/formHolidays"
import FormPayroll from "../components/formPayroll"
import FormEmployee from "../components/formEmployee"

const UpdateData = (url, id) => {
    var component;

    if (url === "/employees"){
        component = FormEmployee
    }else if (url === "/holidays"){
        component = FormHolidays
    } else if (url === "/payrolls"){
        component = FormPayroll
    }

    return(
        <component />
    )
    
}

export default UpdateData;