import React from 'react';
import Input from './Components/input';
import SelectComponent from './Components/select drop down';
import CustomButton from './Components/button';
import CustomIconButton from './Components/iconButton';
import DynamicTable from './Components/dynamic table';
import CustomSwitch from './Components/switch';
// import CustomDatePicker from './components/Datepicker';

const options = [
  { value: 'option1', label: 'LAHORE' },
  { value: 'option2', label: 'SHERSHAH' },
  // Add more options as needed
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  // Add more columns as needed
];

const data = [
  { id: 1, name: 'Ahmed', age: 30 },
  { id: 2, name: 'Usaid', age: 25 },
  // Add more data rows as needed
];

function App() {
  return (
    <div>
      
      <h1>INPUT COMPONENT:</h1>
      <Input  label="Input" />
      <br></br>
     
    <h1>SELECT COMPONENT:</h1>
      <SelectComponent label="Select" options={options} />
      
    <h1>BUTTON COMPONENT:</h1>
      <CustomButton variant="contained" color="primary">
        Button
      </CustomButton>
      <CustomIconButton color="primary">
        {/* Add your icon here */}
      </CustomIconButton>
      <h1>TABLE COMPONENT:</h1>
      <DynamicTable data={data} columns={columns} />
      <CustomSwitch />
      {/* <CustomDatePicker label="Date Picker" /> */}
    </div>
  );
}

export default App;