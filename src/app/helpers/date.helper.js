import { isAfter, isValid, formatDistance } from 'date-fns';
import { isNumber } from './utils.helper';

export const getPeriod = (start, end = new Date()) => {
  if (!start
    || isAfter(start, end)
    || !isValid(start)
    || !isValid(end)
  ) return null;

  return formatDistance(start, end);
};
