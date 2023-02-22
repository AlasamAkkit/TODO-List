//filter bar: all, active, completed, Option to clear all completed tasks.

import React, { useState } from 'react'

function FilterBar({ todos, setFilter, filter }) {
    const [filterOptions] = useState(["All", "Active", "Completed"]);

    const handleFilterChange = (option) => {
        setFilter(option);
    };

  return (
      <div>
        {filterOptions.map((option, index) => (
            <button
                key={index}
                onClick={() => handleFilterChange(option)}
                disabled={filter === option}
                className={filter === option ? "selected" : ""}
            >
                {option}
            </button>
        ))}
      </div>
      )
}

export default FilterBar;