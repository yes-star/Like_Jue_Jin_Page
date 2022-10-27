import React, {PureComponent} from 'react';
import style from "./news.module.css";

class News extends PureComponent {
    render() {
        return (
            <div className={style.news}>
                {/*左侧布局*/}
                <div className={style.newsLeftWrapper}>
                    <h1>资讯</h1>
                </div>
                {/*右侧布局*/}
                <div className={style.newsRightWrapper}></div>
            </div>
        );
    }
}

export default News;