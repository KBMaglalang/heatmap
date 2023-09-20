type Props = {
  date: string;
  count: number;
};

export const getStartDate = (heatmapData: Props[]) => {
  // check if the array is empty or not
  if (heatmapData.length === 0) {
    return null;
  }

  // go through the array and find the earliest date
  const earliestDate = heatmapData
    .map((item) => item.date)
    .reduce((a, b) => {
      return a < b ? a : b;
    });

  return earliestDate;
};
