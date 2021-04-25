import { useEffect, useState } from "react";
import { api } from "../api/api";
import Card from "../components/card";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("/", {
        params: {
          fields:
            "id,title,artist_title,image_id,date_display,main_reference_number",
          limit: 36
        },
       
      });
      setData(result.data);
    };
    fetchData();
  }, []);

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
          {data.data != null ? (
            data.data.map((item) => (
              <div className="my-5">
                <Card data={item} />
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </main>
    </div>
  );
}
