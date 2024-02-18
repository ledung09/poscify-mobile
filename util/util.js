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
