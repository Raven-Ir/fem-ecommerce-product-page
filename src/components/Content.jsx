import React, { useState } from 'react'

import ProductImage1 from '../assets/product-images/image-product-1.jpg'
import ProductImage2 from '../assets/product-images/image-product-2.jpg'
import ProductImage3 from '../assets/product-images/image-product-3.jpg'
import ProductImage4 from '../assets/product-images/image-product-4.jpg'

import ProductThumb1 from '../assets/product-images/image-product-1-thumbnail.jpg'
import ProductThumb2 from '../assets/product-images/image-product-2-thumbnail.jpg'
import ProductThumb3 from '../assets/product-images/image-product-3-thumbnail.jpg'
import ProductThumb4 from '../assets/product-images/image-product-4-thumbnail.jpg'

import Plus from '../assets/icons/icon-plus.svg'
import Minus from '../assets/icons/icon-minus.svg'
import { ReactComponent as CartIcon } from '../assets/icons/icon-cart.svg'

import { CartContains } from '../scripts/cart'

const Content = ( { cartQuantity } ) => {
  const [previewImage, setPreviewImage] = useState(ProductImage1);
  const productImages = [{image:ProductImage1, thumbnail:ProductThumb1}, {image:ProductImage2, thumbnail:ProductThumb2}, {image:ProductImage3, thumbnail:ProductThumb3}, {image:ProductImage4, thumbnail:ProductThumb4}];
  const [cartIncludes, setCart] = useState(new CartContains(0));
  const [tempQuantity, setQuantity] = useState(1);
  const [galleryOn, setGalleryVisibility] = useState(false);

  const handleClick = (image) => {
    setPreviewImage(image);
  };

  const removeQuantity = () =>{
    let counter = tempQuantity;
    if(counter > 0){
      counter--;
    }
    setQuantity(counter);
  };

  const addQuantity = () =>{
    let counter = tempQuantity;
    if (counter < 25){
      counter++;
    }
    setQuantity(counter);
  };

  const cartUpdate = () => {
    cartIncludes.updateCart(tempQuantity);
    
    cartQuantity(cartIncludes.getQuantity());
  }

  const galleryView = () => {
    setGalleryVisibility(!galleryOn);
  }
  

  return (
    <>
    <div className='md:flex justify-evenly'>
      <div className='flex flex-col max-w-screen-sm items-center'>
      
            <img src={previewImage} alt="produvt preview" className='p-1 rounded-2xl hover:cursor-pointer' onClick={()=>galleryView()}/>
        
        <ul className='sm:flex hidden'>
            {productImages.map((product) => (
              <li className='hover:scale-105 cursor-pointer p-1 transition-transform' onClick={() => handleClick(product.image)} key={product.image}><img src={product.thumbnail} alt="product thumbnail 1" className='rounded-xl' /></li>
            ))}
          
        </ul>
      </div>

      <div className='flex flex-col lg:w-1/4 justify-center font-main-bold'>
        <p className='text-project-orange-prim text-base '>SNEAKER COMPANY</p>
        <p className='text-5xl mt-5'>Fall Limited Edition Sneaker</p>
        <p className=' text-project-dark-greyish-blue font-main mt-5'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p className='text-3xl flex items-center mt-5'>$125.00 
          <span className='text-project-orange-prim text-lg ml-5 p-1 border-0 rounded-md bg-project-orange-pale'>50%</span>
        </p>
        <p className='line-through text-project-grayish-blue mt-3'>$250.00</p>
        <div className='flex items-center justify-evenly'>
          
          <div className='flex'>

            <button onClick={() => removeQuantity()} className='p-4'>
              <img src={Minus} alt="Remove Quantity" />
            </button>
            <p className='p-4'>{tempQuantity}</p>
            <button className='p-4' onClick={() => addQuantity()}><img src={Plus} alt="Add Quantity" /></button>

          </div>
          <button className='flex bg-project-orange-prim  shadow-2xl px-6 py-4 shadow-project-orange-pale drop-shadow-2xl font-main text-white rounded-lg'
            onClick={() => cartUpdate()}
          >
            
            <CartIcon fill='white' className=''/>
            <p className='ml-2'>Add to Cart</p></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content

/*

TODO:

1. --> Full screen image preview (desktop)
2. --> Gallery (mobile version)
3. --> Paddings and margins (mobile version)
4. --> Cart card

*/