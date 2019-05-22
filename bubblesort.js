function bubbleSort(array){
  if(array.length === 0 ){
    return array
  }
  else{
    // how do you check when the function is done sorting
    let count = 0
    while(count < array.length){
      for(let i = 0; i < array.length; i++){
        if(array[i] > array[i + 1]){
          let temp = array[i]
          array[i] = array[i + 1]
          array[i + 1] = temp
        }
      }
      count++
    }
  }

  return array
}
