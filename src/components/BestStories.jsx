import React, {useState, useEffect} from 'react'
import {v4} from 'uuid';

function BestStories() {
    const [stories, setStories] = useState([])
    useEffect(() => {
        fetch("http://newsapi.org/v2/top-headlines?country=rs&category=health&pageSize=50&apiKey=96856bfaa1f84df08dd045a49a76f737")
        .then(res => res.json())
        // .then(result => console.log(result))
        .then(result => setStories(result.articles))
        .catch(err => {
	        console.log(err);
        });
    }, [])
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=96856bfaa1f84df08dd045a49a76f737
    // https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=96856bfaa1f84df08dd045a49a76f737
    // https://newsapi.org/v2/top-headlines?q=trump&apiKey=96856bfaa1f84df08dd045a49a76f737
    return (
        <>
        {
            stories.length && stories.map(story => (
               <div key={v4()} >
                   <p><a href={story.url} target='blank'>{story.title} </a></p>
                   <p>{story.description}</p>
                   <p>{story.publishedAt}</p>
                    <span>{story.author}</span>
                    <img src={story.urlToImage}></img>
               </div>
            ))
        }
        </>
    )
}

export default BestStories
