export const timer1 = (callback) => {
    setTimeout(() => {
        callback();
    }, 25000);
}