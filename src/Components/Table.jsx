import { useState } from 'react';
import './Table.css'
import FormatService from '../Services/Services';

function Table(props) {
    const { items, setItems } = props;

    const totalAmount = items.reduce((total, item) => 
    total + (item.unitPrice * item.quantity * (item.currency === 'PHP' ? 1 : item.exchangeRate)), 0)

    const addRow = () => {
        setItems([...items, { 
            description: '',
            currency: 'PHP',
            unitPrice: 0,
            quantity: 0,
            exchangeRate: 1,
            amount: 0,
            vat: false,
        }])
    }

    const delRow = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }
    return (
        <div className='table-responsive'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col' >Description</th>
                        <th scope='col'>Currency</th>
                        <th scope='col'>Unit Price</th>
                        <th scope='col'>QTY</th>
                        <th scope='col'>Ex-Rate</th>
                        <th scope='col'>Amount</th>
                        <th scope='col' className='vat' >VAT</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <div className='tr-dataEntry text-center d-flex align-items-center'
                        key={index}>
                        <span class="material-symbols-outlined del-btn"
                        onClick={() => delRow(index)}>
                            delete
                        </span>
                        <tr className='table-data-rows'>
                            <td>
                                <input 
                                type='text'
                                className='form-control-sm'
                                value={item.description}
                                onChange={(e) => {
                                    const newItems = [...items];
                                    newItems[index].description = e.target.value;
                                    setItems(newItems);
                                }}/>
                            </td>
                            <td>
                                <select
                                className='form-control-sm'
                                value={item.currency}
                                onChange={(e) => {
                                    const newItems = [...items];
                                    newItems[index].currency = e.target.value;
                                    setItems(newItems)
                                }}>
                                    <option value='USD'>USD</option>
                                    <option value='PHP'>PHP</option>
                                </select>
                            </td>
                            <td>
                                <input 
                                type='number'
                                className='form-control-sm text-center unit-price'
                                min={0}
                                value={item.unitPrice}
                                onChange={(e) => {
                                    const newItems = [...items];
                                    newItems[index].unitPrice = parseFloat(e.target.value) ? parseFloat(e.target.value) : 0
                                    setItems(newItems)
                                }}/>
                            </td>
                            <td>
                                <input 
                                type='number'
                                value={item.quantity}
                                className='form-control-sm text-center qty'
                                onChange={(e) => {
                                    const newItems = [...items];
                                    newItems[index].quantity = parseFloat(e.target.value) ? parseFloat(e.target.value) : 0
                                    setItems(newItems)
                                }}/>
                            </td>
                            <td>
                                <input 
                                type='number'
                                value={item.currency === 'PHP' ? 1 : item.exchangeRate}
                                className='form-control-sm text-center ex-rate'
                                disabled={item.currency === 'PHP'}
                                onChange={(e) => {
                                    const newItems = [...items];
                                    newItems[index].exchangeRate = 
                                    item.currency === 'PHP' ? 1 : parseFloat(e.target.value) ? parseFloat(e.target.value) : 1 
                                    setItems(newItems)
                                }}/>
                            </td>
                            <td className='d-flex align-items-center justify-content-center'>
                                {FormatService.formatCurrency(
                                    item.unitPrice * item.quantity * (item.currency === 'PHP' ? 1 : item.exchangeRate),
                                    )}
                            </td>
                            <td className='vat'>
                                <input 
                                type='checkbox'
                                checked={item.vat}
                                className='vat'
                                onChange={(e) => {
                                    const newItems = [...items];
                                    newItems[index].vat = e.target.checked
                                    setItems(newItems)
                                }}/>
                            </td>
                        </tr>
                        </div>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {totalAmount === 0 ? '' : 
                        <div className='total-words'>
                            {FormatService.wordConvert(totalAmount)}
                        </div>}
                        <div className='total'>
                        <span>Sub Total</span>
                        <span className='total-focus'
                        >{FormatService.formatCurrency(totalAmount)}</span>
                        </div>
                    </tr>
                    <tr>
                        <span className='add-row'
                        onClick={addRow}>Add Row</span>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table;