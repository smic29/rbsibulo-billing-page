import './Billing Form.css'
import { useState } from 'react';
import BillTo from '../Components/BillTo';
import CargoDetails from '../Components/CargoDetails';
import Table from '../Components/Table';
import PrintPreview from '../Modal/PrintPreview';

function BillingForm() {
    const [ items, setItems ] = useState([
        {
            description: '',
            currency: 'PHP',
            unitPrice: 0,
            quantity: 0,
            exchangeRate: 1,
            amount: 0,
            vat: false,
        }
    ])
    const [ billTo, setBillTo ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ pol, setPol ] = useState('');
    const [ pod, setPod ] = useState('');
    const [ voyage, setVoyage ] = useState('');
    const [ bol, setBol ] = useState('');
    const [ eta, setEta ] = useState('');
    const [ jobDes, setJobDes ] = useState('');
    const [ showPrev, setShowPrev ] = useState(false);
    const [ docType, setDocType ] = useState('');

    return(
        <div className='BILLING-FORM-CONTAINER'>
            <div>
                <BillTo billTo={billTo} setBillTo={setBillTo} 
                address={address} setAddress={setAddress} docType={docType}
                setDocType={setDocType}/>
                <CargoDetails 
                pol={pol} setPol={setPol}
                pod={pod} setPod={setPod}
                voyage={voyage} setVoyage={setVoyage}
                bol={bol} setBol={setBol}
                eta={eta} setEta={setEta}
                jobDes={jobDes} setJobDes={setJobDes}/>
                <Table items={items} setItems={setItems}/>
            </div>
            <button onClick={() => setShowPrev(!showPrev)}
            className='publish-button'>Publish</button>
            {showPrev && <PrintPreview 
            items={items} billTo={billTo}
            address={address} pol={pol}
            pod={pod} voyage={voyage} bol={bol} eta={eta} jobDes={jobDes} 
            setShowPrev={setShowPrev} docType={docType}/>}
        </div>
    )
}

export default BillingForm;