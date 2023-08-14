export const transformDate = (inputDate: string) => {
  // Convert the input date to a Date object
  const dateObj = new Date(inputDate);

  // Extract the date, month and year from the date object
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Months range from 0 to 11. So, adding 1 to get 1-12.
  const year = dateObj.getFullYear();

  // Combine date, month and year to get the desired format | Output: 27/07/2023
  const formattedDate = `${date.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return formattedDate;
};
