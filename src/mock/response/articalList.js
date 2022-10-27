import Mock from 'mockjs'
import {doCustomTimes} from '@/lib/tools'

const Random = Mock.Random;


export const getArticalList = () => {
    let arr = [];
    doCustomTimes(100, () => {
        let template = {
            user: {
                nickName: Random.cname(),
                signature: Random.csentence(3, 15),
                avatar: Random.image('60x60', Random.color(), Random.color(), Random.csentence(3)),
                'focus|0-10000': 0,
                'followers|0-10000': 0,
            },
            artical: {
                title: Random.csentence(5, 30),
                abstract: Random.cparagraph(1, 4),
                img: Random.image('120x80', Random.color(), Random.color(), Random.csentence(3, 10)),
                'look|0-10000': 0,
                'giveLike|0-5000': 0,
                'comments|0-10000': 0,
                time: Random.date('yyyy-MM-dd') + ' ' + Random.time('yy-MM-dd')
            }
        };
        arr.push(Mock.mock(template))
    });
    arr.forEach((item, index) => {
        return item.id = index;
    })
    return arr;
}