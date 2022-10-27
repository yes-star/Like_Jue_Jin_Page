import React, {PureComponent} from 'react';
import {Button, Popover} from 'antd';
import {Picker} from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

import style from "./style.module.css";

class PinEditor extends PureComponent {
    state = {
        pinsValue: '',
        count: 1000
    }

    // 难点：如何在光标指定位置插入表情，参考：https://www.136.la/shida/show-411804.html
    addEmoji = (e) => {
        this.setState({
            pinsValue: this.inputRef.innerText + e.native,
        }, () => {
            let newCount = 1000 - this.state.pinsValue.length;
            this.setState({
                count: newCount
            })
        })
    }

    inputChange = (e) => {
        let newCount = 1000 - e.target.innerText.length;
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div className={style.pinEditor}>
                {/*编辑区*/}
                <div className={style.editorBody}>
                    <div className={style.content}>
                        <div className={style.editorContent}
                             ref={e => this.inputRef = e}
                             dangerouslySetInnerHTML={{__html: this.state.pinsValue}}
                             contentEditable="true"
                             spellCheck="false"
                             onInput={e => this.inputChange(e)}
                             placeholder="告诉你个小秘密，发布沸点时添加合适话题会被更多掘友们看见哟～"/>
                        <span className={style.count}>{this.state.count}</span>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.item}>
                        {/*表情*/}
                        <Popover
                            content={<Picker set='apple'
                                             showPreview={false}
                                             showSkinTones={false}
                                             useButton={false}
                                             onSelect={this.addEmoji}
                                             i18n={{
                                                 search: '搜索',
                                                 categories: {smileys: '12', recent: '最近使用'}
                                             }}/>}
                            trigger="click"
                        >
                            <div className={[style.item, style.mr18]}>
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/5594dbb510a36a6453e2d9a67d13f5ff.svg
" alt="表情"/>
                                <div className={style.itemText}>表情</div>
                            </div>
                        </Popover>
                        <div className={style.item} style={{marginRight: '18px'}}>
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/d265f4eace781e9889089456b49bf962.svg
" alt="表情"/>
                            <div className={style.itemText}>图片</div>
                        </div>
                        <div className={style.item} style={{marginRight: '18px'}}>
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/b1a683233dcd06c41259e3972bbb4d87.svg
" alt="表情"/>
                            <div className={style.itemText}>链接</div>
                        </div>
                        <div className={style.item}>
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6a87bb7f0775e3ae31780fcb661a3b4e.svg
" alt="表情"/>
                            <div className={style.itemText}>话题</div>
                        </div>
                    </div>

                    <Button type="primary" disabled={this.state.count < 1000 ? false : true}>发布</Button>
                </div>
            </div>
        );
    }
}

export default PinEditor;