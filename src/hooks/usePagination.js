import { useEffect, useState } from 'react';

export default function usePagination(itemPerPage, list) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPagedList, setCurrentPagedList] = useState([]);

  const totalPages = Math.ceil(list.length / itemPerPage);

  // وقتی لیست عوض میشه، اطمینان حاصل کن که currentPage معتبره
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [list, totalPages]);

  // فقط روی currentPage و list رندر کن
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    setCurrentPagedList(list.slice(startIndex, endIndex));
  }, [currentPage, list]);

  return [totalPages, currentPagedList, currentPage, setCurrentPage];
}
