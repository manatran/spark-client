export const utils = {
  convertKtoC(deg) {
    return Math.floor(deg - 273.15);
  },
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  getDay(day) {
    switch (day) {
      case 1:
        return `Monday`;
        break;
      case 2:
        return `Tuesday`;
        break;
      case 3:
        return `Wednesday`;
        break;
      case 4:
        return `Thursday`;
        break;
      case 5:
        return `Friday`;
        break;
      case 6:
        return `Saturday`;
        break;
      case 7:
        return `Sunday`;
        break;
      default:
        return ``;
        break;
    }
  },
  getMonth(month) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    return months[month];
  }
}