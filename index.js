// Code your solution here:
function driversWithRevenueOver(drivers,rev){
   return drivers.filter(function(driver){
   	  return driver.revenue > rev
   })
}
function driverNamesWithRevenueOver(drivers,rev){
     return driversWithRevenueOver(drivers,rev).map(function(ele){
     		return ele.name
     })
}
function exactMatch(drivers, attr){
	return drivers.filter(driver => {
		for(const key in attr){
			return driver[key] === attr[key]
		}
	})
}
function exactMatchToList(drivers, attr){
	return exactMatch(drivers, attr).map(driver => {return driver.name})
}
