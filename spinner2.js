// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinSpeed = 100;
const spinParts = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\\   ',];
// const spinLoop = setInterval(() => {
for (let i = 0;i < spinParts.length;i = i + 1) {
  // console.log(spinParts[i]);
  spinSpeed += 300;
  setTimeout(() => {
    process.stdout.write(spinParts[i]);
    // console.log(spinParts[i]);
  }, spinSpeed);
}
// })

/*
this code works but not as clean
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1700);
*/