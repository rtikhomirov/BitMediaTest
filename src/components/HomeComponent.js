import React, {Component} from "react";
import SmallBlock from "./SmallBlock";
import BigBlock from "./BigBlock";
import SMALL_BLOCKS from '../jsons/smallBlocks';
import BIG_BLOCKS from '../jsons/bigBlocks'
import {Link} from "react-router-dom";

class HomeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            smallBlocks : SMALL_BLOCKS,
            bigBlocks : BIG_BLOCKS
        }
    }

    render() {
        const smBlocks = this.state.smallBlocks.map((someBlock, index) =>
            <div key={someBlock.id} className="col noPaddings">
                <SmallBlock block={someBlock}/>
            </div>
        )

        const bigBlocks = this.state.bigBlocks.map((someBlock, index) =>
            <div key={someBlock.id} className="col noPaddings">
                <BigBlock block={someBlock}/>
            </div>
        )

        return (
            <div className='container-fluid topContainer noPaddings'>
                <div className="homeHeader text-white">
                    <h3>AppCo</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className='headerTitle'><b>Brainstorming</b> for <br/> desired perfect Usability</h2>
                            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            <button
                                type="button"
                                className="btn btn-light text-dark viewBtn"
                                >
                                <Link to="/users">View Stats</Link></button>
                        </div>
                        <div className="col-sm-6">
                            <div className='mobContainer'>
                                <img id='mobShadow' className='position-absolute' src='../assets/images/Ellipse1.png' alt='Watch Video'/>
                                <img id='mob' className='position-absolute' src='../assets/images/mobile.png' alt='Watch Video'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h4 className='centerText mx-auto'>Why <b>small business owners <br/> love</b> AppCo?</h4>
                    <h6 className='centerText greyColor mx-auto '>Our design projects are fresh and simple and will benefit your business<br/> greatly. Learn more about our work!</h6>
                </div>
                <div className="row">
                    {smBlocks}
                </div>
                <div className="jumbotron text-white">
                    <div className="row outer">
                        <div className="col-sm-6 vAlign">
                            <h5 className='mx-auto'><b>Start Managing your apps <br/> business, more faster</b></h5>
                            <small><p>Objectively deliver professional value with diverse web-readiness. <br/>
                                Collaboratively transition wireless customer service without <br/>
                                goal-oriented catalysts for change. Collaboratively.</p></small>
                            <button type="button" className="btn btn-light text-dark viewBtn">Learn more</button>
                        </div>
                        <div className="col-sm-6">
                            <img className='laptopImg' src='../assets/images/laptop.png' alt='/'/>
                        </div>
                    </div>
                </div>
                <div className="priceContainer">
                    <div className="row">
                        <h4 className='centerText mx-auto'><b>Afforadble Pricing and Packages</b><br/>
                            choose your best one</h4>
                        <h6 className='centerText greyColor mx-auto '>Monotonectally grow strategic process improvements vis-a-vis<br/> integrated resources.</h6>
                    </div>
                    <div className="row">
                        {bigBlocks}
                    </div>
                    <p>If you need custom services or Need more? <a href='/' className='font-weight-bold'>Contact us</a></p>
                </div>
                <div className='homeFooter text-white'>
                        <div className='row outer2'>
                            <div className='col-sm-6 mx-auto mt-2'>
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control greyColor" placeholder="Enter your e-mail" id="email"/>
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-light text-white viewBtn blueBtn" id='subscribe'>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-4 bottomAlign">
                                <p className='mb-0'>AppCo</p>
                            </div>
                            <div className="col-sm-4 bottomAlign alignCenter">
                                <p className='mb-0'><small>All rights reserved by ThemeTags</small></p>
                            </div>
                            <div className="col-sm-4 bottomAlign alignRight">
                                <p className='mb-0'><small>Copyrights © 2019.</small></p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent