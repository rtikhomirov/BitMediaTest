import React, {Component} from "react";

class BigBlock extends Component {

    render() {
        const {block} = this.props;

        return (
            <div className='bigBlock mx-auto'>
                <h6><b>{block.title}</b></h6>
                <img src={block.path} width='224' height='148' alt='/'/>
                <h2><b>{block.price}</b></h2>
                <img src='/assets/images/divisor.png' width='279' height='3' alt='/'/>
                <small><p className='greyColor'>{block.description}</p></small>
                <button type="button" className="btn btn-light text-white viewBtn blueBtn">Purchase now</button>
            </div>
        )
    }
}

export default BigBlock