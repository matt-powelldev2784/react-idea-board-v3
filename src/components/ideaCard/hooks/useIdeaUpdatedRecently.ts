import { useState, useEffect } from 'react';
import { differenceInSeconds, format } from 'date-fns';

const useIdeaUpdatedRecently = (lastUpdated: string) => {
  const [isUpdatedRecently, setIsUpdatedRecently] = useState(false);

  useEffect(() => {
    const now = format(new Date(), 'dd-MM-yy HH:mm:ss');
    const secondsDifference = differenceInSeconds(now, lastUpdated);
    // If the idea was updated within the last 20 seconds, updated recently is true
    const updatedRecently = secondsDifference <= 20 ? true : false;

    setIsUpdatedRecently(updatedRecently);
  }, [lastUpdated]);

  return isUpdatedRecently;
};

export default useIdeaUpdatedRecently;
