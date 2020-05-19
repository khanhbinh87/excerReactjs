import React, { Component } from 'react'
import ProductImage from './ProductImage'
import ProductDescription from './ProductDescription'
import ProductContent from './ProductContent'

export default class MainContentClass extends Component {
    constructor(props) {
        super(props);
        // let idVariantDefault = Math.floor(Math.random()*1000);

        this.state = {
            selectedVariant:2,
            title:"Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm",
            brand:'',
            variations:[
                {   
                    id:1,
                    price:20000,
                    name:'Màu đen',
                    quantity:10,
                    percent:0.1,
                    imageURl:'images/black.jpg'
                },
                {
                    id:2,
                    price:22000,
                    name:'Màu đỏ',
                    quantity:5,
                    percent:0.15,
                    imageURl:'images/red.jpg'
                },
                {
                    id:3,
                    price:25000,
                    name:'Màu xanh',
                    percent:0.2,
                    quantity:2,
                    imageURl:'images/blue.jpg'
                }

            ],
            attrProduct:[
                {
                    name:'Chất liệu',
                    value:'polyester và thun'
                },
                {
                    name:'',
                    value:'Thoát mồ hôi tốt'
                },
                {
                    name:'',
                    value:'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát'
                },
                {
                    name:'',
                    value:'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc'
                },
                {
                    name:'Chất liệu',
                    value:'polyester và thun'
                }
            ],
            description:'Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc'

        }



    }
    onData = (id) => {
        
        this.setState({selectedVariant:id})
        
    }
    
    render() {
       let id= this.state.selectedVariant;

        let {title,brand,variations,selectedVariant, attrProduct,description} = this.state;
        let injectedProps = {
            title,
            brand,
            variations,
            selectedVariant,
            description,
            attrProduct

        }
        return (
            <div className="container">
                <div className="list-blog">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
                    facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
                    qui.</p>
                </div>
                <div id="app">
                    <div className="cart">Giỏ hàng (1)</div>
                    <div className="product">
                        <ProductImage variations={variations} id={id}/>
                        <ProductContent 
                            {...injectedProps}
                            onData={(data)=>this.onData(data)}
                        />
                    </div>
                    <ProductDescription
                        {...injectedProps}
                    />
            </div>
            </div>
        )
    }
}
