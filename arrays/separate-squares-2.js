var separateSquares = function(squares) {
    let xCoordinates = [];
    let yEvents = [];  // Events at each y-coordinate

    // Step 1: Create events for square bottoms and tops
    for (let [x, y, sideLength] of squares) {
        xCoordinates.push(x, x + sideLength);
        // Bottom edge: +1 (square starts)
        yEvents.push([y, 1, x, x + sideLength]);
        // Top edge: -1 (square ends)
        yEvents.push([y + sideLength, -1, x, x + sideLength]);
    }

    // Step 2: Coordinate compression for x-axis
    xCoordinates = [...new Set(xCoordinates)].sort((a,b) => a - b);
    yEvents.sort((a,b) => a[0] - b[0]);  // Sort by y-coordinate

    // Map x-coordinates to indices
    let xIndexMap = new Map();
    xCoordinates.forEach((value, index) => xIndexMap.set(value, index));

    // Step 3: Initialize segment tree for tracking active x-ranges
    let numXSegments = xCoordinates.length;
    let segmentCount = Array(4 * numXSegments).fill(0);  // How many squares cover this segment
    let segmentLength = Array(4 * numXSegments).fill(0);  // Total x-length covered

    // Segment tree update function
    function updateSegmentTree(node, left, right, queryLeft, queryRight, delta) {
        if (queryRight <= left || right <= queryLeft) return;
        
        if (queryLeft <= left && right <= queryRight) {
            segmentCount[node] += delta;
        } else {
            let mid = (left + right) >> 1;
            updateSegmentTree(node << 1, left, mid, queryLeft, queryRight, delta);
            updateSegmentTree((node << 1) | 1, mid, right, queryLeft, queryRight, delta);
        }

        // Recalculate segment length
        if (segmentCount[node] > 0) {
            segmentLength[node] = xCoordinates[right] - xCoordinates[left];
        } else if (right - left === 1) {
            segmentLength[node] = 0;
        } else {
            segmentLength[node] = segmentLength[node << 1] + segmentLength[(node << 1) | 1];
        }
    }

    // Step 4: Sweep line from bottom to top
    let totalArea = 0;
    let previousY = yEvents[0][0];
    let horizontalStrips = [];  // Store [y, height, width] for each strip

    for (let [currentY, eventType, x1, x2] of yEvents) {
        // Calculate area of strip between previousY and currentY
        if (currentY > previousY) {
            let stripHeight = currentY - previousY;
            let stripWidth = segmentLength[1];  // Root of segment tree
            totalArea += stripWidth * stripHeight;
            horizontalStrips.push([previousY, stripHeight, stripWidth]);
            previousY = currentY;
        }
        
        // Update segment tree: add or remove square's x-range
        updateSegmentTree(1, 0, numXSegments - 1, 
                         xIndexMap.get(x1), xIndexMap.get(x2), eventType);
    }

    // Step 5: Binary search through strips to find where area = half
    let halfArea = totalArea / 2;
    let accumulatedArea = 0;
    
    for (let [stripBottomY, stripHeight, stripWidth] of horizontalStrips) {
        if (accumulatedArea + stripHeight * stripWidth >= halfArea) {
            // The dividing line is within this strip
            let remainingArea = halfArea - accumulatedArea;
            return stripBottomY + remainingArea / stripWidth;
        }
        accumulatedArea += stripHeight * stripWidth;
    }
    
    return 0;
};
