const mon = "월요일";
const tue = "화요일";
const wed = "수요일";
const thu = "목요일";
const fri = "금요일";
const sat = "토요일";
const sun = "일요일";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];
const somethingArray = [1, 2, "abc", false, null, true, undefined, "hello"];

console.log(daysOfWeek, somethingArray);

// Get item from array
console.log(daysOfWeek[0]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);
