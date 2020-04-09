class EvenSort
{
   getEvent(arr:number[])
   {
      let evenArr = [];
      
      for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
         evenArr.push(arr[i]);
        }
      }
      return evenArr;
   }

   getEvenSort(arr:number[])
   {
      let numberArr=this.getEvent(arr);
      return numberArr.sort(function(a, b){return a-b});
   }
}

var evenSort=new EvenSort();
console.log(evenSort.getEvenSort([12,3,2,1,7,9,6]));