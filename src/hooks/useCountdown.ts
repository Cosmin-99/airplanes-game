import { useEffect, useState } from 'react';

export const useCountdown = (startDate: Date, endDate: Date) => {
  const [countDown, setCountDown] = useState(
    endDate.getTime() - startDate.getTime()
  );

    useEffect(() => {
      setCountDown(endDate.getTime() - startDate.getTime());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};