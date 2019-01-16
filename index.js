// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
let x = drivers.filter(function (c) {
  return c.revenue >= revenue

})
return x
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let y =[]
let x = drivers.filter(function (c) {
  if (revenue <= c.revenue){
    y.push(c.name)
  }else {
    []
  }

})
return y
}

function exactMatch(drivers, key) {

  let x = drivers.filter(function (c) {
  let y =''
   if (key.name === c.name){
    y = c.name
  }else if ( key.revenue === c.revenue ){
    y = c.revenue
  }
  return  y
  })
  return x
  }

  function exactMatchToList(drivers, key) {
let y =[]
      let x = drivers.filter(function (c) {

       if (key.name === c.name){
        y.push(c.name)
      }else if ( key.revenue === c.revenue ){
        y.push(c.name)
      }

      })
      return y
  }
