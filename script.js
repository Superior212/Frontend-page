const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

function updateCurrentTime() {
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentTime = currentDate.toLocaleTimeString("en-US", { hour12: false, timeZone: "UTC" });

    currentDayElement.textContent = dayOfWeek;
    currentTimeElement.textContent = currentTime;
}


updateCurrentTime();

setInterval(updateCurrentTime, 1000);
