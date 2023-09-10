import { useEffect } from "react";

function useMount(func) {
  useEffect(
    () => func(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}

export default useMount;
