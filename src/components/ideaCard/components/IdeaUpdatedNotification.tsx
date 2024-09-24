import { useState, useEffect } from 'react';

export const IdeaUpdatedNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible ? (
        <div className="absolute left-2 top-2 rounded-lg bg-blue-500 p-2 text-center text-xs text-white">
          Idea recently updated!
        </div>
      ) : null}
    </>
  );
};
