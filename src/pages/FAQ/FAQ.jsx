import React from 'react'
import Question from './Question.json'

function FAQ() {
  return (
    <>
    <section className='p-12 bg-green-200 '>

        <h3 className='ml-10 mt-10 p-2 h-12 w-36 bg-green-500 text-white rounded-full text-center text-2xl'>FAQ's</h3>

        <h2 className='text-orange-400 text-[100px] font-semibold'>Got Any Question?</h2>
        <span className='ml-3'>Find answer to the most asked question about GDSC WOW Pune event</span>

        <div className='flex flex-col md:flex-col items-center justify-center w-full'>
            <ul className='w-[90%] max-w-[1200px] mx-auto'>
                {/* Question */
                Question["FAQ"].map((Item, Index) => (
                    <div className='flex bg-white rounded-xl p-5 my-3 w-full outline justify-between'>
                        <h4 className='px-5'>{Item["Question"]}</h4>
                        <spam className="flex justify-end mr-5" onclick={()=>{console.log("drop")}}>Drop</spam>
                    </div>
                ))
                }
                
            </ul>

        </div>
    </section>
    </>
  )
}

export default FAQ