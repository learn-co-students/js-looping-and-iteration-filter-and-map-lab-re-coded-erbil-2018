// Code your solution here:
function driversWithRevenueOver(list,reven){
  return list.filter((driver)=>driver.revenue > reven)
}

function driverNamesWithRevenueOver(list,reven){
  return driversWithRevenueOver(list,reven).map((driver)=> driver.name)
}


function exactMatch(list,prop){
  let myObj=prop;
  let min = Object.keys(prop)[0];
  
  return list.filter(
    function(driver){
      let result = false
      for (const key in prop){
        result = driver[key] === prop[key]
      }
      return result
    }
    )}
    
function exactMatchToList(list,prop){
  
  return exactMatch(list,prop).map((elem)=> elem.name)
   
}    



