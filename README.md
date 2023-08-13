# Mid Term Project (Backend Only)

## 1. Database Structure

Database name is `tokopedia_play_clone`.
The database structure for the Tokopedia Play Clone is designed using MongoDB. It consists of three collections: `videos`, `products`, and `comments`.

### Collection: `videos`

- `videoID` : `String`, Unique identifier for the video.
- `title` : `String`, Title of the video.
- `thumbnail` : `String`, URL of the video thumbnail.

### Collection : `products`

- `productID` : `String`, Unique identifier for the product.
- `videoID` : `String`, Reference to the video document in the "videos" collection.
- `title` : `String`, Title of the product.
- `price` : `Number`, Price of the product.
- `link` : `String`, Link to the product.

### Collection : `comments`

- `commentID` : Unique identifier for the comment.
- `videoID` : Reference to the video document in the "videos" collection.
- `name` : Name of the commenter.
- `comment` : Comment text.
- `timestamp`: Timestamp indicating when the comment was submitted.

## 2. API Structure

#Videos

- Videos object

```
{
  videoId: String,
  title: String,
  thumbnail: String,
}
```

**GET /api/v1/video**

---

- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <videoProduct_object> }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

**GET /api/v1/video/:videoID**

---

- **URL Params**
  - **Required:** `videoID=[string]`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <videoProduct_object> }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

**POST /api/v1/video**

---

- **Data Params**
  ```
  {
      urlThumbnail: <string>
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ <videoProduct_object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ message: <error_message> }`

**PATCH /api/v1/video/:videoID**

---

- **URL Params**
  - **Required:** `videoID=[string]`
- **Data Params**
  ```
  {
      urlThumbnail: <string>
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <videoProduct_object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ message: <error_message> }`

**DELETE /api/v1/video/:videoID**

---

- **URL Params**
  - **Required:** `videoID=[string]`
- **Success Response:**
  - **Code:** 200
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

#Products

- Products object

```json
{
  "productID": "String",
  "videoID": "String",
  "title": "String",
  "price": "Number",
  "link": "String"
}
```

**GET /api/v1/product/:videoID**

---

- **URL Params**
  - **Required:** `videoID=[string]`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <Array_of_object_product> }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

**GET /api/v1/product/id/:productID**

---

- **URL Params**
  - **Required:** `productID=[string]`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <product_object> }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

**POST /api/v1/product**

---

- **Data Params**
  ```
  {
      videoID: <string>,
      productID: <string>,
      title: <string>,
      price: <integer>,
      link : <string>,
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ <product_object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ message: <error_message> }`

**PATCH /api/v1/product/:productID**

---

- **URL Params**
  - **Required:** `productID=[string]`
- **Data Params**
  ```
  {
      title: <string>,
      price: <integer>,
      link : <string>,
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <product_object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ message: <error_message> }`

**DELETE /api/v1/product/:videoID/:productID**

---

- **URL Params**
  - **Required:** `productID=[string]`
- **Success Response:**
  - **Code:** 200
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

#Comments

- Comments object

```json
{
  "commentID": "String",
  "videoID": "String",
  "username": "String",
  "comment": "String",
  "timestamp": "Date"
}
```

**GET /api/v1/comment/:videoID**

---

- **URL Params**
  - **Required:** `videoID=[string]`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <Array_of_object_comment> }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

**GET /api/v1/comment/:commentID**

---

- **URL Params**
  - **Required:** `commentID=[string]`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ <comment_object> }`
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

**POST /api/v1/comment**

---

- **Data Params**
  ```
  {
    videoID: <string>,
    username: <string>,
    comment: <string>
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ <comment_object> }`
- **Error Response:**
  - **Code:** 400
  - **Content:** `{ message: <error_message> }`

**DELETE /api/v1/comment/:commentID**

---

- **URL Params**
  - **Required:** `commentID=[string]`
- **Success Response:**
  - **Code:** 200
- **Error Response:**
  - **Code:** 500
  - **Content:** `{ message: <error_message> }`

## 3. How to run in local

```
1. Open Terminal/CMD on project folder directory
2. Run "npm install" on terminal/CMD
3. Rename file .env_example to .env
3. Set PORT and DATABASE_URL in .env file
4. Run "npm start" on terminal/CMD
5. If app success on terminal/cmd will print "Server is running at port 3000[PORT]"
```
