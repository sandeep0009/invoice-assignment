import React,{useState} from 'react'
import CreateInvoice from '../components/CreateInvoice'
import ListInvoice from '../components/ListInvoice'

const InvoiceManage = () => {
    const [invoiceList, setInvoiceList] = useState([]);

    const handleAddInvoice = (newRecord) => {
      setInvoiceList((prevList) => [...prevList, newRecord]);
    };
  
    const handleEditInvoice = (index, updatedRecord) => {
      setInvoiceList((prevList) => {
        const newList = [...prevList];
        newList[index] = updatedRecord;
        return newList;
      });
    };
  
    const handleDeleteInvoice = (index) => {
      setInvoiceList((prevList) => prevList.filter((_, i) => i !== index));
    };
  return (
    <div>
         <CreateInvoice onAddInvoice={handleAddInvoice} />
      <ListInvoice
        invoiceList={invoiceList}
        onEditInvoice={handleEditInvoice}
        setInvoiceList={setInvoiceList}
        onDeleteInvoice={handleDeleteInvoice}
      />
    </div>
  )
}

export default InvoiceManage