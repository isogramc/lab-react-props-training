
import { Component, useState } from "react";

function Rating(props){
    const number = props.children;
    const [stars, setStars] = useState(starsAll(number));

    function starsAll(num){
        const list = [];
        const num2 = Math.round(num);
        const num3 = 5-num2;
        for (let i=0; i<num2; i++) {
            let element = {el: <span key={`s-${i}`} className="fa fa-star"></span>};
            list.push(element);
        }
        for(let j=0; j<num3; j++){
            let element = {el: <span key={`d-${j}`} className="fa fa-star-o"></span>};
            list.push(element);
        }
        return list;
    }
   
    return (
        
        <div>
            {stars.map(star=>star.el)}
        </div>
    )
}
export default Rating