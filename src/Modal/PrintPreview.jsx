import './PrintPreview.css';
import letterhead from '../Assets/Letterhead.jpg'
import FormatService from '../Services/Services';
import html2pdf from 'html2pdf.js';

function PrintPreview(props) {
    const {
        items, billTo, address, pol, pod, voyage, bol, eta, jobDes, setShowPrev,
        docType
    } = props; 

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    const totalAmount = items.reduce((total, item) => 
    total + (item.unitPrice * item.quantity * item.exchangeRate), 0)

    const fileName = `${docType.slice(0,1).toUpperCase()}${currentYear.toString().slice(-2)}${currentMonth}${currentDay}-${billTo.slice(0,2).split('').map((char) => {
        return char.charCodeAt(0);
    }).join('')}`

    const downloadPDF = () => {
        const content = document.getElementById('printfile');
        const pdfOptions = {
            margin: 0,
            filename: `${fileName}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };

        html2pdf().from(content)
        .set(pdfOptions)
        .save();
    }

    return (
        <div className='overlay'>
            <div className='print-content' id='printfile'>
                <img src={letterhead} className='print-letterhead'/>
                <h1 className='ms-2 mt-3'>{docType !== '' ? docType.toUpperCase() : 'form'}</h1>
                <div className='print-billing-details'>
                    <fieldset>
                        <legend>To</legend>
                        <p>{billTo}</p>
                        <p>{address}</p>
                    </fieldset>
                    <fieldset>
                        <legend>Reference</legend>
                        <p>Date: {`${currentDay}/${currentMonth}/${currentYear}`}</p>
                        <p>Reference No: {fileName}</p>
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
                        <table className='table-height'>
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
                                    <tr className='text-center' key={index}>
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
                                        {totalAmount === 0 ?
                                        '': FormatService.wordConvert(totalAmount)}
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
                            <small>
                                <strong>
                                    This is not valid for input tax claim
                                </strong>
                            </small>
                    </fieldset>
                </div>
            </div>
            <button className='close-preview btn btn-danger'
            onClick={() => setShowPrev(false)}
            >&times;</button>
            <button className='print-page-button btn btn-primary'
            onClick={downloadPDF}>
                Save as PDF
            </button>
        </div>
    )
}

export default PrintPreview;