import React from 'react';

export const ResultsBox = (props) => (
    <div>
      <span>
        <a 
          href={props.href} 
          target="_blank">
          {props.title}
        </a>
        <button 
          type="button" 
          className="btn btn-default">
          Save
        </button>
      </span>
    </div>
)