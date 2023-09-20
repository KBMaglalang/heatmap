type Props = {
  date: string;
  count: number;
};

export const getEndDate = (heatmapData: Props[]) => {
  // check if the array is empty or not
  if (heatmapData.length === 0) {
    return null;
  }

  // go through the array and find the latest date
  const latestDate = heatmapData
    .map((item) => item.date)
    .reduce((a, b) => {
      return a > b ? a : b;
    });

  return latestDate;
};
