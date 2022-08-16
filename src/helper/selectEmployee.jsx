import useApi from '../hooks/useGet'

const SelectEmployee = (url) => {
    const [data, error] = useApi(url)

    if (error){
        return console.error(error)
    }

    var employee = document.getElementById("selectEmployee"); /* Para no tener que llamar a cada rato a getElementById */
    for(let i=0; i<data.length; i++){
        employee.options[i] = new Option(data[i].employee +"-"+ data[i].id_employee);
    }
}

export default SelectEmployee;