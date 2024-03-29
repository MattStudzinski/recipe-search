import React from 'react';
import Search from './search/Search';
import Results from './results/Results';
import Card from './UI/Card';


const Home = ({search,setSearch,getapi,recipes}) => {

    const handleChange = (event) => {
        setSearch(event.target.value)

    }

    

    const handleSubmit = (event) => {
        event.preventDefault()
        getapi()

    }
    
    return (
        <div>
            <h1 className='title'>Recipe Generator</h1>
            <Search
            handleChange= {handleChange}
            handleSubmit= {handleSubmit}
            search= {search} />
            <Card>
            <Results 
        recipes={recipes}/>
        </Card>
        </div>
    );
};

export default Home;