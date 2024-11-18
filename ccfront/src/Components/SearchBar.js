import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
    return (
        <div>
            <form className="flex items-center bg-white rounded-full border border-gray-300 shadow-sm max-w-md w-full p-2 ml-72 mt-5">
                <Search className="text-gray-400 mx-2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow focus:outline-none bg-transparent text-gray-700 px-2"
                />
                <button
                    type="submit"
                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full transition-colors duration-200"
                >
                    Search
                </button>
            </form>

        </div>
    )
}

export default SearchBar
