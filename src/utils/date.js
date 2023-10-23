const calculateFetchDate = (offset) => {
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + offset);

  const dayOfMonth = currentDate.getDate(); // Get the day of the month (1-31)
  const month = currentDate.getMonth() + 1; // Get the month (0-11, so add 1 to get 1-12)
  const year = currentDate.getFullYear(); // Get the full year (e.g., 2023)

  return `${dayOfMonth}.${month}.${year}`;
};

// Helper function to get the suffix for the day (e.g., st, nd, rd, or th)
const getSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatDate = (date) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  const [weekday] = formattedDate.split(", ");

  return weekday;
};

const getFormattedDay = (date) => {
  const day = date.getDate();
  const suffix = getSuffix(day);
  const month = date.toLocaleString("default", { month: "long" });

  return `${day}${suffix} ${month}`;
};

// Function to format a given date and calculate fetch date
export const calculateDate = (offset) => {
  const currentDate = new Date();
  const targetDate = new Date();
  targetDate.setDate(currentDate.getDate() + offset);

  return {
    weekday: formatDate(targetDate),
    monthDay: getFormattedDay(targetDate),
    fetchDate: calculateFetchDate(offset),
  };
};
