const search =()=>{
    const search=document.getElementById("search-item").ariaValueText.toUpperCase;
    const allProducts= document.getElementById("allHTML");
    const product= document.querySelectorAll(".allHTML");
    const pname=document.getElementsByTagName("html");

    for (i=0; i<product.length; i++) {
        let match = product [i].getElementsByTagName("html")[0];
    }
 if (match) { 
   let textvalue= match.textContent || match.innerHTML

   if (textvalue.toUpperCase()indexOf(search)>-1){
    product[i].style.display= "";
   } else {product[i].style.display= "none"

   }
 }
}
