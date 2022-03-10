function findEvenNumbers (nums){
    for(let i = 0; i < nums.length ; i++){
         if(nums[i] % 2 === 0 && nums[i] <=50 ){
             console.log(nums[i]);
        }
    }
}

let nums = [3,4,5,10,300,205,12] 
findEvenNumbers(nums);