const now = new Date();
const estTime = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = now.toLocaleDateString('en-US', options);
console.log(`Hello AI World! \nToday's date is: ${formattedDate}`);
console.log("Time is: " + estTime);

