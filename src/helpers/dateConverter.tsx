export const formatIsoDateToDMHM = (isoDate: string, option: "DM"| "DMHM" | "HM" | "DMY" ="DMHM"): string => {
  const date = new Date(isoDate);

  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const hour = date.toLocaleString("en-US", { hour: "numeric", hour12: false });
  let minute = date.toLocaleString("en-US", { minute: "numeric" });

  minute = minute.length === 1 ? `0${minute}` : minute;

  switch (option) {
    case "DMHM":
      return `${day} ${month} ${hour}:${minute}`; 
    case "DM":
      return `${day} ${month}`; 
    case "HM":
      return `${hour}:${minute}`; 
    case "DMY":
      return `${day} ${month} ${year}`; 
  }
 
};

export const getIsoDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString();  
};

export const minToHours = (minutes:number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} h ${remainingMinutes} min`;
};
