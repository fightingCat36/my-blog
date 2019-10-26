import Mock from 'mockjs'

Mock.mock(/\/articles.*/, {
    'articles|3-7': [{
        id: Mock.Random.natural(),
        time: Mock.Random.date('yyyy-MM-dd'),
        title: Mock.Random.csentence(5, 9),
        description: Mock.Random.csentence(15, 25),
        cover: /\/\w{3,8}\.jpg/
    }]
})

Mock.mock(/\/images.*/, {
    'data|13-25': [{
        id: Mock.Random.natural(),
        description: Mock.Random.csentence(4, 10),
        cover: /\.\.\/images\/[012][0-9]\.jpg/
    }]
})


Mock.mock(/\/wisdom.*/, {
    'data|4': [{
        id: Mock.Random.natural(),
        topic: Mock.Random.csentence(5, 20)
    }]
})