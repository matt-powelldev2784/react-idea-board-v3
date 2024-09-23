import { useState, useEffect } from 'react';
import { differenceInSeconds, parse } from 'date-fns';

const useIdeaUpdatedRecently = (lastUpdated: string) => {
  const [isUpdatedRecently, setIsUpdatedRecently] = useState(false);

  useEffect(() => {
    const now = new Date();

    const parsedLastUpdated = parse(
      lastUpdated,
      'dd-MM-yy HH:mm:ss',
      new Date(),
    );

    const secondsDifference = differenceInSeconds(now, parsedLastUpdated);

    // If the idea was updated within the last 60 seconds, updated recently is true
    const updatedRecently = secondsDifference <= 60 ? true : false;

    setIsUpdatedRecently(updatedRecently);
  }, [lastUpdated]);

  return isUpdatedRecently;
};

export default useIdeaUpdatedRecently;
