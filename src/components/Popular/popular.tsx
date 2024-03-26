'use client';
import { StaticImageData } from "next/image";
import { imgContainer } from "../../../public";
import { Category, Product } from '../index';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
   console.log(current, pageSize);
};

enum Cate {
   Vegetable = 'Vegetable',
   Food = 'Foods',
   Milk = 'Milks',
   Snack = 'Snack',
   Coffee = 'Coffes',
   Teas = 'Teas',
}

enum Manafacture {
   NestFood = 'NestFood',
   NestMart = 'NestMart',
   NestPro = 'NestPro',
   NestPlus = 'NestPlus',
   NestMax = 'NestMax',
}

export interface IProduct {
   id?: string,
   name?: string,
   img: string,
   cate?: string,
   manafacture?: string,
   priceCurrent?: string | number,
   pricePast?: string | number,
}

const handleFormatPrice = (price: number) => {
   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const PopularProduct = () => {
   const arrProduct : IProduct[] = [
      {
         id: '1',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ và người lớn tuổi không quá già',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
      {
         id: '2',
         name: 'Sữa bột đậu lành dành cho trẻ nhỏ',
         img: imgContainer.product_1,
         cate: Cate.Snack,
         manafacture: Manafacture.NestFood,
         priceCurrent: handleFormatPrice(42000),
         pricePast: handleFormatPrice(62000), 
      },
   ];

   return (  
      <div className="my-10">
         <Category title="Popular Products" text={['Tất cả', 'Sữa bột', 'Cà phê', 'Trà túi lọc', 'Rau củ', 'Kem tươi', 'Trái cây']} />
         <div className="grid grid-cols-5 gap-5 mt-5">
            {arrProduct.map(({id, name, img, cate, manafacture, priceCurrent, pricePast} : IProduct, index: number) => (
               <Product 
                  key={index}
                  id={id}
                  name={name}
                  img={img}
                  cate={cate}
                  manafacture={manafacture}
                  priceCurrent={priceCurrent}
                  pricePast={pricePast}
               />
            ))}
         </div>
         <div className="flex justify-center items-center">
         <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            defaultPageSize={20}
            total={500}
            pageSizeOptions={[10, 20, 30, 40, 50]}
            // onChange={}
         />
         </div>
      </div>
   )
}
 
export default PopularProduct;