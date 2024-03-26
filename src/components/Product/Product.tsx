import { imgContainer } from "../../../public";
import { IProduct } from "../Popular/popular";
import Image from "next/image";
import './product.css';

const Product = ({id, name, img, cate, manafacture, priceCurrent, pricePast} : IProduct) => {
   return (  
      <div className="cursor-pointer border border-gray-400 hover:border-green-700 rounded-xl">
         <div className="flex justify-center items-center">
            <Image 
               src={img}
               width={245}
               height={245}
               alt={`img-${id}`}
            />
         </div>
         <div className="px-6 pb-6">
            <span className="text-xs text-gray-500 my-5">{cate}</span>
            <h1 className="product__text text-xl font-medium my-3">{name}</h1>
            <p className=" text-sm">By <span className="font-medium text-sm text-green-700">{manafacture}</span></p>
            <div className="mt-4 flex justify-between items-center">
               <div className="">
                  <p className="text-sm line-through text-gray-500">{pricePast} VNĐ</p>
                  <p className="text-green-700 font-medium">{priceCurrent} VNĐ</p>
               </div>
               <div className="bg-green-600 flex px-4 py-2 text-white rounded">
                  <Image className="mr-2"
                     src={imgContainer.cart}
                     width={14}
                     height={14}
                     alt="cart"
                  />
                  Add
               </div>
            </div>
         </div>
      </div>
   )
}
 
export default Product;