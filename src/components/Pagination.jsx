import React from 'react';
import { Pagination } from 'react-bootstrap';

const CardPagination = ({ setPageNumber, pageNumber, endOfData }) => {
    return(
        <Pagination style={{ justifyContent: 'center' }}>
            {pageNumber > 1 && <Pagination.Prev onClick={() => setPageNumber(pageNumber - 1)} />}
            <Pagination.Item>{pageNumber}</Pagination.Item>
            {!endOfData && <Pagination.Next onClick={() => setPageNumber(pageNumber + 1)} />}
        </Pagination>
    )
}

export default CardPagination;