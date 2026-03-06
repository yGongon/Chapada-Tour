
/**
 * Parses a date range string like "07/03 a 08/03/2026" into start and end Date objects.
 * Assumes the year is at the end of the string.
 */
export const parseDateRange = (range: string): { start: Date; end: Date } | null => {
  try {
    const parts = range.split(' a ');
    if (parts.length !== 2) return null;

    const endPart = parts[1].trim(); // "08/03/2026"
    const startPart = parts[0].trim(); // "07/03"

    const [endDay, endMonth, endYear] = endPart.split('/').map(Number);
    const endDate = new Date(endYear, endMonth - 1, endDay, 23, 59, 59);

    // If startPart doesn't have a year, use the endYear
    const startParts = startPart.split('/');
    let startDate: Date;
    if (startParts.length === 3) {
      const [sDay, sMonth, sYear] = startParts.map(Number);
      startDate = new Date(sYear, sMonth - 1, sDay, 0, 0, 0);
    } else {
      const [sDay, sMonth] = startParts.map(Number);
      startDate = new Date(endYear, sMonth - 1, sDay, 0, 0, 0);
    }

    return { start: startDate, end: endDate };
  } catch (e) {
    console.error('Error parsing date range:', range, e);
    return null;
  }
};

/**
 * Checks if a date range is in the past relative to a reference date.
 */
export const isPastDate = (range: string, referenceDate: Date = new Date()): boolean => {
  const dates = parseDateRange(range);
  if (!dates) return true; // Treat invalid as past
  return dates.end < referenceDate;
};

/**
 * Formats a date to DD/MM/YYYY
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR');
};
