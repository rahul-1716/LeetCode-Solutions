var robotSim = function(commands, obstacles){
    const set = new Set();

    for(const [x,y] of obstacles){
        set.add(x+','+y);
    }

    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];

    let x = 0, y = 0;
    let maxDistance = 0;
    let dir = 0;

    for(const cmd of commands){
        if(cmd === -1){
            dir = (dir + 1) % 4;
        }
        else if(cmd === -2){
            dir = (dir + 3) % 4;
        }
        else{
            for(let step = 0; step < cmd; step++){
                const nx = x + dx[dir];
                const ny = y + dy[dir];

                if(set.has(nx+','+ny)){
                    break;
                }

                x = nx;
                y = ny;

                maxDistance = Math.max(maxDistance, x * x + y * y)
            }
        }
    }
    return maxDistance;
    
}


console.log(robotSim([4,-1,3],[]));
