import React from 'react';

const SearchFilter = (props) => (
    <div className="filterContainer">
        <div>
            <label>Search:
                <input type="text" value={props.filters.text} placeholder="Search by make/model"
                onChange={(e) => (props.changeTextFilter(e.target.value))} />
             </label>
         </div>
        <div>
            <label>Filter By:  
                <select onChange={(e) => (props.changeSortFilter(e.target.value))}>
                    <option value="name">Name </option>
                    <option value="availability">Availability </option>
                </select>
            </label>
        </div> 
    </div>
);

export default SearchFilter;