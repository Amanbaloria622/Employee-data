import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "./card";
import Shimmer from "./Shimmer";
import NoResults from "./NoResult";
import ErrorComponent from "./Error";

export const Data = () => {
  let [data, Setdata] = useState([]);
  let [page, setpage] = useState(1);
  let [search, setsearch] = useState("");
  let [lastSearchTerm, setLastSearchTerm] = useState("");
  let [newdata, setnewdata] = useState([]);
  let [totalPages, setTotalPages] = useState(2);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create timeout promise
      const timeoutPromise = new Promise(
        (_, reject) => setTimeout(() => reject(new Error("timeout")), 10000) // 10 second timeout
      );

      // Create fetch promise
      const fetchPromise = fetch(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      // Race between fetch and timeout
      const value = await Promise.race([fetchPromise, timeoutPromise]);

      if (!value.ok) {
        throw new Error("server");
      }

      const readdata = await value.json();
      console.log(readdata);

      Setdata(readdata.data);
      setnewdata(readdata.data);
      setTotalPages(readdata.total_pages);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err.message === "timeout") {
        setError("timeout");
      } else if (
        err.name === "TypeError" ||
        err.message === "Failed to fetch"
      ) {
        setError("network");
      } else if (err.message === "server") {
        setError("server");
      } else {
        setError("loading");
      }

      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleRetry = () => {
    fetchData();
  };
  const handleSearch = () => {
    console.log(search);
    let list = newdata.filter((data) => {
      return data.first_name.toLowerCase().includes(search.toLowerCase());
    });
    Setdata(list);
    setLastSearchTerm(search);
    setsearch("");
  };

  // Show error component if there's an error
  if (error) {
    return <ErrorComponent errorType={error} onRetry={handleRetry} />;
  }

  // Show shimmer while loading
  if (loading) {
    return <Shimmer />;
  }

  return data.length === 0 && newdata.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="maindiv">
        {/* search bar */}
        <div>
          <div>
            <input
              type="text"
              placeholder="search user"
              value={search}
              onChange={(a) => {
                setsearch(a.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            ></input>
          </div>
          <div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div>
            <button
              onClick={() => {
                let AllData = newdata.filter((data) => {
                  return data;
                });
                Setdata(AllData);
                setLastSearchTerm("");
              }}
            >
              Show All
            </button>
          </div>
        </div>
        {/* data show */}

        <div>
          {data.length === 0 && lastSearchTerm ? (
            <NoResults searchTerm={lastSearchTerm} />
          ) : (
            data.map((e) => {
              return <Card key={e.id} detail={e}></Card>;
            })
          )}
        </div>

        {/* pagination button
         */}

        <div>
          <button
            disabled={page === 1}
            onClick={() => {
              if (page === 1) {
                return;
              } else {
                setpage((page) => page - 1);
              }
            }}
          >
            Previous
          </button>
          <p>
            {page} of {totalPages}
          </p>
          <button
            disabled={page >= totalPages}
            onClick={() => {
              if (page === 2) {
                return;
              } else {
                setpage((page) => page + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
