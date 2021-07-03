import  React from 'react';


const MenuItem =({items})=> {
     return (
         <>
             <div className = "menu-items container-fluid mt-5">
                <div className = "row">
                    <div className = "col-11 mx-auto">
                        <div className = "row my-5">

                            {
                               items.map((elem)=> {
                                    const {id,name, image, description,price} = elem;

                                    return (
                                        
                                           <div className = "item1 col-12 col-md-6 col-lg-6 col-xl-4" key ={id} >
                                <div className = "row item-inside">
                              
                              
                                <div className = "card">
                                  
                                    
                                        <img src ={image} alt = "myPic" className = "super" />
                                
                                        {/*description*/}
                                      
                                
                                            <div>
                                               
                                            
                                                <h1>{name}</h1>
                                                <p>{description}</p>
                                                <div>
                                            
                                                        <h2>{price} </h2>
                                                        <a href= "#">
                                                            <button className = "btn btn-primary">Order now </button>
                                                            </a>
                                                            </div>
                                                            <p>price may vary </p>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                
                                                            
                                                
                                        
                                                
                       

                                    
                                    )
                                })
                            }
                 </div>
                 </div>
                 </div>
                 </div>
         
                       
         </>
     );
};

export default MenuItem;
