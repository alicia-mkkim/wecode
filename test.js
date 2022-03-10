function findEvenNumbers (nums){
    for(let i = 0; i < nums.length ; i++){
         if(nums[i] % 2 === 0 && nums[i] <=50 ){
             console.log(nums[i]);
        }
    }
}

findEvenNumbers([39,50,1,35,22,2,100])