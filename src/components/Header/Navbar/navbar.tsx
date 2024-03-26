import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { imgNav } from "../../../../public";
import Image from "next/image";
import '../header.css';
import { title } from "process";

interface NavProps {
   title: string;
   icon: string | StaticImport;
   className?: string;
   arr: string[];
}

const ShowDeals = ({img, title} : {img: string, title: string}) => {
   return (
      <div className="flex p-5 cursor-pointer">
         <Image className="h-max mr-1"
            src={img}
            width={20}
            height={20}
            alt="logo-fire"
         />
         <p className=''>{title}</p>
      </div>
   )
}

const ShowListItemNav = ({title, icon, className, arr} : NavProps) => {
   return (
      <div className="nav__parent-item flex p-5 relative cursor-pointer"> 
         <p className={className}>{title}</p>
         <div className="flex justify-center items-center">
            <Image className="h-max ml-1"
               src={icon}
               width={12}
               height={12}
               alt={`icon-${title}`}
            />
         </div>
         <div className="nav__child-item absolute top-16 -left-2 z-10 bg-white rounded-md shadow-xl px-7 py-5 w-64">
            <ul>
               {arr.map((item: string, index: number) => (
                  <li className="nav__item-child py-2" key={index}>{item}</li>  
               ))}
            </ul>
         </div>
      </div>
   )
} 

const ShowMegaMenu = ({title, icon, className, arr} : NavProps) => {
   return (
      <div className="flex p-5 cursor-pointer relative"> 
         <p className={className}>{title}</p>
         <div className="flex justify-center items-center">
            <Image className="h-max ml-1"
               src={icon}
               width={12}
               height={12}
               alt={`icon-${title}`}
            />
         </div>
      </div>
   )
}

const Navbar = () => {
   const arrItem : {item: string[]}[] = [
      {
         item: [
            'Trang chủ 1', 
            'Trang chủ 1', 
            'Trang chủ 1', 
            'Trang chủ 1', 
            'Trang chủ 1', 
            'Trang chủ 1', 
         ]
      },
      {
         item: [
            'Gian hàng mùa Đông',
            'Gian hàng mùa Thu',
            'Gian hàng mùa Hạ',
            'Gian hàng mùa Xuân',
            'Gian hàng mùa Thu Cuối',
            'Gian hàng mùa Hạ',
            'Gian hàng mùa Đông Tây',
         ]
      }, 
      {
         item: [
            'Nhà cung cấp Viettle',
            'Nhà cung cấp Supo',
            'Nhà cung cấp Fanta',
            'Nhà cung cấp Ngũ Cốc',
            'Nhà cung cấp Viettle',
            'Nhà cung cấp Viettle',
            'Nhà cung cấp Viettle',
         ]
      }, 
      {
         item: [
            'Bài viết nổi bật',
            'Bài viết đáng xem',
            'Bài viết xu hướng',
            'Bài viết theo mùa',
            'Bài viết sản phẩm',
            'Bài viết đánh giá',
         ]
      },
      {
         item: [
            'Thông tin',
            'Liên hệ',
            'Tài khoản cá nhân',
            'Đăng nhập', 
            'Đăng ký',
            'Hướng dẫn mua hàng',
         ]
      }
   ];

   return (  
      <div className="nav__main flex justify-between px-5">
         <div className="flex relative justify-between items-center">
            <ShowDeals img={imgNav.fire} title="Nổi bất"/>
            <ShowListItemNav icon={imgNav.drop} title='Trang chủ' arr={arrItem[0].item}/>
            <div className="p-5 cursor-pointer">Thông tin</div>
            <ShowListItemNav icon={imgNav.drop} title="Cửa hàng" arr={arrItem[1].item}/>
            <ShowListItemNav icon={imgNav.drop} title="Nhà cung cấp" arr={arrItem[2].item}/>
            <ShowListItemNav icon={imgNav.drop} title="Danh mục" arr={arrItem[0].item} />
            <ShowListItemNav icon={imgNav.drop} title="Bài viết" arr={arrItem[3].item}/>
            <ShowListItemNav icon={imgNav.drop} title="Trang" arr={arrItem[4].item}/>
            <div className="p-5 cursor-pointer">Liên hệ</div>
         </div>
         <div className="flex justify-center items-center">
            <Image 
               src={imgNav.contact}
               width={36}
               height={36}
               alt="contact"
            />
            <p>
               <span>1900 - 888</span>
               24/7 Support Center
            </p>
         </div>
      </div>
   );
}
 
export default Navbar;