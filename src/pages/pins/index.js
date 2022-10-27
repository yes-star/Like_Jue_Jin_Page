import React, {PureComponent} from 'react';
import style from "./pins.module.css";

import LeftMenu from "./sub-cpns/LeftMenu";
import PinEditor from "./sub-cpns/PinEditor";

class Pins extends PureComponent {
    render() {
        return (
            <div className={style.pins}>
                {/*左侧布局*/}
                <div className={style.pinsLeftWrapper}>
                    <LeftMenu/>
                </div>
                {/*中间*/}
                <div className={style.pinsMiddleWrapper}>
                    <PinEditor/>
                </div>
                {/*右侧布局*/}
                <div className={style.pinsRightWrapper}></div>
            </div>
        );
    }
}

export default Pins;