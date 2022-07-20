import React from 'react';

const Results = ({recipes}) => {
    return (
        <div className='recipes'>
        {recipes !== [] && recipes.map(recipe =>
            <h2>{recipe.recipe.label}</h2>   )}
        
        </div>
    );
};

export default Results;

// this will have JS because this is what appears on click, we need to look through the API and populate this area with the results of that search, this will be done by pushing the handle click in to here(i think) and then looping through the array for the results that meet the searches needs