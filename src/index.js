/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 18, 2018
*************************************************************************/

function zerotect(number) {
  let zeros = 0;            // zeros of {n!}

/* Solution:
     As {5!} gives a zero in the resulted number
     It's necessary to divide {n*(n-1)*...*5} by {5}
     And count such divisions to detect zeros in {n!}
     However, dividing {n} by {5} and rounding it downward
     Until {5} is less than or equals to {n=n/5} is a faster way
     Then dividing {n} by {5^x+1} to find the next divisable
     To count zeros of {n!}
*/

  while (5 <= number) {                    // until {5} is less then or equals to {n}
        number = Math.floor(number / 5);   // decreasing the range of a divisable and rounding it downward
        zeros += number;                   // detecing zeros
  }
  return zeros;
}

export { zerotect }
