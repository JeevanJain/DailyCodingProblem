class OrderLog {
    /**
     * @param {number} maxSize
     */
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.data = new Array(maxSize).fill(null);
        this.head = 0;
    }
    /**
     * @param {number} order_id
     */
    record(order_id) {
        this.data[this.head] = order_id;
        this.head = (this.head + 1) % this.maxSize; // Circular buffer logic
        console.log(this.data);
    }
    /**
     * @param {number} i
     */
    get_last(i) {
        const actualIndex = (this.head - i + this.maxSize) % this.maxSize;
        console.log("actualIndex", actualIndex)
        return this.data[actualIndex];
    }
}

let log = new OrderLog(3);
log.record(123);
log.record(456);
log.record(789);

console.log(log.get_last(1)); // Output: 789
console.log(log.get_last(2)); // Output: 456

export default OrderLog;