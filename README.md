# ServerOrigin

# API Document
## `url : 15.164.103.82:3001`
## `/auth/signup`
### POST 
**Request**
```json
{
  "id" : "test",
  "password" : "1234",
  "name" : "이름",
  "address" : "주소",
  "birthday" : "20010101"
}
```

**Response**
> 성공했을 경우
```json
{
    "_id": "5cbb1f401f937015402714cc",
    "id": "test",
    "password": "1234",
    "name": "이름",
    "address": "주소",
    "birthday": 20011212,
    "token": "VkuZS4xBz8tC7x6bf1DSINo9j",
    "Basket": [],
    "Closet": [],
    "notice": [],
    "__v": 0
}
```

> 실패했을 경우
```json
{
    "message": "already exist"
}
```

## `/auth/signin`
### POST
***Request**
```json
{
	"id" : "test",
	"password" : "1234"
}
```

**Response**
> 성공했을 경우
```json
{
    "_id": "5cbb1541cf6e07293c5382e2",
    "id": "test",
    "password": "1234",
    "name": "이름",
    "address": "주소",
    "birthday": 20011212,
    "token": "huMeILRTBPh8orb1OV6eATFFh",
    "Basket": [],
    "notice": [],
    "__v": 0
}
```

> 실패했을 경우
```json
{
    "message": "user is not Found"
}
```

## `/notice/addNotice`
### POST 
**Request**
```json
{
    "title" : "제목",
    "content" : "aaaa\n%%%\nasdfasdfsadf\n%%%\nasdfsdfa",
}
```
`%%%는 사진이 들어갈 부분, %%%개수만큼 사진을 넣는다`

**Response**
> 성공했을 경우
```json
{
    "message": "Upload Success"
}
```

> 실패했을 경우
```json
{
    "message": "ERR!"
}
```

## `/notice/delNotice`
### POST
**Request**
```json
{
    "token" : "JOcfj65Fzw7WjGw"
}
```

**Response**
> 성공했을 경우
```json
{
    "message": "success!"
}
```

> 실패했을 경우
```json
{
    "message": "ERR!"
}
```

## `/notice/loadNoticeOne`
## POST
**Request**
```json
{
    "token" : "JOcfj65Fzw7WjGw"
}
```
**Response**
> 성공했을 경우
```json
{
    "notice": {
        "_id": "5cbb3b46de1d28365c7c99f9",
        "title": "제목",
        "content": "asdfasdfasdf\nlocalhost:3000/public/notice/ty8lJqg5EO5dHUjDmkcIXA.PNG\nasdfasdfds\nlocalhost:3000/public/notice/rCPjHFkOo8wInx5gSQBite.PNG\nasdfasdfadsf",
        "token": "JOcfj65Fzw7WjGw",
        "Comment": [],
        "__v": 0
    }
}
```

> 실패했을 경우
```json
{
    "message" : "Notice Not Found!"
}
```

## `/notice/loadNoticeList`
## POST
**Request**
```json
NULL
```

**Response**
> 성공했을 경우
```json
{
    "list": [
        {
            "_id": "5cbb3b46de1d28365c7c99f9",
            "title": "제목",
            "content": "asdfasdfasdf\nlocalhost:3000/public/notice/ty8lJqg5EO5dHUjDmkcIXA.PNG\nasdfasdfds\nlocalhost:3000/public/notice/rCPjHFkOo8wInx5gSQBite.PNG\nasdfasdfadsf",
            "token": "JOcfj65Fzw7WjGw",
            "Comment": [],
            "__v": 0
        },
        {
            "_id": "5cbb3f3fe2e46c61dc8aa600",
            "title": "제목",
            "content": "asdfasdfasdf\nlocalhost:3000/public/notice/kGfx42IcIhr1IqIVUMa8rf.PNG\nasdfasdfds\nlocalhost:3000/public/notice/OsK9iKRL69asootSWVPwd7.PNG\nasdfasdfadsf",
            "token": "0hafom7EFMSjEii",
            "Comment": [],
            "__v": 0
        },
        {
            "_id": "5cbb3f72e2e46c61dc8aa601",
            "content": "asdfasdfasdf\nlocalhost:3000/public/notice/q45NQQGWz25CQADPq7xD2g.PNG\nasdfasdfds\nlocalhost:3000/public/notice/uhR1rzLjCFwUUhV5MNIYFU.PNG\nasdfasdfadsf",
            "token": "ya8v4wYepNvnJ58",
            "Comment": [],
            "__v": 0
        }
    ]
}
```


