import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        const {usersPerPage, totalUsers, selectedPage, firstShownPage, onPageClick, onArrowClick} = this.props;

        const MAX_BUTTONS_NUMBER = 5;
        const buttonsNumber = Math.min(MAX_BUTTONS_NUMBER, Math.ceil(totalUsers / usersPerPage));
        const pageNumbers = [];

        for(let i = firstShownPage; i <= (firstShownPage + buttonsNumber - 1); i++){
            pageNumbers.push(i);
        }
        console.log('pageNumbers ', pageNumbers, firstShownPage, buttonsNumber, totalUsers, usersPerPage);

        const leftArrow = (firstShownPage > 1) ?
            <i className="fa fa-angle-left pagerArrows pagerArrowActive" id='leftArrow' onClick={onArrowClick}></i> :
            <i className="fa fa-angle-left pagerArrows"></i>;

        const rightArrow = (usersPerPage * (firstShownPage + (buttonsNumber - 1)) < totalUsers) ?
            <i className="fa fa-angle-right pagerArrows pagerArrowActive" id='rightArrow' onClick={onArrowClick}></i> :
            <i className="fa fa-angle-right pagerArrows"></i>;

        return (
            <div className='row mx-auto'>
                <div className='mx-auto'>
                    {leftArrow}
                </div>
                <div className='pagination'>
                    {pageNumbers.map(number =>
                        <button key={number} onClick={() => onPageClick(number)}
                                className= {(number === selectedPage) ? 'pagerButtonActive m-1' : 'pagerButton m-1'}>
                            {number}
                        </button>
                    )}
                </div>
                <div>
                    {rightArrow}
                </div>
            </div>
        );
    }
}

export default Pagination