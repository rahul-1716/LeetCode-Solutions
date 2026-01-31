/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length;
    let answer = letters[0];
    while(left<=right){
        let mid = Math.floor(left + (right - left) / 2);
        if(letters[mid] > target){
            answer = letters[mid];
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return answer;
};
letters=["c","f","j"];
target="a"
console.log(nextGreatestLetter(letters,target)); //c
