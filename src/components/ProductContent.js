import React from 'react'
export default function ProductContent(props){
    let {title,brand,variations,onData,selectedVariant} = props;
    let selectVariantId = variations.find(o => o.id === selectedVariant)
    function getClassActive(id){
        if(id === selectedVariant) return "active"
        return ''
    }
   
    function data(id){
      onData(id)
        
    }
    return(
        <div className="product-content">
            <h3 className="title">
                <a href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html" 
            // target="_blank"
            >{title}</a></h3>
            <p className="brand">Thương hiệu: {brand ? brand :"No brand"}</p>
            <p className="quantity">Còn lại : { selectVariantId.quantity} Sản phẩm</p>
            {/**/}
            <div className="wrapper-price">
            <div className="final-price">{selectVariantId.price}&nbsp;₫</div>
            <div className="origin-price">{selectVariantId.price * selectVariantId.percent}&nbsp;₫</div>
            <div className="sale-price">{selectVariantId.percent}</div>
            </div>
            <div className="wrapper-color">
            <div className="text">Màu sắc</div>
            <div className="list-color">
                <p className="color-text">{selectVariantId.name}</p>
                <ul>
                    {
                        variations.map(varation =>{
                            return  <li onClick ={() => data(varation.id)} className={getClassActive(varation.id)} key={Math.random()* 999}><img src={varation.imageURl} alt={varation.name} /></li>
                        })
                    }
                    
                </ul> 
            </div>
            </div> <button className="add-to-cart">Add to cart</button>
        </div>
    )
}