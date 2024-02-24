export function seatDataMapping(data) {
  const ans = [];
  var temp = [];
  var temp1 = [];
  data.forEach((item, idx) => {
    temp1.push(item);
    if (idx % 2 === 1) {
      temp.push(temp1);
      temp1 = [];
    }
    if (idx % 8 === 7) {
      ans.push(temp);
      temp = [];
    }
  });

  if (temp.length > 0) ans.push(temp);
  return ans;
}

function formatTime(minutes, seconds) {
  // Add leading zeros if necessary
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

export function getTimeDifference(startDate, endDate) {
  // Calculate the difference in milliseconds
  let difference = endDate.getTime() - startDate.getTime();

  // If the difference is negative, it means endDate is before startDate
  if (difference < 0) {
    difference = -difference;
  }

  // Convert milliseconds to minutes and seconds
  const minutes = Math.floor(difference / 60000); // 1 minute = 60,000 milliseconds
  const seconds = Math.floor((difference % 60000) / 1000); // 1 second = 1000 milliseconds

  return formatTime(minutes, seconds);
}
