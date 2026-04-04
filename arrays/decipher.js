/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */

var decodeCipherText = function(encodedText, rows){
    const n = encodedText.length;
    if(n === 0) return "";

    const cols = Math.floor(n/rows)
    let result = []


    for(let startCol = 0; startCol < cols; startCol++){
        let row = 0;
        let col = startCol;

        while(row < rows && col < cols){
            result.push(encodedText[row * cols + col]);
            row++;
            col++;
        }
    }
   return result.join('').replace(/\s+$/,'')
}

console.log(decodeCipherText("ch   ie   pr", 3));
