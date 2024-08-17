import React from 'react'

function Card({username = "John Doe", post = "Intern", image = "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/german-shepherd.jpg", myArr = []}) {
    // console.log('props:', props)
  return (
    <div>
        {/* <img src="https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg" alt="" srcset="" />
        <h1 className="text-2xl bg-green-500 p-3 rounded"> A card of photos</h1>
        <p>This is me learning REACT</p> */}
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512"></img>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            <div className='text-xl bg-red-500 rounded-md'>
                {myArr}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card