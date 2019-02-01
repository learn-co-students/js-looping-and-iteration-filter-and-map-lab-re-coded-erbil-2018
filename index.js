
function driversWithRevenueOver(drivers, income){
  return drivers.filter(function (driver) {
    return driver.revenue > income});
		}
		
	function driverNamesWithRevenueOver (drivers, income) {
  return driversWithRevenueOver(drivers, income)
   .map(function (driver) {
      return driver.name;
    });
}
function exactMatch(Driver, match) {
  return Driver.filter(function (driver) {
       for (var val in match) {
      var matches = driver[val] === match[val];
    }    return matches;  });
			}
			function exactMatchToList (Driver, match) {
  return exactMatch(Driver, match)
    .map(function (driver) {
      return driver.name; });
		}