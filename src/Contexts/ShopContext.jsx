import React ,{createContext, useState} from "react";
import all_product from "../Components/Assests/all_product"

export const ShopContext = createContext(null); 



    const getDefaultCart = ()=>{
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart;
    };

const ShopContextprovider= (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
   

    const addTocart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}));
        console.log(cartItems);
    };

    const removeFromCart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}));
    };

    


    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let iteminfo = all_product.find((product)=>product.id===Number(item))
                        totalAmount += iteminfo.new_price * cartItems[item];
                    }
                    return totalAmount;
            }
    }

    const getTotalcartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItem +=cartItems[item];
                    }
            }
            return totalItem;
        }
        
        const contextValue = {getTotalcartItems,getTotalAmount,all_product,cartItems,addTocart,removeFromCart};

        return(
            <ShopContext.Provider value ={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
    
}

export default ShopContextprovider;

