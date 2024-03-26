const ProductDetail = ({
   props
} : {
   props: {
      idp: string
   }
}) => {
   if (!props || !props.idp) {
      return <h1>Product detail is unavailable</h1>;
   }

   return (  
      <>
         <h1>Product detail is: 1 {props.idp}</h1>
      </>
   );
}
 
export default ProductDetail;