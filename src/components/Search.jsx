import React from 'react'
import '../styles/search.css'
export default function search({dispatch}) {

    return (
        <>
            <div className="search_card">
                <div className="search_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
                <div className="search_input_container">
                    <input className='search_input_box' 
                        placeholder="Search Task"
                        onChange={(e) => dispatch({
                            type: 'SET_SEARCH_QUERY',
                            payload: e.target.value
                        })}
                        />
                </div>
            </div>
        </>
    )
}
