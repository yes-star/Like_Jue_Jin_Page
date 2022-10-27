import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import {withRouter} from 'react-router-dom';

import style from './DropDownBtn.module.css'
import down from '../../assets/img/down.svg'

class DropDownBtn extends PureComponent {
    state = {
        isShowList: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', (e) => this.handleClick(e), false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', (e) => this.handleClick(e), false);
    }

    handleClick(e) {
        if (!findDOMNode(this.refs.refTest).contains(e.target) &&
            !findDOMNode(this.refs.refTest2).contains(e.target)
        ) {
            this.setState({isShowList: false});
        }
    }

    showList = () => {
        const {isShowList} = this.state;
        this.setState({
            isShowList: !isShowList
        })
    }

    addArticle = () => {
        this.props.history.push('/editor');
    }

    itemClick = (index) => {
        alert(this.props.list[index])
    }


    render() {
        const {list} = this.props;
        let {isShowList} = this.state;
        return (
            <div className={style.dropDownBtn}>
                <button className={style.addBtn} onClick={this.addArticle}>写文章</button>
                <div ref='refTest' className={style.more} onClick={this.showList}>
                    <img src={down} alt="展开"/>
                </div>
                <ul ref='refTest2' className={style.list} style={{display: isShowList ? 'block' : 'none'}}>
                    {
                        list.map((item, index) => {
                            return <li className={style.listItem}
                                       key={index}
                                       onClick={() => this.itemClick(index)}>
                                {item}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(DropDownBtn);