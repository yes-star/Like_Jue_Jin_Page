import React, {PureComponent} from 'react';

import style from "./books.module.css";

class Books extends PureComponent {
    render() {
        return (
            <div className={style.books}>
                {/*左侧布局*/}
                <div className={style.booksLeftWrapper}>
                    <h1>小册</h1>
                </div>
                {/*右侧布局*/}
                <div className={style.booksRightWrapper}></div>
            </div>
        );
    }
}

export default Books;