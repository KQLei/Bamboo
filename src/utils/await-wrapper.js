/*
 * @Author: KQLei
 * @Date: 2021-07-02 15:26:02
 * @Last Modified by: KQLei
 * @Last Modified time: 2021-07-02 15:32:37
 */

/**
 *包装 await，简化await的异常捕获
 * @param {Promise} promise
 * @returns [error,result]
 */
export const awaitWrapper = promise => {
  return promise.then(result => [null, result]).catch(error => [error, null])
}
