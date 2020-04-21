import React from "react";
import {Link} from "react-router-dom";
import CustomLineChart from "./CustomLineChart";
import detailedStatistic from '../jsons/users_statistic';

const DetailedUser = (props) => {
    const selectedUser = props.selectedUser;

    return (
        <div className='container-fluid topInnerContainer outer'>
            <div className='row innerHeader text-white vAlign'>
                <h4 className='vAlign'>AppCo</h4>
            </div>
            <div className='outer'>
                <div className='row'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/home'>Main page</Link></li>
                        <li className="breadcrumb-item"><Link to='/users'>Users statistics</Link></li>
                        <li className='breadcrumb-item active'>{selectedUser.first_name}</li>
                    </ol>
                    <div className="col-12">
                        <h5><b>{selectedUser.first_name}</b></h5>
                    </div>
                </div>

                <CustomLineChart
                    selectedStat={detailedStatistic.filter((stat) => selectedUser.id === stat.user_id)}
                    titleText={'Clicks'}
                />

                <CustomLineChart
                    selectedStat={detailedStatistic.filter((stat) => selectedUser.id === stat.user_id)}
                    titleText={'Views'}
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

export default DetailedUser