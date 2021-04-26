import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";

function Details() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/${id}`, {
        params: {
          fields:
            "id,title,artist_title,image_id,date_display,main_reference_number,exhibition_history,artist_display",
         
        },
      });
      setData(result.data);
    };
    fetchData();
  }, [id]);

  console.log(data.data);
  return (
    <div>
      {data.data !== undefined ? (
        <div className>
          <div className="flex w-11/12 my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="flex items-center w-full">
              <div className="w-full">
                <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                  <div
                    style={{ textAlign: "-webkit-center" }}
                    className="items-center text-center my-5"
                  >
                    <img
                      className="self-center items-center rounded"
                      lazy
                      src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`}
                      alt={data.data.alt_text}
                    />
                    <div>
                   
                  </div>
                  </div>
                </div>
                <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
                  <h1 className="text-gray-900 font-bold text-xl uppercase">
                    {data.data.title}
                  </h1>
                </div>
                <div className="text-gray-800 text-sm mb-6 mx-3 px-2">
                  {!data.data.artist_title ? (
                    <i> Autor desconhecido </i>
                  ) : (
                    data.data.artist_title
                  )}{" "}
                  <br />
                  <i className="text-gray-400"> {data.data.artist_display}</i>
                </div>
                <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
                  {data.data.exhibition_history}
                  <br />
                </div>
                <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2"></div>
                <div className="flex justify-start mb-4 border-t border-gray-100">
                  <div className="flex w-full mt-1 pt-2 pl-5">
                    <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="14px"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                    <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="14px"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </span>
                    <span className="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="14px"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Details;
