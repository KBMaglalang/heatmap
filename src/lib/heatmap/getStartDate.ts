type Props = {
  date: string;
  count: number;
};

/**
Retrieves the earliest date from an array of heatmap data.
@param {Props[]} heatmapData - An array of heatmap data objects.
@returns {Date | null} - The earliest date from the heatmap data, or null if the array is empty.
*/
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
