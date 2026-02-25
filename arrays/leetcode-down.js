var sortByBits = function(arr) {
    
    return arr.sort((a, b) => {
        const bitsA = a.toString(2).split('1').length - 1;
        const bitsB = b.toString(2).split('1').length - 1;
        if (bitsA !== bitsB)
            return bitsA - bitsB; 
        return a - b;
    });
};