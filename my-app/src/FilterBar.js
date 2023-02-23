import React from 'react'

function FilterBar({ currentFilter, setFilter }) {
    const filters = ["All", "Active", "Completed"];

    const handleFilterClick = (filter) => {
        setFilter(filter);
    };

  return (
    <div className="filter-bar">
        {filters.map(filter => (
            <button
                key={filter}
                className={filter === currentFilter ? 'active' : ''}
                onClick={() => handleFilterClick(filter)}
            >
                {filter}
            </button>
        ))}
    </div>
  );
}

export default FilterBar;