import './PrintPreview.css';
import letterhead from '../Assets/Letterhead.jpg'
import FormatService from '../Services/Services';

function PrintPreview(props) {
    const {
        items, billTo, address, pol, pod, voyage, bol, eta, jobDes, setShowPrev
    } = props; 

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    const totalAmount = items.reduce((total, item) => 
    total + (item.unitPrice * item.quantity * item.exchangeRate), 0)

    return (
        <div className='overlay'>
            <div className='print-content'>
                <img src={letterhead} className='print-letterhead'/>
                <div className='print-billing-details'>
                    <fieldset>
                        <legend>To</legend>
                        <p>{billTo}</p>
                        <p>{address}</p>
                    </fieldset>
                    <fieldset>
                        <legend>Billing Reference</legend>
                        <p>Date: {`${currentDay}/${currentMonth}/${currentYear}`}</p>
                    </fieldset>
                    <fieldset className='print-cargo-details'>
                        <legend>Cargo Details</legend>
                        <p className='print-pol'>Port of Loading: {pol}</p>
                        <p className='print-pod'>Port of Discharge: {pod}</p>
                        <p className='print-vessel'>Vessel/Voyage: {voyage}</p>
                        <p className='print-bol'>Bill of Lading No: {bol}</p>
                        <p className='print-eta'>ETA: {eta}</p>
                        <p className='print-jobdes'>Job Description: {jobDes}</p>
                    </fieldset>
                    <fieldset className='print-table'>
                        <legend>We are billing you for the following</legend>
                        <table>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Currency</th>
                                    <th>Unit Price</th>
                                    <th>QTY</th>
                                    <th>EX-RATE</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.description}</td>
                                        <td>{item.currency}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.exchangeRate}</td>
                                        <td>
                                            {FormatService.formatCurrency(
                                                item.unitPrice *
                                                item.quantity *
                                                item.exchangeRate
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <div className='print-totalWords'>
                                        {FormatService.wordConvert(totalAmount)}
                                    </div>
                                    <div className='print-subtotal'>
                                        <span>SubTotal :</span>
                                        <strong>
                                        {FormatService.formatCurrency(totalAmount)}
                                        </strong>
                                    </div>
                                </tr>
                            </tfoot>
                        </table>
                    </fieldset>
                </div>
            </div>
            <button className='close-preview'
            onClick={() => setShowPrev(false)}
            >X</button>
        </div>
    )
}

export default PrintPreview;