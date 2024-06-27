import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import  { CascadeSelect } from 'primereact/cascadeselect';
import { Password } from 'primereact/password';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

/*components */
function SecondButton(){
  
  return (
     <div>
       <Button label="second Button" />
     </div>
    );
}
function DemoAutoComplete(){
  
  const [selectedItem,setSelectedItem]=useState(null);
  const [filteredItem,setFilteredItem]=useState([]);
  const items=["Apple","Banana","Grapes","Mango","Pineapple"];
  
  const searchItems=(event)=>{
    
    setFilteredItem(items.filter((item)=>{
      
      return item.toLowerCase().includes(event.query.toLowerCase())
    }));
  };
  
  return (
    <div>
      <AutoComplete 
      value={selectedItem}
      suggestions={filteredItem}
      completeMethod={searchItems}
      onChange={(e)=>{
        setSelectedItem(e.value);
      }}
      />
    </div>
    );
  
}
function DatePicker(){
  
  const [date,setDate]=useState(null);
  
  return (
     <div>
       <Calendar value={date} onChange={(e)=>{
         setDate(e.value);
       }} />
     </div>
    );
}
function CascadeSelector(){
  
  const [selectedCity,setSelectedCity]=useState(null);
  
  const data =[
    {
      name:'USA',
      code:'US',
      states:[
        {name:'California',cities:[
          {name:'Los Angeles',code:'LA'},
          {name:'San Franscisco',code:'SA'}]},
        ],
    },
    ];
    
    return (
      <div>
        <CascadeSelector
        value={selectedCity}
        options={data}
        optionLabel={'name'}
        optionGroupChildren={['states','cities']}
        placeholder="select a city"
        onChange={(e)=>{
          
          setSelectedCity(e.value);
        }}
        />
      </div>
      );
}
function PasswordBox(){
  
  const [value,setValue]=useState(null);
  
  return (
    <div>
      <Password
      value={value}
      onChange={(e)=>{
        setValue(e.target.value);
      }}
      feedback={false}
      tabIndex={1}
      />
    </div>
    );
}

function App() {


  return (
    <div className="App">
      <PasswordBox />
      
  </div>
  );
}

export default App;