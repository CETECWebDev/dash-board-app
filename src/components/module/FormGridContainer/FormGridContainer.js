import React from 'react'
import FormItem from '../FormItem/FormItem'

export default function FormGridContainer({content , register , clickHanlder}) {
    return (
        <div className='w-full grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 mb-10'>

            {
                content.formItems.map((item, index) => {
                    return <FormItem key={index} register={register} {...item} clickHanlder={clickHanlder} />
                })
            }

        </div>

    )
}
