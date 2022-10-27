import React, {PureComponent} from 'react';

import style from './Search.module.css'
import searchIcon from '../../assets/img/search.svg'

class Search extends PureComponent {
    search = (e) => {
        const {input} = this;
        input.value && alert(input.value);
    }

    inputFocus = (e) => {
        const {form} = this;
        e.target.style.width = '364px';
        e.target.placeholder = '搜索文章/小册/标签/用户';
        form.style.border = '1px solid #007fff';
        this.props.hideBtnGroup();
    }

    inputBlur = (e) => {
        const {form} = this;
        e.target.style.width = '120px';
        e.target.placeholder = '探索掘金';
        form.style.border = 'none';
        setTimeout(() => {
            this.props.showBtnGroup();
        }, 250);
    }

    render() {
        return (
            <form ref={e => this.form = e} className={style.form}>
                <input ref={e => this.input = e}
                       className={style.input}
                       type="search"
                       maxLength='32'
                       placeholder='探索掘金'
                       onFocus={this.inputFocus}
                       onBlur={this.inputBlur}/>
                <img src={searchIcon} alt="搜索" onClick={this.search}/>
            </form>
        );
    }
}

export default Search;