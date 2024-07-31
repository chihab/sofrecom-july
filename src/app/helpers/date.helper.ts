import { formatDistance } from 'date-fns';

export function fromNow(date: Date) {
  return formatDistance(date, new Date(), {
    addSuffix: true,
  });
}
