export const check_data = (dataPrev, dataDone) => {
  var date1 = new Date(dataPrev)
  var date2 = new Date('12/10/2022')
  var timeDiff = date2.getTime() - date1.getTime()
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  return diffDays
  // alert(diffDays)
}
