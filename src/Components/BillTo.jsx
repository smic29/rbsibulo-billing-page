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
            <fieldset className='BillTo-fieldset'>
                <legend>Bill To:</legend>
                <label>
                    <span>Company Name:</span> 
                    <input type='text'
                    value={billTo}
                    onChange={(e) => setBillTo(e.target.value)}/>
                </label>
                <label>
                    <span>Address:</span> 
                    <textarea
                    cols={50}
                    rows={3} 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </label>
            </fieldset>
        </div>
    )
}

export default BillTo;