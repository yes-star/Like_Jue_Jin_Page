import React, {PureComponent} from 'react';
import {renderRoutes} from 'react-router-config'
import {BackTop, Divider} from 'antd';

import style from "./home.module.css";
import HomeRight from "./sub-cpns/HomeRight";

class Home extends PureComponent {
    render() {
        return (
            <div className={style.home}>
                {/*左侧布局*/}
                <div className={style.homeLeftWrapper}>
                    <div className={style.headClassify}>
                        <p>热门</p>
                        <Divider type="vertical" style={{borderColor: 'hsla(0,0%,59.2%,.2)', height: '16px'}}/>
                        <p>最新</p>
                        <Divider type="vertical" style={{borderColor: 'hsla(0,0%,59.2%,.2)', height: '16px'}}/>
                        <p>热榜</p>
                    </div>
                    {/*子路由*/}
                    {renderRoutes(this.props.route.routes)}
                </div>
                {/*右侧布局*/}
                <div className={style.homeRightWrapper}>
                    <HomeRight/>
                </div>
                {/*回到顶部*/}
                <BackTop visibilityHeight={300}/>
            </div>
        );
    }
}

export default Home;