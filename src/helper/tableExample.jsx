import '../css/tableExample.css'
import useApi from '../hooks/useGet'

const TableExample = (url) => {
    const [data, error] = useApi(url)
    // const columns = GetColumns(title)

    let tbdoy = document.getElementById('tbdoyOK')
    
    data.forEach(d => {
        let tr = document.createElement('tr')
        let td = document.createElement('td')

        td.innerText = d.id;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.name;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.last_name;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.date_birth;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.email;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.phone;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.address;
        tr.appendChild(td);

        td = document.createElement('td')
        td.innerText = d.rol;
        tr.appendChild(td);

        tbdoy.appendChild(tr);
    });


    return (
        <table id='tableOK'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Date Birth</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody id='tbdoyOK'>
  
            </tbody>
        </table>
    )
}

export default TableExample;