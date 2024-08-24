import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from '../../Contexts/ShopContext';

 const ProductDisplay = (props) => {
    const {product} = props;
    const {addTocart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(122)</p>
          </div>
          <div className="prouctdisplay-right-prices">
               <div className="productdisplay-right-price-old">
                ${product.old_price}
               </div>
               <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-descriptiion">
          Elevate your wardrobe with our Classic Elegance A-Line Dress, a timeless piece that combines sophistication with comfort. This dress features a flattering A-line silhouette, making it perfect for any occasion, from casual outings to formal events.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXl</div>
            </div>
          </div>
          <button onClick={()=>{addTocart(product.id)}}> ADD TO CART</button>
          <p className="productdisplay-right-category"><span>category:</span> Women ,T-Shirt, Crop Top</p>
          <p className="productdisplay-right-category"><span>Tags:</span> Modern ,Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay