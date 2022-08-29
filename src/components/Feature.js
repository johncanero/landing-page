import React from 'react'

const Feature = () => {
  return (
    <div>
        <section id='features'>
            {/* Flex Container */}
            <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
                {/* What's Different */}
                <div className='flex flex-col space-y-12 md:w-1/2'>
                    <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
                        What's differet about Manage?
                    </h2>

                    
                </div>
                
                {/* Numbered List */}
                <div>
                    
                </div>
            </div>
        </section>

    </div>
  )
}

export default Feature