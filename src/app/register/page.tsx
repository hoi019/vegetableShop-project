'use client';
import { Button, Input } from "@/components";
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import Image from "next/image";
import { imgLogin } from "../../../public";

const onChange: CheckboxProps['onChange'] = (e) => {
   console.log(`checked = ${e.target.checked}`);
}

const ShowAnother = ({className, icon, text, classNameText} : {classNameText?: string, className?: string, icon: string, text: string}) => {
   return (
      <div className={`${className} px-6 py-4 flex rounded-md mb-5`}>
         <div className="flex justify-center items-center">
            <Image
               src={icon}
               width={28}
               height={28}
               alt={text}
            />
         </div>
         <div className={`${classNameText} ml-5 flex justify-center items-center`}>
            {text}
         </div>
      </div>
   )
}

const Register = () => {
   return (  
      <div className="flex justify-center my-40">
         <div>
            <div className="mb-10">
               <h1 className="text-6xl font-medium">Tạo tài khoản</h1>
               <p className="text-sm text-gray-500 mt-5">Đã có tài khoản? <span className="text-green-600 font-semibold">Đăng nhập</span></p>
            </div>
            <div className="flex justify-center">
               <div className="w-[530px]">
                  <div className="mb-5">
                     <Input text="Tên đăng nhập..."/>
                  </div>
                  <div className="mb-5">
                     <Input text="Tên email..."/>
                  </div>
                  <div className="mb-5">
                     <Input text="Mật khẩu..."/>
                  </div>
                  <div className="mb-5">
                     <Input text="Xác nhận mật khẩu..."/>
                  </div>
                  <Checkbox onChange={onChange}>Đồng ý với các điều khoản</Checkbox>
                  <Button className="mt-14" href="/login" text="Đăng ký"/>  
               </div>
               <div className="w-[465px] px-[50px] pt-[50px] pb-[30px] h-max ml-10 border border-gray-300 rounded-md">
                  <ShowAnother classNameText="font-semibold text-white" className="bg-blue-600" icon={imgLogin.facebook} text="Đăng ký bằng Facebook" />
                  <ShowAnother classNameText="font-semibold text-gray-500" className="bg-slate-200" icon={imgLogin.google} text="Đăng ký bằng Google" />
                  <ShowAnother classNameText="font-semibold text-white" className="bg-black" icon={imgLogin.twitter} text="Đăng ký bằng X" />
               </div>
            </div>
         </div>
      </div>
   )
}
 
export default Register;