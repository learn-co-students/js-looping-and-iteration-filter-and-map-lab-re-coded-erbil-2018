// Code your solution here:
function driversWithRevenueOver(driversArray,revenue)
{
  let copyArray =[];
  
  for(var driver of driversArray)
  {
    if(driver.revenue>revenue)
     copyArray.push(driver)
  }
  return copyArray;
}
function driverNamesWithRevenueOver(driversArray,revenue)
{
  let copyArray=[];
  
  for(var driver of driversArray)
   {
     if(driver.revenue>revenue)
      copyArray.push(driver.name);
   }
   return  copyArray;
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

function exactMatchToList(arr,obj)
{
  return arr.filter(index => {
    let bool = false
    for(const key in obj)
     bool = index[key] === obj[key];
     return bool
  }).map(index => index.name)
}