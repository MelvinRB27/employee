const GetColumns = (title) => {

        var columns 
        switch (title) {
            case "/employees":
                columns = 

                [
                    { field: 'id', headerName: 'ID', width: 160 },
                    { field: 'name', headerName: 'First name', width: 130 },
                    { field: 'last_name', headerName: 'Last name', width: 130 },
                    { field: 'date_birth', headerName: 'Age', type: 'number', width: 120,},
                    { field: 'email', headerName: 'Email', width: 160 },
                    { field: 'phone', headerName: 'Phone',type: 'number', width: 130 },
                    { field: 'address', headerName: 'Address', width: 130 },
                    { field: 'rol',headerName: 'Rol',width: 160,},
                ];
                break;

            case "/holidays":
                columns = 

                [
                    { field: 'id', headerName: 'ID', width: 160 },
                    { field: 'employee', headerName: 'Employee', width: 130 },
                    { field: 'id_employee', headerName: 'ID Employee', width: 130 },
                    { field: 'starting_date', headerName: 'Starting Date', type: 'date', width: 120,},
                    { field: 'end_date', headerName: 'End Date', type: 'date', width: 160 },
             
                ];
                break;

                case "/payrolls":
                    columns = 
    
                    [
                        { field: 'id', headerName: 'ID', width: 160 },
                        { field: 'employee', headerName: 'Employee', width: 130 },
                        { field: 'id_employee', headerName: 'ID Employee', width: 130 },
                        { field: 'payment_date', headerName: 'Payment Date', type: 'date', width: 120,},
                        { field: 'amount', headerName: 'Amount', type: 'number', width: 120,},
                 
                    ];
                    break;        
            default:
                break;
        }

        return columns
}

export default GetColumns