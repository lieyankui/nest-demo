import * as moment from 'moment';
import { DATETIME_PATTERN, DATE_PATTERN } from '../constants';

/**
 * @description: date format
 * @param {moment.MomentInput} date
 * @param {string} pattern default 'yyyy-MM-DD H:mm:ss'
 * @param {boolean} onlyDate default false
 * @return {string}
 */
export function format(
  date?: moment.MomentInput,
  pattern = DATETIME_PATTERN,
  onlyDate = false,
) {
  if (onlyDate) {
    pattern = DATE_PATTERN;
  }
  return moment(date || Date.now()).format(pattern);
}
