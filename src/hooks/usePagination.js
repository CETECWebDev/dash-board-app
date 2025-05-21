import React, { useEffect, useState } from 'react'

export default function usePagination(itemPerPage, list) {

    const totalPages = Math.ceil(list.length / itemPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentPagedList , setCurrentPagedList] = useState([])


    useEffect(()=> {

        const startIndex = (currentPage - 1) * itemPerPage;
        const endIndex = startIndex + itemPerPage;
        setCurrentPagedList(list.slice(startIndex, endIndex))

    } , [currentPage])
   
    return [ totalPages , currentPagedList , currentPage , setCurrentPage ]

}
