type Props = {
  date: string;
  count: number;
};

/**
Retrieves the latest date from an array of heatmap data.
@param {Props[]} heatmapData - An array of heatmap data objects.
@returns {Date | null} - The latest date from the heatmap data, or null if the array is empty.
*/
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
