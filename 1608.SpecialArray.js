var specialArray = function(nums) {
    //find x ( nums.length - 1 )
    //iterate thruogh the array to find out if all nums are greater than x ( === nums.length - 1 )
    for ( var j = 0; j < nums.length; j++ ) {
        if ( nums[j] === 0 ) {
            nums.splice( j, 1 );
        }
    }
    if ( nums.length === 0 ) {
        return -1
    }
    
    var x = nums.length;
    var y = nums.length;
    
    for ( var i = 0; i < nums.length; i++ ) {

        if ( y >= 0 && x <= nums[i]) {
            y--;
        } else {
            return -1;
        }
    }
    return x;
};