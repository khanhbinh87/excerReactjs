import React from 'react'
export default function ProductDescription(props){
    let { description, attrProduct} = props;
    return (
        <div className="description">
            <ul className="extra-info">
                {
                    attrProduct.map(element => {
                        return <li>{element.name} {element.value}</li>
                    })
                   
                }
            </ul>
            <h2>Chất liệu bền chặt&nbsp;</h2>
            &lt;p&gt;Test hjskhfk h&lt;/p&gt;

            &lt;p&gt;&lt;strong&gt;&lt;span style="background-color:#8e44ad"&gt;fhsdjkfhsk&amp;nbsp;
            hsdjkfk&amp;nbsp;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;
            <div>
            <p>{description}</p>
            </div>
      </div>
    )
}
