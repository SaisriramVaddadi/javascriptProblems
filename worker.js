// worker.js
self.onmessage = function(e) {
    console.log('Message received from main script');
    const result = e.data[0] * e.data[1];
    self.postMessage(result);
}