import React, {Component} from "react";

class SmallBlock extends Component {

    render() {
        const {block} = this.props;

        return (
            <div className='smallBlock mx-auto'>
                <img src={block.path} width='109' height='99' alt='/'/>
                <h6><b>{block.title}</b></h6>
                <small><p className='greyColor'>{block.description}</p></small>
            </div>
        )
    }
}

export default SmallBlock