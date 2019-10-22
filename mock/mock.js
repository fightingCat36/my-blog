import Mock from 'mockjs'

Mock.mock('/article', {
    'data|3-7': [{
        id: Mock.Random.natural(),
        time: Mock.Random.date('yyyy-MM-dd'),
        title: Mock.Random.csentence(5, 9),
        description: Mock.Random.csentence(15, 25),
        cover: /\/\w{3,8}\.jpg/
    }]
})