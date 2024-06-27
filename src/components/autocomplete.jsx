import React, {useState} from 'react';
import {AutoComplete} from 'primereact/autocomplete';

const PrAutocomplete=()=>{
  
  const [selectedItem,setSelectedItem]=useState(null);
  const [filteredItems,setFilteredItems]=useState([]);
  
  const items=["Apple","Banana","Orange","Mango","Pineapple","Grapes"];
  
  const searchItems=(event)=>{
    
    setFilteredItems(items.filter((item)=>{
        return item.toLowerCase().includes(event.query.toLowerCase());
    }));
    
  };
  
  return (
    <div>
      <h2>autocomplete example</h2>
      <AutoComplete
      value={selectedItem}
      suggestion={filteredItems}
      completeMethod={searchItems}
      field="name"
      onChange={(e)=>{
        setSelectedItem(e.value);
      }}
      />
    </div>
    );
};

export default PrAutocomplete;