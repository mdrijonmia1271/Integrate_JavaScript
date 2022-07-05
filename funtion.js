function evenOdd(nums){
    for(var i = 0; i<nums.length; i++){
        var element = nums[i];
        if(element % 2 == 0){
            console.log(element, "is even");
        }
        else{
            console.log(element, "is Odd");
        }
    }
}

var nums = [10, 11, 12, 13, 14, 15];
evenOdd(nums);
var friend_age = [16, 17, 18, 19, 20];
evenOdd(friend_age);