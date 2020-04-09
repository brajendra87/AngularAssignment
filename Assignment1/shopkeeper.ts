
 class shopkeeper
{

   GetDiscount(prices: number[], discountPercentage: number)
   {
    let totalPrice = prices.reduce((a, b) => a + b, 0);
    let afterDiscount= totalPrice* discountPercentage/100;
    return afterDiscount;
   }

}
var obj=new shopkeeper();
console.log("Price after discount: "+ obj.GetDiscount([100,200,300],50));


 
    