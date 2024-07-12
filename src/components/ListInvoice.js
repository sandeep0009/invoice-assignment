import React from 'react';

function ListInvoice({ invoiceList, onEditInvoice, onDeleteInvoice, setInvoiceList }) {
  const handleEditChange = (index, field, value) => {
    setInvoiceList((prevList) => {
        const newValue = value | 0
        const updatedList = [...prevList]
        const tempList = [...prevList]
        updatedList[index] = { ...updatedList[index], [field]: value }
        tempList[index] = { ...updatedList[index], [field]: newValue }
        const editedRecord = updatedList[index]
        const tempRecord = tempList[index]
        const amount = parseFloat(tempRecord.price) * parseFloat(tempRecord.quantity)
        const newDiscount = (amount * parseFloat(tempRecord.discountPercentage) / 100).toFixed(2)
        const newTax = (amount * parseFloat(tempRecord.taxPercentage) / 100).toFixed(2)
        const newTotal = (amount - parseFloat(newDiscount) + parseFloat(newTax)).toFixed(2)
        updatedList[index] = {
            ...editedRecord,
            discount: newDiscount,
            tax: newTax,
            total: newTotal,
        }
        return updatedList
    })
  };

  const handleDeleteRecord = (index) => {
    onDeleteInvoice(index);
  };

  return (
    <div className='m-5 overflow-x-auto bg-gray-100 mt-10'>
      <h2 className='text-2xl font-bold mb-4 text-center'>List of Invoices</h2>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-200'>
          <tr>
            <th className='px-6 py-3'>Quantity</th>
            <th className='px-6 py-3'>Price</th>
            <th className='px-6 py-3'>Discount %</th>
            <th className='px-6 py-3'>Discount</th>
            <th className='px-6 py-3'>Tax %</th>
            <th className='px-6 py-3'>Tax</th>
            <th className='px-6 py-3'>Total</th>
            <th className='px-6 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoiceList.map((record, index) => (
            <tr key={index} className='bg-white border-b hover:bg-gray-50'>
              <td className='px-6 py-4'>
                <input
                  type="number"
                  value={record.quantity}
                  onChange={(e) => handleEditChange(index, 'quantity', e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
              </td>
              <td className='px-6 py-4'>
                <input
                  type="number"
                  value={record.price}
                  onChange={(e) => handleEditChange(index, 'price', e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
              </td>
              <td className='px-6 py-4'>
                <input
                  type="number"
                  value={record.discountPercentage}
                  onChange={(e) => handleEditChange(index, 'discountPercentage', e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
              </td>
              <td className='px-6 py-4'>{record.discount}</td>
              <td className='px-6 py-4'>
                <input
                  type="number"
                  value={record.taxPercentage}
                  onChange={(e) => handleEditChange(index, 'taxPercentage', e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
              </td>
              <td className='px-6 py-4'>{record.tax}</td>
              <td className='px-6 py-4'>{record.total}</td>
              <td className='px-6 py-4'>
                <button
                  className='font-medium text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded'
                  onClick={() => handleDeleteRecord(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListInvoice;