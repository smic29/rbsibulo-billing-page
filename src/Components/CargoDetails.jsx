import './CargoDetails.css'

function CargoDetails(props) {
    const {
        pol, setPol,
        pod, setPod,
        voyage, setVoyage,
        bol, setBol,
        eta, setEta,
        jobDes, setJobDes,
    } = props; 

    return (
        <div className='container-fluid'>
            <fieldset className='rounded'>
                <legend>Cargo Details</legend>
                <div className="row">
                        <div className="col-6">
                                <div className='form-floating'>
                                        <input type='text'
                                        className='form-control'
                                        id='pol'
                                        placeholder='' 
                                        value={pol}
                                        onChange={(e) => setPol(e.target.value)}/>
                                        <label htmlFor='pol'>Port of Loading: </label>
                                </div>
                        </div>
                        <div className="col-6">
                                <div className='form-floating'>
                                        <input type='text' 
                                        className='form-control'
                                        id='pod'
                                        placeholder=''
                                        value={pod}
                                        onChange={(e) => setPod(e.target.value)}/>
                                        <label htmlFor='pod'>Port of Discharge: </label>
                                </div>
                        </div>
                </div>
                <div className="row my-3 align-items-center">
                        <div className="col-9">
                                <div className='form-floating'>
                                        <input type='text'
                                        className='form-control'
                                        id='voyage'
                                        placeholder='' 
                                        value={voyage}
                                        onChange={(e) => setVoyage(e.target.value)}/>
                                        <label htmlFor='voyage'>Vessel / Voyage</label>
                                </div>
                                <div className='form-floating'>
                                        <input type='text'
                                        className='form-control'
                                        id='bol'
                                        placeholder=''
                                        value={bol}
                                        onChange={(e) => setBol(e.target.value)} />
                                        <label htmlFor='bol'>Bill of Lading No.</label>
                                </div>
                        </div>
                        <div className="col-3">
                                <div className='form-floating'>
                                        <input type='date'
                                        className='form-control'
                                        id='eta'
                                        value={eta}
                                        onChange={(e) => setEta(e.target.value)}/>
                                        <label htmlFor='eta'>ETA</label>
                                </div>
                        </div>
                </div>
                <div className='form-floating'>
                        <textarea 
                        className='form-control'
                        id='jobDes'
                        placeholder=''
                        value={jobDes}
                        onChange={(e) => setJobDes(e.target.value)}
                        />
                        <label htmlFor='jobDes'>Job Description</label>
                </div>
            </fieldset>
        </div>
    )
}

export default CargoDetails;