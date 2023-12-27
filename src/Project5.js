import React, { useState } from 'react';
export default function Project5() {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    switch (selectedValue) {
      case 'Option 1':
        setMessage('You selected Option One.');
        break;
      case 'Option 2':
        setMessage('Option Two is selected.');
        break;
      case 'Option 3':
        setMessage('Your selected Option is Three.');
        break;
      case 'Option 4':
        setMessage('You choosed Option Four.');
        break;
      default:
        setMessage('');
    }
  };
  return (
    <div>
      <h2>Dropdown Form</h2>
      <form>
        <label>Select an option:</label>
        <select id="options" name="options" onChange={handleOptionChange} value={selectedOption}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
