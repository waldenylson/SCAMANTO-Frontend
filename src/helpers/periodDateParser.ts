import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function parsePeriod(periods: Array<any>): any {
  const parsedPeriods = periods.map(period => {
    const startDate = format(new Date(period.start_date), 'dd/MM/uuuu');
    const endDate = format(new Date(period.end_date), 'dd/MM/uuuu');

    const startTime = format(new Date(period.start_date), 'HHmm');
    const endTime = format(new Date(period.end_date), 'HHmm');

    if (startDate === endDate) {
      return {
        id: period.id,
        date: startDate,
        time: `${startTime}Z às ${endTime}Z`,
      };
    }

    return {
      id: period.id,
      date: `${startDate} a ${endDate}`,
      time: `${startTime}Z às ${endTime}Z`,
    };
  });

  return parsedPeriods;
}
