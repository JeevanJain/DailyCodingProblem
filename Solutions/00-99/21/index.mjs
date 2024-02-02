function minRooms(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort by start time

    let rooms = 0;
    let active = null; // Array to track currently active intervals

    for (const [start, end] of intervals) {
        let canFit = false;
        for (let i = 0; i < active.length; i++) {
            if (active[i][1] <= start) {
                // Room becomes available
                active.splice(i, 1);
                canFit = true;
                break;
            }
        }

        if (!canFit) {
            rooms++;
        }

        active.push([start, end]);
    }

    return rooms;
}

const intervals = [[30, 75], [0, 50], [60, 150]];
const minRoomsNeeded = minRooms(intervals);
console.log("Minimum rooms required:", minRoomsNeeded); // Output: 2