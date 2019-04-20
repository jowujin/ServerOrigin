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
    "token" : "JOcfj65Fzw7WjGw" (게시판 토큰)
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
    "token" : "JOcfj65Fzw7WjGw" (게시판 토큰)
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

## `/notice/likePush`
## POST
**Request**
```json
{
	"noticeToken" : "Sj0RdiHfNr2VgYz",
	"userToken" : "huMeILRTBPh8orb1OV6eATFFh"
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

## `/notice/likePull`
## POST
**Request**
```json
{
	"noticeToken" : "Sj0RdiHfNr2VgYz",
	"userToken" : "huMeILRTBPh8orb1OV6eATFFh" 
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

## `/closet/addNewDress`
## POST
**Request**
```json
{
    "content" : "옷 이름",
    "token" : "huMeILRTBPh8orb1OV6eATFFh", (유저 토큰)
    "img" : "이미지",
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

## `/closet/loadCloset`
## POST
**Request**
```json
{
	"token" : "huMeILRTBPh8orb1OV6eATFFh" (유저 토큰)
}
```

**Response**
> 성공했을 경우
```json
{
    "closet": [
        {
            "_id": "5cbb4e32fa0e3e36700fd541",
            "title": "제목",
            "img": "localhost:3001/public/notice/cHBoMCKQvQBWcXCLnbFBRm.PNG",
            "token": "xC83JJr7h0PsL23VxHjkiXPDp"
        },
        {
            "_id": "5cbb4e4dfa0e3e36700fd542",
            "title": "제목",
            "img": "localhost:3001/public/notice/AneiXm1O4fTR7h0IbWGZy1.PNG",
            "token": "Hj938Ufmo8UYKoNATe2klESfM"
        },
        {
            "_id": "5cbb5c6fb912b25d9c06095f",
            "title": "글 제",
            "img": "localhost:3001/public/notice/xPOnoivbZCkgi9XRjATiqP.PNG",
            "token": "drFRrkjFE06cixO6x77qynW3c"
        }
    ]
}
```
 > 실패했을 경우
 ```json
 {
    "message": "Users Not Found!"
}
```

## `/closet/removeCloset`
## POST
**Request**
```json
{
	"token" : "huMeILRTBPh8orb1OV6eATFFh" (유저 토큰)
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

## `/closet/loadBasket`
## POST
**Request**
```json
{
    "token": "huMeILRTBPh8orb1OV6eATFFh"  (유저 토큰)
}
```

## `/comment/addComment`
## POST
**Request**
```json
{
	"content" : "aasdf\n%%%\nasdf\n%%%\nasdf",
	"name" : "이름",
	"token" : "huMeILRTBPh8orb1OV6eATFFh"
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

## `/dress/addDress`
## POST
**Request**
```json
{
    "title" : "제목",
    "price" : "15000",
    "company" : "회사",
    "companyPhone" : "02-905-1234",
    "img" : "이미저",
    "age" : "19",
    "year" : "1900"
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

## `/dress/loadDressAge`
## POST
**Request**
```json
{
    "age": "19"
}
```
**Response**
> 성공했을 경우
```json
{
    "list": [
        {
            "_id": "5cbb6bd5e1f9763604385266",
            "title": "제목",
            "token": "t155K0uUuxVx6iClc4k4GWWFh",
            "price": 150000,
            "company": "회사",
            "companyPhone": "02-1234-1234",
            "img": "Pt4uvDGRQWR2PviWwmmf4q.PNG",
            "Date": "2019-04-20T18:58:29.950Z",
            "age": 19,
            "year": 1900,
            "__v": 0
        }
    ]
}
```

## `/dress/loadDressYear`
## POST
**Request**
```json
{
    "Year": "1900"
}
```

**Response**
>  성공했을 경우
```json
{
    "list": [
        {
            "_id": "5cbb6bd5e1f9763604385266",
            "title": "제",
            "token": "t155K0uUuxVx6iClc4k4GWWFh",
            "price": 150000,
            "company": "회사",
            "companyPhone": "02-1234-1234",
            "img": "Pt4uvDGRQWR2PviWwmmf4q.PNG",
            "Date": "2019-04-20T18:58:29.950Z",
            "age": 23,
            "year": 1900,
            "__v": 0
        }
    ]
}
```

## `/dress/lodaDressFit`
## POST
**Request**
```json
{
    "age": "19"
}
```

**Response**
>  성공했을 경우
```json
{
    "list": [
        {
            "_id": "5cbb6bd5e1f9763604385266",
            "title": "제",
            "token": "t155K0uUuxVx6iClc4k4GWWFh",
            "price": 150000,
            "company": "회사",
            "companyPhone": "02-1234-1234",
            "img": "Pt4uvDGRQWR2PviWwmmf4q.PNG",
            "Date": "2019-04-20T18:58:29.950Z",
            "age": 23,
            "year": 1900,
            "__v": 0
        }
    ]
}
```

## `/dress/jjim`
## POST
**Request**
```json
{
    "dressToken": "t155K0uUuxVx6iClc4k4GWWFh",
    "token" : "huMeILRTBPh8orb1OV6eATFFh"
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

