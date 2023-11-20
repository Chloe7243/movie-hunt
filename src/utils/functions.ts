export const getDateYear = (date: string) => {
  const dateValue = new Date(date);
  return dateValue.getFullYear().toString();
};

export const getDate = (date: string) => {
  const dateValue = new Date(date);
  console.log(dateValue);
  return dateValue.toLocaleDateString("en-us", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  });
};

export const modifyTime = (time: number) => {
  let modifiedTime = "";
  if (time >= 60) {
    const hours = Math.trunc(time / 60);
    modifiedTime = `${hours} ${hours > 1 ? "hours" : "hour"} ${
      time % 60
    } minutes`;
  } else modifiedTime = `${time} minutes`;

  return modifiedTime;
};

export const modifyNumber = (data: number): string => {
  switch (true) {
    case data > 999 && data < 99999:
      return `${(data / 1000).toFixed(1)}K`;
    case data > 999999:
      return (data / 1000000).toFixed(1) + "M";
    case data > 999999999:
      return (data / 1000000).toFixed(1) + "B";
    default:
      return data?.toString();
  }
};

