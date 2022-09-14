function solution(maps) {
    return bfs(maps) >= 2 ? bfs(maps) : -1
}

const bfs = (arr) => {
    const visited = [];
    const queue = [];

    queue.push([0,0]);

    while(queue.length > 0){
        const [row,col] = queue[0]
        if(arr[row+1] && arr[row+1][col] === 1){
            queue.push([row+1,col])
            arr[row+1][col] += arr[row][col]
        }
        if(arr[row-1] && arr[row-1][col] === 1){
            queue.push([row-1,col])
           arr[row-1][col] += arr[row][col]
        }
        if(arr[row][col+1] === 1){
            queue.push([row,col+1])
           arr[row][col+1] += arr[row][col]
        }
        if(arr[row][col-1] === 1){
            queue.push([row,col-1])
            arr[row][col-1] += arr[row][col]
        }

        visited.push(queue[0])
        queue.shift();
    }
    return arr[arr.length-1][arr[0].length-1]
}

// BFS를 이용해서 풀어보았다.
// [0,0]이 1이기 때문에 visited 배열에 [0,0]이 한번 더 들어가는 경우가 생기긴 하지만 
// 당장 문제에서 요구하는 답을 내는데에는 걸림돌이 되지는 않아서 그냥 놔뒀다.