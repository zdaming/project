import request from '@/utils/request'

function test (data = {}) {
  console.log(data)
  return request({
    url: '/api/useraa',
    method: 'get',
    params: data
  })
}

export default {
  test
}
