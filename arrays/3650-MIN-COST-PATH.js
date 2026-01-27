/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function(n, edges) {
    // A MinPriorityQueue is needed for Dijkstra's algorithm, as JavaScript
    // doesn't have a built-in one like Python's `heapq`.
    class MinPriorityQueue {
        constructor() {
            this.heap = [];
        }

        getParentIndex(i) { return Math.floor((i - 1) / 2); }
        getLeftChildIndex(i) { return 2 * i + 1; }
        getRightChildIndex(i) { return 2 * i + 2; }

        swap(i1, i2) {
            [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
        }

        isEmpty() {
            return this.heap.length === 0;
        }

        enqueue(item) { // item is [priority, element]
            this.heap.push(item);
            let index = this.heap.length - 1;
            while (index > 0 && this.heap[index][0] < this.heap[this.getParentIndex(index)][0]) {
                this.swap(index, this.getParentIndex(index));
                index = this.getParentIndex(index);
            }
        }

        dequeue() {
            if (this.isEmpty()) {
                return null;
            }
            this.swap(0, this.heap.length - 1);
            const item = this.heap.pop();
            this.heapifyDown();
            return item;
        }

        heapifyDown() {
            let index = 0;
            while (this.getLeftChildIndex(index) < this.heap.length) {
                let smallerChildIndex = this.getLeftChildIndex(index);
                const rightChildIndex = this.getRightChildIndex(index);
                if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[smallerChildIndex][0]) {
                    smallerChildIndex = rightChildIndex;
                }

                if (this.heap[index][0] <= this.heap[smallerChildIndex][0]) {
                    break;
                }

                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            }
        }
    }

    // create adj and reverse adj list
    const adj_list = Array.from({ length: n }, () => []);
    const rev_adj_list = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        adj_list[u].push([v, w]);
        rev_adj_list[v].push([u, 2 * w]);
    }
    
    // traverse using dijkstra and find minimal path
    // use both adj_list and rev_adj_list
    const distance = new Array(n).fill(Infinity);
    distance[0] = 0;

    const min_heap = new MinPriorityQueue();
    min_heap.enqueue([0, 0]); // Push [cost, node] to the min-heap

    while (!min_heap.isEmpty()) {
        const [dist, node] = min_heap.dequeue();
        
        // Relax edges from the original graph
        for (const [ngbr, ngbr_dist] of adj_list[node]) {
            if (dist + ngbr_dist < distance[ngbr]) {
                distance[ngbr] = dist + ngbr_dist;
                min_heap.enqueue([distance[ngbr], ngbr]);
            }
        }
        
        // Relax edges from the reversed graph
        for (const [ngbr, ngbr_dist] of rev_adj_list[node]) {
            if (dist + ngbr_dist < distance[ngbr]) {
                distance[ngbr] = dist + ngbr_dist;
                min_heap.enqueue([distance[ngbr], ngbr]);
            }
        }
    }

    if (distance[n - 1] === Infinity) {
        return -1; // Destination is not reachable
    } else {
        return distance[n - 1]; // Return the minimum cost
    }
};

n = 4;
edges = [[0,1,3],[3,1,1],[2,3,4],[0,2,2]];

console.log(minCost(n,edges))