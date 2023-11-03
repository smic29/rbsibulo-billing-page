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
        <div>
            <fieldset className='CargoDetails-fieldset'>
                <legend>Cargo Details</legend>
                <div className='CargoDetails-pol'>
                        <span>Port of Loading: </span>
                        <input type='text' 
                        value={pol}
                        onChange={(e) => setPol(e.target.value)}/>
                </div>
                <div className='CargoDetails-pod'>
                        <span>Port of Discharge: </span>
                        <input type='text' 
                        value={pod}
                        onChange={(e) => setPod(e.target.value)}/>
                </div>
                <div className='CargoDetails-voyage'>
                        <span>Vessel / Voyage</span>
                        <input type='text' 
                        value={voyage}
                        onChange={(e) => setVoyage(e.target.value)}/>
                </div>
                <div className='CargoDetails-bol'>
                        <span>Bill of Lading No.</span>
                        <input type='text'
                        value={bol}
                        onChange={(e) => setBol(e.target.value)} />
                </div>
                <div className='CargoDetails-eta'>
                        <span>ETA</span>
                        <input type='text' 
                        value={eta}
                        onChange={(e) => setEta(e.target.value)}/>
                </div>
                <div className='CargoDetails-jobDescription'>
                        <span>Job Description</span>
                        <textarea 
                        rows={1}
                        value={jobDes}
                        onChange={(e) => setJobDes(e.target.value)}
                        />
                </div>
            </fieldset>
        </div>
    )
}

export default CargoDetails;