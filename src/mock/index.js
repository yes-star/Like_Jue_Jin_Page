import Mock from 'mockjs'
import {getUserInfo, login, authorization} from './response/user'
import {getArticalList} from './response/articalList'

const Random = Mock.Random;

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/authorization/, 'get', authorization)

// 获取文章列表
Mock.mock(/\/getArticalList/, 'get', getArticalList)

Mock.setup({
    timeout: 0
})

Random.extend({
    fruit() {
        const fruit = ['apple', 'peach', 'lemon']
        return this.pick(fruit)
    }
})

export default Mock