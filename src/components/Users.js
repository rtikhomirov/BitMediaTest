import React, {Component} from "react";
import {Link} from "react-router-dom";
import Stats from "./Stats";
import Pagination from "./Pagination";

class Users extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage : 1,
            firstShownPage : 1,
            usersPerPage : 50
        }
    }

    handlePagerClick = (clickedPageNumber) => {
        this.setState({
            currentPage : clickedPageNumber
        })
    }

    onArrowBtnClick = (e) => {
        const MAX_BUTTONS_NUMBER = 5;
        let toPage;
        console.log('onLeftArrowClick : ' + e.currentTarget.id);
        switch(e.currentTarget.id){
            case 'leftArrow':
                toPage = Math.max(
                    1,
                    this.state.firstShownPage - MAX_BUTTONS_NUMBER
                );
                break;
            case 'rightArrow':
                toPage = Math.min(
                    this.state.firstShownPage + MAX_BUTTONS_NUMBER,
                    Math.ceil(this.props.users.length / this.state.usersPerPage) - (MAX_BUTTONS_NUMBER - 1)
                );
                break;
            default :
                break;
        }

        this.setState({
            firstShownPage : toPage
        })
    }

    render() {
        const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
        const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
        const currentUsers = this.props.users.slice(indexOfFirstUser, indexOfLastUser);

        console.log(indexOfLastUser + ' : '+ indexOfFirstUser + ' : ' +currentUsers.length + ' : '+this.state.firstShownPage);

        return (
            <div className='container-fluid topInnerContainer outer'>
                <div className='row innerHeader text-white vAlign'>
                    <h4 className='vAlign'>AppCo</h4>
                </div>
                <div className='row'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/home'>Main page</Link></li>
                        <li className='breadcrumb-item active'>Users statistics</li>
                    </ol>
                    <div className="col-12">
                        <h5><b>Users statistics</b></h5>
                        <hr/>
                    </div>

                    <Stats users={currentUsers}/>
                    <Pagination
                        usersPerPage={this.state.usersPerPage}
                        totalUsers={this.props.users.length}
                        selectedPage={this.state.currentPage}
                        firstShownPage={this.state.firstShownPage}
                        onPageClick={this.handlePagerClick}
                        onArrowClick={this.onArrowBtnClick.bind(this)}
                    />
                </div>
                <div className='row innerFooter text-white vAlign'>
                    <div className="col-sm-4">
                        <p className='mb-0'>AppCo</p>
                    </div>
                    <div className="col-sm-4 alignCenter">
                        <p className='mb-0'><small>All rights reserved by ThemeTags</small></p>
                    </div>
                    <div className="col-sm-4 alignRight">
                        <p className='mb-0'><small>Copyrights © 2019.</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users