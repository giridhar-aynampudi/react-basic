import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const data = useLoaderData()

    
    const [data,setData] = React.useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/giridhar-aynampudi')
        .then((response) => response.json())
        .then(data => setData(data))
    },[])
    

    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github follwers : {data?.following || 0}
        <img src={data?.avatar_url} alt='user' className='rounded-full w-20 h-20 mx-auto' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/giridhar-aynampudi')
    return response.json()
}