import React, {PureComponent} from 'react';
import {Avatar, Menu, Dropdown, message} from 'antd';
import {
    UserOutlined,
    EditOutlined,
    FileTextOutlined,
    LikeOutlined,
    StarOutlined,
    ReadOutlined,
    ScheduleOutlined,
    TagsOutlined,
    FormOutlined,
    SettingOutlined,
    PoweroffOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import IMG from '@/assets/img/sny.jpg';

const {SubMenu} = Menu;

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<EditOutlined/>}>
            写文章
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined/>}>
            草稿箱
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3" icon={<UserOutlined/>}>
            我的主页
        </Menu.Item>
        <Menu.Item key="4" icon={<LikeOutlined/>}>
            我赞过的
        </Menu.Item>
        <Menu.Item key="5" icon={<ReadOutlined/>}>
            我的小册
        </Menu.Item>
        <Menu.Item key="6" icon={<StarOutlined/>}>
            我的收藏
        </Menu.Item>
        <Menu.Item key="7" icon={<ScheduleOutlined/>}>
            签到赢好礼
        </Menu.Item>
        <Menu.Item key="8" icon={<TagsOutlined/>}>
            标签管理
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="9" icon={<FormOutlined/>}>
            字学
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="10" icon={<SettingOutlined/>}>
            设置
        </Menu.Item>
        <SubMenu title="关于" key="11" icon={<QuestionCircleOutlined/>}>
            <Menu.Item key="11-1">下载应用</Menu.Item>
            <Menu.Item key="11-2">翻译计划</Menu.Item>
        </SubMenu>
        <Menu.Divider/>
        <Menu.Item key="12" icon={<PoweroffOutlined/>}>
            退出
        </Menu.Item>
    </Menu>
);

class AvatarDropDownList extends PureComponent {

    render() {
        return (
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
                    <Avatar src={IMG} size={30}/>
                </div>
            </Dropdown>
        );
    }
}

export default AvatarDropDownList;