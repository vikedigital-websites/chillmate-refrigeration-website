import React, { useEffect, useState } from "react";

type Props = {};

function useClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

export default useClient;
