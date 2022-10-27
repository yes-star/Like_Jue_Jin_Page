import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom'
import {Popover, Button} from 'antd';

import style from "./subNav.module.css";

class SubNav extends PureComponent {
    content = (
        <div className={style.subMenuTagPanel}>
            {
                this.props.subMenuList[2].tags.map(item => {
                    return (
                        <Button size='small' shape="round" key={item.id}>{item.name}</Button>
                    )
                })
            }
        </div>
    )

    render() {
        const {subMenuList} = this.props;
        return (
            <div className={style.subMenu}>
                <div className={style.subMenuBox}>
                    <div className={style.subMenuLeftBox}>
                        {
                            subMenuList.map(item => {
                                return item.tags.length ? (
                                    <Popover placement="bottomLeft" content={this.content} trigger="hover"
                                             key={item.id}>
                                        <NavLink to={item.path}
                                                 activeClassName={style.linkActive}>
                                            {item.name}
                                        </NavLink>
                                    </Popover>
                                ) : (
                                    <NavLink to={item.path}
                                             activeClassName={style.linkActive}
                                             key={item.id}>
                                        {item.name}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div>
                        <NavLink to='/subscribe/subscribed'>
                            标签管理
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubNav;