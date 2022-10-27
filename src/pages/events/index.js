import React, {PureComponent} from 'react';

import style from './events.module.css'

class Events extends PureComponent {
    render() {
        return (
            <div className={style.events}>
                <h1>活动</h1>
            </div>
        );
    }
}

export default Events;