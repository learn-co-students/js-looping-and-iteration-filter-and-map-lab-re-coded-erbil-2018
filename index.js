// Code your solution here:
function driversWithRevenueOver (arr,sum) {
  return arr.filter(function (el) 
  {
  return el.revenue > sum;
  });
}
function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}
function driverNamesWithRevenueOver (arr, sum) {
  return driversWithRevenueOver(arr,sum).map(function (el) {
  return el.name;
    });
}
function exactMatchToList(arr,obj)
{
  return arr.filter(index => {
    let bool = false
    for(const key in obj)
     bool = index[key] === obj[key];
     return bool
  }).map(index => index.name)
}