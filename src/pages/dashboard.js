import { useEffect, useState } from "react";
import { api } from "../api/api";
import Card from "../components/card";

export default function Dashboard() {
  const [data, setData] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("/", {
        params: {
          fields:
            "id,title,artist_title,image_id,date_display,main_reference_number",
          limit: 36,
        },
      });
      setData(result.data.data);
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    const result = await api.get("/", {
      params: {
        fields:
          "id,title,artist_title,image_id,date_display,main_reference_number",
        limit: 36,
        page: page+1,
      },
    });
    const newData = result.data.data;
    setData( arr => [...arr, ...newData]);
    setPage(page+1);
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sua dose diária de arte:
          </h1>
        </div>
      </header>
      <main>
        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {data.length > 0 ? (
            data.map((item) => (
              <div className="my-5">
                <Card data={item} />
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </main>

      <div className="px-10 pb-10">
        <button
          onClick={fetchMoreData}
          class="inline-block p-3 text-center text-white transition bg-gray-800 rounded-full shadow ripple hover:shadow-lg hover:bg-purple-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
