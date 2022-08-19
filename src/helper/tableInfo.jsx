import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import {Link} from 'react-router-dom'

import '../css/tableInfo.css'
import GetColumns from '../helper/getColumns'
import useApi from '../hooks/useGet'
import DeleteEmployee from '../hooks/useDelete';

const DataTable = ({ url, title }) => {
  const [data, error] = useApi(url)
  const columns = GetColumns(title)
  const rows = data

  var idRow; 
  if (error) {
    return console.error(error)
  }

  const handleOnCellClick = (ok) => {
    idRow = ok.row.id
  }

  const deleteRow = () => {
    DeleteEmployee(title, idRow)
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
