import "../css/formEmployee.css"

const FormEmployee = () => {
    return (
        <div className="containerFormEmployee">

            <div class="contenedorText">
                <p>Add a new Employee</p>
            </div>


            <div className="ctnfemployy">
                <form className="formEmployee form-control">
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="lastname">Last name</label>
                        <input className="form-control" type="text" name="lastname" placeholder="Last namee" required />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="idecard">Identification card</label>
                        <input className="form-control" type="number" name="lastname" placeholder="Identification card"  required/>
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Date of Birth</label>
                        <input className="form-control" type="date" name="date" required />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="phone">Phone</label>
                        <input className="form-control" type="tel" name="phone" placeholder="Phone" required />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="address">Address</label>
                        <input className="form-control" type="address" name="address" placeholder="Address" required />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="rol">Rol</label>
                        <input className="form-control" type="address" name="rol" placeholder="Rol" required />
                    </div>
                    
                    <button className=" btn btn-outline-primary">Add</button>
                    <br />
                    <br />
                    <input className="btn btn-outline-danger" type="reset"></input>
                </form>  
            </div>
        </div>
    )
}

export default FormEmployee;