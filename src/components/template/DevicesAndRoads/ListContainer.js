
import React from 'react'

export default function ListContainer({ content, pagedList }) {

    const CardComponent = content.cardComponent

    return (
        <div className='px-5 grid grid-cols-1 md:grid-cols-2 gap-4'>

            {pagedList.map(item => (
                <div key={item.id} className='cursor-pointer hover:scale-[1.03] transition-all duration-500'>
                    <CardComponent {...item} />
                </div>
            ))}


        </div>
    )
}
