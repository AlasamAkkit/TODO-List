//filter bar: all, active, completed, Option to clear all completed tasks.

import React from 'react'

function FilterBar({ setFilter, filter }) {

    const handleFilterChange = (option) => {
        setFilter(option);
    };

  return (
      <div className="filter-bar">
        <button
            className={filter ==='All' ? 'Active' : ''}
            onClick={() => handleFilterChange('All')}
        >
            All
        </button>
        <button
            className={filter ==='Active' ? 'Active' : ''}
            onClick={() => handleFilterChange('ACtive')}
        >
            Active
        </button>
        <button
            className={filter ==='Completed' ? 'Active' : ''}
            onClick={() => handleFilterChange('Completed')}
        >
            Completed
        </button>
        
      </div>
      )
}

export default FilterBar;