import React, { useEffect, useState } from 'react'
import { Pagination, Form } from 'react-bootstrap';

const CustomPagination = ({ 
        itemsPerPage, 
        setItemsPerPage, 
        currentPage, 
        setCurrentPage, 
        tableRef, 
        pageSizeOption, 
        data, 
        setCurrentData, 
        setIndexOfFirstItem, 
        indexOfFirstItem 
    }) => {

    const [totalPages, setTotalPages] = useState();

    // function for handle page change e.g 1,2,3
    const handlePageChange = (pageNumber) => {
        // When click on page no that time table scroll on top 
        if (tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setCurrentPage(pageNumber);
    };

    // function for handle how many data should display on per page
    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        // When select how many data show in pagination that time table scroll on top
        if (tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setCurrentPage(1);
    };

    // function for render page numbers like 1,2,3,4
    const renderPaginationItems = () => {
        let items = [];
        let leftSide = currentPage - 2;
        let rightSide = currentPage + 2;

        if (leftSide <= 0) {
            rightSide += Math.abs(leftSide) + 1;
            leftSide = 1;
        }

        if (rightSide > totalPages) {
            leftSide -= rightSide - totalPages;
            rightSide = totalPages;
            if (leftSide < 1) {
                leftSide = 1;
            }
        }

        for (let number = leftSide; number <= rightSide; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                    {number}
                </Pagination.Item>
            );
        }

        if (leftSide > 1) {
            items.unshift(
                <Pagination.Item key={1} onClick={() => handlePageChange(1)}>
                    1
                </Pagination.Item>,
                <Pagination.Ellipsis key="ellipsis-left" />
            );
        }

        if (rightSide < totalPages) {
            items.push(
                <Pagination.Ellipsis key="ellipsis-right" />,
                <Pagination.Item key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    useEffect(() => {
        setTotalPages(Math.ceil(data?.length / itemsPerPage));
        const indexOfLastItem = currentPage * itemsPerPage;
        indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setIndexOfFirstItem(indexOfFirstItem);
        const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentData(currentData);
    }, [data, itemsPerPage, currentPage, setCurrentData, setIndexOfFirstItem]);

    return (
        <>
            <Pagination>
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                {renderPaginationItems()}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>

            <Form.Group controlId="itemsPerPage">
                <Form.Label>Show entries:</Form.Label>
                <Form.Control
                    as="select"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className='cursor-pointer font-style'
                    style={{ width: 'auto', display: 'inline-block', marginLeft: '10px' }}
                >
                    {pageSizeOption?.map(item => <option value={item}>{item + " / Page"}</option>)}
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default CustomPagination;