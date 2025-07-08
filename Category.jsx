import React, { useState } from "react";

function FilterProductTable({products})
{
    const [filterChange,setFilterChange]=useState("");
    const [inStock,setinStock]=useState(false);
    return(
        <div>
            <SearchFilter filterChange={filterChange}  inStock={inStock}  onFilterChange={setFilterChange} onInStock={setinStock}/>
        </div>
    )
}

function 

function SearchFilter({filterChange},{inStock},{onFilterChange},{onInStock})
{     <form>
    <input type="text" 
    value={filterChange} 
    placeholder="Search   Products...."  
    onChange={(e)=>{onFilterChange(e.target.value)}} />

    <label>
        <input type="checkbox" value={inStock} onChange={(e)=>onInStock(e.target.value)}/>
         
             available products

    </label>


    </form>

    

    
}


const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function Category()
{
    <div>
       <FilterProductTable product={PRODUCTS} />
    </div>
}