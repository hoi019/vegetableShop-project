'use client';
import Image from "next/image";
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { imgLogin } from "../../../public";
import ButtonLink from "@/components/Button/button";
import ShowInput from "@/components/Input/input";

const onChange: CheckboxProps['onChange'] = (e) => {
   console.log(`checked = ${e.target.checked}`);
}

const Login = () => {
   return (  
      <div className="flex justify-center my-40">
         <div className="flex justify-center items-center">
            <Image className=" rounded-xl"
               src={imgLogin.img}
               width={495}
               height={580}
               alt="login"
            />
         </div>
         <div className="ml-10">
            <form action="post" className="w-[530px]">
               <h1 className="text-6xl font-medium">Đăng nhập</h1>
               <p className="text-sm text-gray-500 mt-5 mb-10">Không có tài khoản? <span className="text-green-700 font-semibold cursor-pointer">Tạo ngay</span></p>
               <div className="mb-5">
                  <ShowInput text="Tên đăng nhập..."/>
               </div>
               <div className="mb-5">
                  <ShowInput text="Mật khẩu..."/>
               </div>
               <div className="flex justify-between">
                  <Checkbox onChange={onChange}>Nhớ mật khẩu</Checkbox>  
                  <p className="text-sm text-gray-500 cursor-pointer">Quên mật khẩu?</p>          
               </div>
               <div className="mt-10">
                  <ButtonLink href="/" text="Đăng nhập"/>
               </div>
            </form>
         </div>
      </div>
   )
}
 
export default Login;