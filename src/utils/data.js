export const check_data = dataPrev => {
  // var date1 = new Date(formatMMDDAAAA)
  var date1 = new Date(dataPrev)
  var date2 = new Date('12/12/2022')
  var timeDiff = date2.getTime() - date1.getTime()
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  return diffDays
}

export const convertDataInput = data => {
  let data_eua = data
  let data_br = data_eua.split('-').reverse().join('/')
  var formatDDMMAAAA = data_br
  var datearray = formatDDMMAAAA.split('/')
  var formatMMDDAAAA = datearray[1] + '/' + datearray[0] + '/' + datearray[2]
  return formatMMDDAAAA
}
