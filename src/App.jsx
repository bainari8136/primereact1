import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import  { CascadeSelect } from 'primereact/cascadeselect';
import { Password } from 'primereact/password';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
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
function CardExample(){
  
  const header=(
    <img alt="Card" src="https://placehold.jp/12/3d4070/ffffff/150x150.png?text=hello%20world%20&css=%7B%22border-radius%22%3A%2215px%22%2C%22background%22%3A%22%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23666666)%2C%20to(%23cccccc))%22%7D" />
    
    );
  const footer=(
    <span>
      <button className="p-button p-component p-button-primary">
        Read more
      </button>
    </span>
    );
    
    return (
      <div>
        <Card
        title="Card Demo"
  
        footer={footer}
        >
          <p className="m-0">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ex dolor. Donec in enim ullamcorper, laoreet tortor at, auctor nibh. Mauris vel dignissim sapien, non elementum urna. Pellentesque commodo dui justo, eu blandit nulla posuere volutpat. Morbi quis nisi sed lorem accumsan imperdiet quis et nisl. Maecenas venenatis lorem ut tellus lacinia accumsan. Suspendisse et lacinia ante. Donec vitae vehicula libero.

In ipsum enim, porttitor a ultricies eget, volutpat vitae erat. Duis et leo ut orci lobortis dictum. Duis eu ex non nisl pellentesque finibus. Donec ut dui et arcu efficitur vestibulum. Aliquam dictum facilisis magna, et pretium magna viverra ac. Ut dapibus augue eu massa venenatis rutrum. Nullam placerat dolor augue, vitae suscipit urna sollicitudin sed. Duis quis neque nec orci egestas feugiat.
          </p>
        </Card>
      </div>
      );
}

function App() {


  return (
    <div className="App">
      <CardExample />
      
  </div>
  );
}

export default App;