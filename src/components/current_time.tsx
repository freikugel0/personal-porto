import { format } from "date-fns";
import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <>{format(date, "hh:mm:ss a")}</>;
};

export default CurrentTime;
