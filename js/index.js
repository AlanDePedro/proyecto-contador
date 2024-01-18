const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 10);
launchDate.setHours(launchDate.getHours() + 10);
launchDate.setMinutes(launchDate.getMinutes() + 10);
launchDate.setSeconds(launchDate.getSeconds() + 10);

const countdown = () => {
  const now = new Date();
  const diffMs = launchDate - now;
  const diffDays = Math.floor(diffMs / 86400000);
  const diffHrs = Math.floor(diffMs / 3600000) % 24;
  const diffMins = Math.floor(diffMs / 60000) % 60;
  const diffSecs = Math.floor(diffMs / 1000) % 60;

  document.getElementById("days").innerText = diffDays;
  document.getElementById("hours").innerText = diffHrs;
  document.getElementById("minutes").innerText = diffMins;
  document.getElementById("seconds").innerText = diffSecs;

  if (diffMs < 0) {
    clearInterval(intervalId);
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
};

const intervalId = setInterval(countdown, 1000);

countdown();