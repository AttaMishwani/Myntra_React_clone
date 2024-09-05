import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/ItemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

function FetchItems() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemActions.addInitialItems(items[0]));
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch request was aborted");
        } else {
          console.error("Fetch error:", error);
          // You can also dispatch an error action here if needed
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return (
    <>
      <div>
        {/* fetch done : {fetchStatus.fetchDone}
        Currenntly Fetching : {fetchStatus.currentlyFetching} */}
      </div>
    </>
  );
}

export default FetchItems;
