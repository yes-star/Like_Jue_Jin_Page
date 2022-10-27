import request from '@/lib/request'

/**
 * 获取文章列表
 */
export function getArticalList() {
    return request({
        url: '/index/getArticalList',
        method: 'get',
    });
}