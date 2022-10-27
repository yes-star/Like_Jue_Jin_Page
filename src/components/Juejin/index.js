import React, {PureComponent} from 'react';

import style from "./style.module.css"
import qrCode from "../../assets/img/1.png";

class Juejin extends PureComponent {
    render() {
        return (
            <div className={style.card2}>
                <div className={style.qrcode}>
                    <img src={qrCode} alt="二维码"/>
                </div>
                <div>
                    <p className={style.headline}>关注一个宝藏up</p>
                    <p className={style.desc}>一个努力学习的前端开发</p>
                </div>
            </div>
        );
    }
}

export default Juejin;