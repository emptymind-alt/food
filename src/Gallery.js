import React, {useState} from 'react';
import "./Style.css";
import Menu from "./Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItem from "./MenuItem";


const Gallery = ()=> {

 const [items, setItems] = useState(Menu);
  
  const filterMenu  = (category) => {
       const updatedItems = Menu.filter((curElem) => {
           return curElem.category === category;

       });
       setItems(updatedItems);
  }

  return (
    <>
    <div className = "text-center">
    <h1 >Order your food </h1>
    </div>
    <hr/>
    <div className = "menu-tabs container">
        <div className = "menu-tab d-flex justify-content-center-around">
            <button className = "bt btn-warning " onClick ={()=>filterMenu('breakfast')}>BreakFast </button>
            <button className = "bt btn-warning "onClick ={()=>filterMenu('launch')}>Launch</button>
            <button className = "bt btn-warning "onClick ={()=>filterMenu('dinner')}>Dinner </button>
            <button className = "bt btn-warning "onClick ={setItems}>All </button>
            </div>
            </div>
            {/* menu item*/}

            <MenuItem items = {items}/>

                                    

                                                         

    
    </>
  );
};
export default Gallery;