import React from "react";
import { NavLink } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl uppercase">
          {data.title}
        </h1>
        <p className="text-gray-600 text-sm mt-1">Data: {data.date_display}</p>
      </div>
      {data.image_id ? (
        <img
          className="h-56 w-full object-cover mt-2"
          src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
          alt="Art cover"
        />
      ) : (
        <img
          className="h-56 w-full object-cover mt-2"
          src={`https://via.placeholder.com/800?text=No+Image+Avaliable`}
          alt="Art cover"
        />
      )}
      <div className="flex items-center justify-between px-4 py-2 my-0 bg-gray-800">
        <h1 className="text-gray-200">
          {!data.artist_title ? <i> Autor desconhecido </i> : data.artist_title}
        </h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          <NavLink to={`/details/${data.id}`} className="">
            Ver detalhes
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Card;
