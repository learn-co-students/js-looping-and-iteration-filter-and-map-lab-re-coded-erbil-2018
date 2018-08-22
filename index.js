// Code your solution here:
function driversWithRevenueOver(driver, revenue)
{
  return driver.filter(function(items){
    return items.revenue > revenue
  });
}

function driverNamesWithRevenueOver(array, str)
{
  return driversWithRevenueOver(array, str).map(function(item){
    return item.name;
  });
}

function exactMatch(array, obj)
{
  return array.filter(function(item){
    for (const prop in obj)
    {
      if (item[prop] !== obj[prop]) return false;
    }
    return true;
  });
}


function exactMatchToList(array, obj)
{
 return exactMatch(array, obj).map(function(item){
    return item.name;
  });
}










