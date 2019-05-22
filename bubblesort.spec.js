// expects function to accpet an array

describe('Bubble Sort', function(){
  it('to be defined', function(){
    expect(bubbleSort).toBeDefined()
  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  // expects the function to loop through an array


  let input = [5, 4, 3, 7, 2]
  let output = [2, 3, 4, 5, 7]

  it('it should loop and sort over the entire array', function(){
    expect(bubbleSort(input)).toEqual(output)
  })
});




// swaps
// repeat
//  based on n - input & n number of times
