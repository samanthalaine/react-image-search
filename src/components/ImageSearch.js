import React from "react";
import { useState } from 'react'

function ImageSearch({searchText}) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit} class="w-full max-w-sm">
        <div class="flex items-center py-2">
          <input
            onChange={e => setText(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search images..."
            aria-label="search"
          />
          <button
            class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
