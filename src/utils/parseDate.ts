import { parse } from 'date-fns';

export const parseUpdatedDate = (dateString: string): Date => {
  return parse(dateString, 'dd-MM-yy HH:mm', new Date());
};
