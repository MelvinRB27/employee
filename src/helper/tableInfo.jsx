import {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

import '../css/tableInfo.css'
import GetColumns from '../helper/getColumns'
import DeleteEmployee from '../hooks/useDelete';

import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebaseDB"

const DataTable = ({ url, title }) => {
  // const [data, error] = useApi(url)
  const columns = GetColumns(title)
  const [rows, setRows] = useState([])
  const [idRow, setIdRow] = useState("")

  
  let rowss = []

  const getdata = async () => {
              
    const querySnapshot = await getDocs(collection(db, url));
    querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    rowss.push(doc.data())

    setRows(rowss)
        // console.log(doc._document.data.value.mapValue.fields)
    });

  } 
  getdata()


  const handleOnCellClick = (ok) => {
    setIdRow(ok.row.id)
  }

  const deleteRow = () => {
    DeleteEmployee(idRow, url)
  }

  return (
    <div className='btnChanges'>
      <div className='containerDataGrid'>
        <DataGrid

          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onCellClick={handleOnCellClick}
          sx={{
            color: 'black',
            background:"white",
          }}
          button
        />
        <br/>

        <div>
          <button className="btn btn-danger" onClick={() => deleteRow()}>Delete</button>
          {/* <li className="btn btn-success"><Link className="nav-link" to="/">Update</Link></li> */}
        </div>
      </div>
    </div>
  );


}

export default DataTable;
