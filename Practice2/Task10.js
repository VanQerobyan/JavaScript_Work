function contains(arr, value){

      for (var i =0; i <arr.length; ++i){
        if (arr[i] == value) {
            return true;
        }
      }
      return false;  
}

var arr = [4, 10, 8];
var value = 8;

console.log(contains(arr, value));