import React from 'react'

export default function Result({ isError, resultMessage }) {
    return (
        <div className={`w-[300px] h-[100px] ${isError ? 'bg-red-700' : 'bg-green-500 '} text-white rounded-2xl flex items-center justify-center p-10 text-center`}>

            {
                resultMessage
            }

        </div>

    )
}