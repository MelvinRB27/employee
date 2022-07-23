import "../css/formHolidays.css"

const FormHolidays = () => {
    return (
        <div className="containerFormHoliday">

            <div class="contenedorText">
                <p>assign vacation to an employee</p>
            </div>


            <div className="ctnfholiday">
                <form className="formHoliday form-control">
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="name">Selec employee</label>

                        <select className="form-select">
                            <option value="?"> Select a employee </option>
                        </select>

                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Selec the starting day</label>
                        <input className="form-control" type="date" name="date" required />
                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Selec the end day</label>
                        <input className="form-control" type="date" name="date" required />
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

export default FormHolidays;