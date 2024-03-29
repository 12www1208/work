export default function getMasDat(Year, Month, Day) {
    const dayInMonth = new Date(Year, Month + 1, 0).getDate()
    const frisDayOfMonth = new Date(Year, Month, 0).getDay()
    let weeks = []
    let day = 1
    for (let week = 0; week < 6; week++) {
        weeks[week] = []
        for(let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            if (week === 0 && dayOfWeek < frisDayOfMonth || day > dayInMonth ) {
                weeks[week][dayOfWeek] =  {
                    day: '',
                    rightDay: false
                }
            }
            else {
                weeks[week][dayOfWeek] = {
                    day,
                    rightDay: day == Day ? true : false
                }
                day++
            }
        }
    }
    console.log(weeks)
    return weeks
}

