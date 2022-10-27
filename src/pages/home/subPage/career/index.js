import React, {PureComponent} from 'react';
import {getArticalList} from '@/services/articalList';
import ArticalItem from "../../sub-cpns/ArticalItem";

class Career extends PureComponent {
    state = {
        articalList: []
    }

    componentDidMount() {
        this.getArticalList()
    }

    getArticalList = () => {
        getArticalList().then(res => {
            this.setState({
                articalList: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.articalList.map(item => <ArticalItem key={item.id} data={item}/>)
                }
            </div>
        );
    }
}

Career.propTypes = {};

export default Career;