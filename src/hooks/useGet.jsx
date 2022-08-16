import axios from "axios";
import { useEffect, useState } from "react";

const GetEmployee = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect( () => {
        const getBooks = async() =>{
            await axios.get("http://localhost:3000"+url)
            .then(({data}) => setData(data))
            .catch((e) => setError(e))
        }
        getBooks()
    }, [url]) //reload when url change
    return [data, error] //return data and error

}
export default GetEmployee;