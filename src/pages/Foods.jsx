import style from './recipe.module.css'; 
import Popups from "./Popups";
import React, { useEffect, useState } from 'react'


const Foods = ({title,calories,image,ingredients}) =>{ 
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [pop, setPop] = useState(false);
	console.log(title,calories,image,ingredients);

	const clickPopup = () => {
		console.log("ffffffff");
		setIsPopupVisible(true);
	}

	const closePopup=()=>{
		console.log("closed");
        setIsPopupVisible(false)
    }

	return( 
		<div className={style.recipe} > 
			<h1>{title}</h1>
			{/* <h1>Chicken Kottu</h1> */}
			{/* <ul> 
				{ingredients.map(ingredient=>( 
					<li>{ingredient.text}</li> 
				))} 
			</ul>  */}
			
			

			<img className={style.image} src={image} alt="" width="200" height="200"/> 
			<ul>
			<li onClick={clickPopup}>Chicken</li>|&nbsp;
			
			<li onClick={clickPopup}>Mutton</li>|&nbsp;
			<li onClick={clickPopup}>Beaf</li>|&nbsp;
			<li onClick={clickPopup}>Vegetable</li> 
			</ul>
		<div>
		{isPopupVisible  && <Popups isPopupVisible={true} closePopup={closePopup} ingredients={ingredients}/>}
		</div>
		</div> 
	); 

} 
export default Foods;
