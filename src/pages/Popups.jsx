import React, { useState }  from "react";
import './popup.css'
import { Button } from "react-bootstrap";
const Popups = (props) =>{
   
    const [popup,setPop]=useState(props.isPopupVisible);
   
    
    return(
        <div>
            <div>
                {popup?
                    <div className="main ">
                        <div className="popup">
                        
                            <div className="popup-header border border-5 border-primary">
                            <h1 className="close-button text-primary" onClick={props.closePopup}><i class="fa fa-window-close" aria-hidden="true"></i></h1>
                                    <h1>Ingredient</h1>
                                
                                        {props.ingredients?.map(ingredient=>( 
                                            <p>{ingredient.text}</p> 
                                        ))} 
                                    <div className="">
                                        <p>Testing Details</p>
                                        <p>Testing Details</p>
                                        <p>Testing Details</p>
                                        <br/>
                                        <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                        <p>Large : $ 5.00</p>
                                        </label><br/>
                                        <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                        <p>Medium: $ 8.00</p>
                                        </label>
                                        <br/>
                                    </div>
                                    <Button>Add To Cart</Button>
                                    <br/><br/>
                               
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default Popups;