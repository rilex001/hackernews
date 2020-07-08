import React, {useState, useEffect} from 'react'
import {v4} from 'uuid';

function BestStories() {
    const [stories, setStories] = useState([])
    const [country, setCountry] = useState('us')
    const [category, setCategory] = useState('general')
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=96856bfaa1f84df08dd045a49a76f737`)
        .then(res => res.json())
        .then(result => setStories(result.articles))
        .catch(err => {
	        console.log(err);
        });
    }, [country, category])

    return (
        <>
        <div className='selectcontainer'>
            <div>
                <label htmlFor="country">Country:</label>
                <select id="country" value={country} onChange={e => setCountry(e.target.value)} >
                    <option value="us">United States</option>
                    <option value="rs">Serbia</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="cn">China</option>
                    <option value="ru">Russia</option>
                    <option value="jp">Japan</option>
                    <option value="sa">Spain</option>
                    <option value="it">Italy</option>
                    <option value="eg">United Kingdom</option>
                    <option value="br">Brazil</option>
                    <option value="tr">Turkey</option>
                    <option value="in">India</option>
                    <option value="ca">Canada</option>
                    <option value="ua">United Arab Emirates</option>
                </select>
            </div>

            <div>
                <label htmlFor="category">Category: </label>
                <select id="category" value={category} onChange={e => setCategory(e.target.value)} >
                    <option value="general">General</option>
                    <option value="business">Bussiness</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="tehnology">Tehnology</option>
                </select>
            </div>
        </div>

        {
            
            stories.length && stories.map(story => (
                <div key={v4()} className='container'>
                   <div className='picture'>
                       { story.urlToImage ? (
                            <img src={story.urlToImage} alt='mrk'></img>
                       ) : null } 
                    </div>
                    <div className='info'>
                        <p className='title'><a href={story.url} target='blank'>{story.title} </a></p>
                        <p className='description'>{story.description}</p>
                        <div className='containerfooter'>
                            {story.author  ? (
                                <p className='author'>By: <b>{story.author}</b></p>
                            ) : null }
                            <p className='date'>{story.publishedAt}</p>
                        </div>
                    </div>
                    
                </div>
            ))
        }
        </>
    )
}

export default BestStories
