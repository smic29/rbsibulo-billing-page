import './BillTo.css'

function BillTo(props) {
    const {
        address,
        setAddress,
        billTo,
        setBillTo,
    } = props;

    return (
        <div>
            <fieldset className='BillTo-fieldset p-2 mb-2 rounded'>
                <legend>Bill To:</legend>
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
        </div>
    )
}

export default BillTo;