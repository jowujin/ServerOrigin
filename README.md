# ServerOrigin

# API Document
## `url : 15.164.103.82:3000`
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

##`/notice/addNotice`
### POST 
***Request**
```json
{
    "title" : "제목",
    "content" : "aaaa\n%%%%\nasdfasdfsadf\n%%%\nasdfsdfa",
}
```
`%%%는 사진이 들어갈 부분, %%%개수만큼 사진을 넣는다`
