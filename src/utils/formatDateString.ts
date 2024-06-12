export const useFormatDate = (dateStr: string) => {
  const dateArr = dateStr.split('/') // [dd, mm, yyyy]
  const month = dateArr[1]

  switch (month) {
    case '01':
      dateArr[1] = ('jan')
      break
    case '02':
      dateArr[1] = ('feb')
      break
    case '03':
      dateArr[1] = ('mar')
      break
    case '04':
      dateArr[1] = ('apr')
      break
    case '05':
      dateArr[1] = ('may')
      break
    case '06':
      dateArr[1] = ('jun')
      break
    case '07':
      dateArr[1] = ('jul')
      break
    case '08':
      dateArr[1] = ('aug')
      break
    case '09':
      dateArr[1] = ('sep')
      break
    case '10':
      dateArr[1] = ('oct')
      break
    case '11':
      dateArr[1] = ('nov')
      break
    case '12':
      dateArr[1] = ('dec')
      break
  }

  return dateArr.join('-')
}

export const useFormatDateTime = (dateStr: string) => {
  const date = new Date(dateStr).toLocaleDateString()
  const time = new Date(dateStr).toLocaleTimeString()

  const dateTime = `${useFormatDate(date)} ${time}`

  return dateTime
}
