import React from 'react';
import { Pagination } from 'react-bootstrap';

let active = 5;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item activeLabel='' key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

const CardPagination = () => {
    return(
        <Pagination>{items}</Pagination>
    )
}

export default CardPagination;