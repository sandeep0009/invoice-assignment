import React, { useState } from 'react';

function CreateInvoice({ onAddInvoice }) {
  const [formData, setFormData] = useState({
    quantity: '',
    price: '',
    discountPercentage: '',
    discount: '',
    taxPercentage: '',
    tax: '',
    total: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target
    const newValue = value | 0
    // Calculates new values
    const newFormData = { ...formData, [id]: value }
    const tempFormData = { ...formData, [id]: newValue }
    const amount = parseFloat(tempFormData.price) * parseFloat(tempFormData.quantity)
    const newDiscount = (amount * parseFloat(tempFormData.discountPercentage) / 100).toFixed(2)
    const newTax = (amount * parseFloat(tempFormData.taxPercentage) / 100).toFixed(2)
    const newTotal = (amount - parseFloat(newDiscount) + parseFloat(newTax)).toFixed(2)
    // Updates the state
    setFormData({
        ...newFormData,
        discount: newDiscount,
        tax: newTax,
        total: newTotal
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...formData };
    // Add the new record to the list
    onAddInvoice(newRecord);
    // Clear the form fields after submission
    setFormData({
      quantity: '',
      price: '',
      discountPercentage: '',
      discount: '',
      taxPercentage: '',
      tax: '',
      total: '',
    });
  };

  const inputFields = [
    { name: 'quantity', label: 'Quantity', value: formData.quantity },
    { name: 'price', label: 'Price', value: formData.price },
    { name: 'discountPercentage', label: 'Discount %', value: formData.discountPercentage },
    { name: 'discount', label: 'Discount', value: formData.discount },
    { name: 'taxPercentage', label: 'Tax %', value: formData.taxPercentage },
    { name: 'tax', label: 'Tax', value: formData.tax },
    { name: 'total', label: 'Total', value: formData.total },
  ];

  return (
    <form className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 bg-gray-100 mt-5' onSubmit={handleSubmit}>
      <h1 className='col-span-full text-center text-2xl font-bold mb-5'>
        Invoice Form
      </h1>
      {inputFields.map(field => (
        <div key={field.name} className='flex flex-col'>
          <label htmlFor={field.name} className='mb-1 font-medium'>
            {field.label}
          </label>
          <input
            id={field.name}
            className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            type='number'
            value={field.value}
            onChange={handleChange}
          />
        </div>
      ))}
      <div className='col-span-full mt-5 mb-3 text-center'>
        <button onClick={handleSubmit} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500" type="submit">
          Create Invoice
        </button>
      </div>
    </form>
  );
}

export default CreateInvoice;