import "../css/formPayroll.css"

const FormPayroll = () => {
    return (
        <div className="containerFormHoliday">

            <div class="contenedorText">
                <p>Set payment</p>
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
                        <label className="form-control-label" htmlFor="date">Select the payment day</label>
                        <input className="form-control" type="date" name="date" required />
                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Lot</label>
                        <input className="form-control" type="number" name="date" placeholder="Lot" required />
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

export default FormPayroll;