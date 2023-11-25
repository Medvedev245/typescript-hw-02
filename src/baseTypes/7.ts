/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = "monday",
  tuesday = "tuesday",
  wednesda = "wednesda",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

function isWeekend(day: Days): boolean {
  return day === Days.saturday || day === Days.sunday;
}
