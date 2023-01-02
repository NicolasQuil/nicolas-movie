import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Rating } from '@mui/material'
import { StarHalf } from '@mui/icons-material';

function Page2() {

  const param = useParams()
  const nav = useNavigate()
  console.log(param.id);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const doApiInfo = async () => {
    setLoading(true)
    let url = `https://www.omdbapi.com/?i=${param.id}&apiKey=d592be1f`;
    const { data } = await axios.get(url)
    console.log(data);
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    doApiInfo()
  }, [])

  return (
    <div>
      {!data ? <p className='text-center'>No info about this Movie...</p> :
        <div className=' text-center mt-[20px]'> {loading ? <p>Loading...</p> : <div>
          <img className='m-auto  rounded-[50px] h-60  transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 hover: duration-300 ...' src={data.Poster}></img>
          <p className='mt-[10px]'><span className='text-red-500  hover:text-red-400'>Title:</span>{data.Title}.</p>
          <p> <span className='text-red-500 hover:text-red-400'>Actors:</span>{data.Actors}.</p>
          <p> <span className='text-red-500 hover:text-red-400'>Country:</span>{data.Country}.</p>
          <p> <span className='text-red-500  hover:text-red-400'>Dvd:</span>{data.DVD}.</p>
          <p> <span className='text-red-500 hover:text-red-400'>Director:</span>{data.Director}.</p>
          <p> <span className='text-red-500 hover:text-red-400'>Genre:</span>{data.Genre}.</p>
          <p> <span className='text-red-500 hover:text-red-400'>Language:</span>{data.Language}.</p>
          <p className='px-[100px]'> <span className='text-red-500 hover:text-red-400'>Plot:</span>{data.Plot}</p>
          <p><span className='text-red-500  hover:text-red-400'>Writer:</span>{data.Writer}.</p>
          <p> <span className='text-red-500 hover:text-red-400'>Rating:</span>{data.imdbRating}.</p>

          <div>
            <Rating
              name="text-feedback"
              value={data.imdbRating}
              readOnly
              max={10}
              precision={0.5}
              emptyIcon={<StarHalf className='text-white' style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
          </div>
          <button onClick={() => {
            nav(-1)
          }}
            className=" shadow appearance-none  rounded-[50px] mt-[20px]  py-2 px-4 bg-red-300  leading-tight focus:outline-none focus:shadow-outline  hover:bg-red-500 focus:bg-white text-black">Back To List</button>
        </div>
        }</div>}
    </div>
  )
}

export default Page2