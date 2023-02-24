import React from 'react'

function Filters({ handleFilterChange }) {
  return (
    <div>
        <div>
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Active")}>Active</button>
        <button onClick={() => handleFilterChange("Completed")}>
          Completed
        </button>
      </div>
    </div>
  )
}

export default Filters