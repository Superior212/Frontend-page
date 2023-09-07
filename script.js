const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentTime = currentDate.toLocaleTimeString("en-US", { hour12: false, timeZone: "UTC" });

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;