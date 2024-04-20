import React, { useEffect, useRef, useState } from "react";

type Props = {};

function useUserTimeZone() {
    const [tz, setTz] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0] || "");
    useEffect(() => {
        setTz(Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0]);
    }, []);
    return tz;
}

export default useUserTimeZone;
