// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(name){
    if(name.revenue > revenue){
      return {name: name.name, revenue: name.revenue};
    }
  })
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(name){
    return name.name;
  })
}

function exactMatch(drivers,obj){
  return drivers.filter(function(driver){
    for(const key in obj){
      if(obj[key] === driver[key]){
        return driver;
      }
    }
  })
}

function exactMatchToList(drivers,obj){
  return exactMatch(drivers,obj).map(function(driver){
    return driver.name;
  })
}






