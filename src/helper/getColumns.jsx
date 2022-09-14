const GetColumns = (title) => {

        var columns 
        switch (title) {
            case "/employees":
                columns = 

                [
                    { field: 'id', headerName: 'ID', width: 160 },
                    { field: 'First name', headerName: 'First name', width: 130 },
                    { field: 'Last name', headerName: 'Last name', width: 130 },
                    { field: 'Age', headerName: 'Age', type: 'number', width: 120,},
                    { field: 'Email', headerName: 'Email', width: 160 },
                    { field: 'Phone', headerName: 'Phone',type: 'number', width: 130 },
                    { field: 'Address', headerName: 'Address', width: 130 },
                    { field: 'Rol',headerName: 'Rol',width: 160,},
                ];
                break;

            case "/holidays":
                columns = 

                [
                    { field: 'id', headerName: 'ID', width: 160 },
                    { field: 'Employee', headerName: 'Employee', width: 130 },
                    { field: 'StartingDate', headerName: 'Starting Date', type: 'date', width: 120,},
                    { field: 'EndDate', headerName: 'End Date', type: 'date', width: 160 },
             
                ];
                break;

                case "/payrolls":
                    columns = 
    
                    [
                        { field: 'id', headerName: 'ID', width: 160 },
                        { field: 'Employee', headerName: 'Employee', width: 130 },
                        { field: 'PaymentDate', headerName: 'Payment Date', type: 'date', width: 120,},
                        { field: 'Amount', headerName: 'Amount', type: 'number', width: 120,},
                 
                    ];
                    break;        
            default:
                break;
        }

        return columns
}

export default GetColumns