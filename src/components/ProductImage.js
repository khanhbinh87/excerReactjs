import React from 'react'
export default function ProductImage(props){
   
    let {id}  = props;
    function getImg(id){
        return props.variations.find(o => {
                return  o.id === id
        });
       
    }
    return (
        <div className="product-image">
            <div className="image">
             <img src={getImg(id).imageURl}></img>
            </div>
        </div>
    )
}
