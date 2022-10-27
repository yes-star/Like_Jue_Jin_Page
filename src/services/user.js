import request from '@/lib/request'

/**
 * 获取用户详情
 * @param {Number} uid 用户 id
 */
export function getUserInfo(uid) {
    return request({
        url: '/index/getUserInfo',
        method: 'post',
        data: {
            uid,
        },
    });
}