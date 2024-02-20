import './BillTo.css'

function BillTo(props) {
    const {
        address,
        setAddress,
        billTo,
        setBillTo,
        setDocType,
    } = props;

    const handleSelect = (e) => {
        setDocType(e.target.value);
    }

    return (
        <div className='container-fluid'>
            <div className="row g-0">
                <fieldset className='BillTo-fieldset p-2 mb-2 rounded col-6 box-shadow'>
                    <legend>Bill To</legend>
                    <div className="form-floating mb-3">
                        <input type='text'
                        className='form-control'
                        id='companyName'
                        placeholder=''
                        value={billTo}
                        onChange={(e) => setBillTo(e.target.value)}/>
                        <label htmlFor='companyName'>Company Name</label>
                    </div>
                    <div className="form-floating">
                        <textarea
                        className='form-control'
                        placeholder=''
                        id='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                        <label htmlFor='address'>Address</label>
                    </div>
                </fieldset>
                <fieldset className='p-2 mb-2 ms-4 rounded col-5 box-shadow'>
                    <legend>Document Details</legend>
                    <select className='form-select text-center'
                    onChange={handleSelect}>
                        <option selected disabled>Select Document Type</option>
                        <option value={'quotation'}>Quotation</option>
                        <option value={'billing'}>Billing</option>
                        <option value={'statement of account'}>Statement of Account</option>
                    </select>
                </fieldset>
            </div>
        </div>
    )
}

export default BillTo;