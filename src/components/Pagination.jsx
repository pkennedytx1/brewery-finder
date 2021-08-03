import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { BreweryContext } from '../store';

const CardPagination = ({ endOfData }) => {
    const { breweryState, dispatchBreweryData } = useContext(BreweryContext)
    const { pageNumber } = breweryState;
    return(
        <Pagination style={{ justifyContent: 'center' }}>
            {pageNumber > 1 && <Pagination.Prev onClick={() => dispatchBreweryData({ type: 'SET_PAGE_NUMBER', payload: pageNumber - 1 })} />}
            <Pagination.Item>{pageNumber}</Pagination.Item>
            {!endOfData && <Pagination.Next onClick={() => dispatchBreweryData({ type: 'SET_PAGE_NUMBER', payload: pageNumber + 1 })} />}
        </Pagination>
    )
}

export default CardPagination;