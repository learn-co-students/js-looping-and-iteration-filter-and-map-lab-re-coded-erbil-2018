// Code your solution here:

function driversWithRevenueOver(drivers,revenue){
  const filterdDrivers = []
  for (const driverInfo of drivers){
     if(driverInfo.revenue > revenue){
       filterdDrivers.push(Object.assign({},driverInfo))
     }
  }
  return filterdDrivers
}

function driverNamesWithRevenueOver(drivers,revenue){
  const filterdDrivers = []
  for (const driverInfo of drivers){
     if(driverInfo.revenue > revenue){
       filterdDrivers.push(driverInfo.name)
     }
  }
  return filterdDrivers
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

function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}