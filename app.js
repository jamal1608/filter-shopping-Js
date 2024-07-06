let rightProduct = document.querySelector('.right');
let leftcategory = document.querySelector('.left');
let allcategory = [];









let displayProduct = async (allcheck =[])=>{

  rightProduct.innerHTML = ' ';
let product =  await fetch('https://fakestoreapi.com/products');
let finalProduct = await product.json();
finalProduct.forEach(element => {



  if(!allcategory.includes(element.category)){

leftcategory.innerHTML +=

 `<label>
        <input type="checkbox" onclick ="categoryfilter()" value ="${element.category}"> ${element.category}
    </label>`
    
  
    

allcategory.push(element.category)}



if(allcheck.length == 0){
  allcheck = allcategory;
  console.log(allcheck);

}
if(allcheck.includes(element.category)){


  rightProduct.innerHTML +=` <div class="products" id = "products">
    <img src ="${ element.image}" >
    <h4>${element.category}</h4>
    <p> $ ${element.price} | ${element.rating.rate}</p>
    <h3>${element.title}</h3>

</div>  `}
});
}

displayProduct();

let categoryfilter = ()=>{
  let checkinput = document.querySelectorAll("input[type='checkbox']") 
let checkdata = [];
checkinput.forEach((e)=>{
  if(e.checked){
    checkdata.push(e.value)
  }
})
displayProduct(checkdata)
}






  