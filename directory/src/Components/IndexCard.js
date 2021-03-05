import React from 'react'

const IndexCard = (props) => {
    
    //destructure stuff... using the word index in a component's name.. MISTAKE
    const {data, index} = props

    return (
        <div className="card">
            <div className="card-number">
                <h1>{data[index].id}/25</h1> 
            </div>
            <section className="personal-info">
                <h1 className="user-name">{data[index].name.first} {data[index].name.last}</h1>
                <h3>From: {data[index].city}, {data[index].country}</h3>
                <h3>Job Title: {data[index].title}</h3>
                <h3>Employer: {data[index].employer}</h3>
            </section>
            <div className="favorites">
               <h3>
                   <ol>Favorite Movies: {data[index].favoriteMovies.map(movie => <li>{movie}</li>)}</ol>
               </h3>
                
            </div>

        </div>
    )
}

export default IndexCard