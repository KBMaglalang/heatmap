import { DAYS } from '@/constants/heatmapText';

type DateDocument = {
  createdAt: string;
  dayOfWeek: string;
  description: string;
  title: string;
  weekOfYear: number;
};

/**
Organizes date data into a grouped structure for creating a series.
@param {DateDocument[]} documents - An array of date documents.
@returns {Array} - An array containing the organized series data.
*/
export const organizeDateData = (documents: DateDocument[]) => {
  // Initial structure
  const grouped: { [day: string]: { [week: number]: number } } = {};
  DAYS.forEach((day) => {
    grouped[day] = {};
  });

  // Group by dayOfWeek and weekOfYear
  documents?.forEach((doc) => {
    if (!grouped[doc.dayOfWeek][doc.weekOfYear]) {
      grouped[doc.dayOfWeek][doc.weekOfYear] = 0;
    }
    grouped[doc.dayOfWeek][doc.weekOfYear]++;
  });

  // Create the series
  const series = DAYS.map((day) => {
    const data = Array(52).fill(0);
    for (const week in grouped[day]) {
      data[parseInt(week) - 1] = grouped[day][parseInt(week)];
    }
    return { name: day, data };
  });

  return series;
};
