# Markdown là gì ?

Ngôn ngữ đánh dấu văn bản, được tạo ra bởi John Grauber. Tương tự html nhưng cú pháp đơn giản hơn. Thường dùng viết file README.MD.

[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#h4)

# Syntax cơ bản

## Headers

Dùng dấu (#) trước text để tạo header, tương tự thẻ <h> trong html, header phụ thuộc số lượng dấu (#)

# H1
## H2
### H3
#### H4
##### H5
###### H6

Với H1 và H2 có thể dùng (Alt-h), chú ý in hoa in thường 

Alt-H1
----------

Alt-H2
------------

## Emphasis
- In nghiêng: text nằm giữa 1 cặp (*) hoặc (_) 
- In đậm: text nằm giữa 1 cặp (**) hoặc (__ )
- Emphasis có thể nằm lồng nhau **asterisks và _nunderscores_**
- Gạch ngang giữa text: text nằm giữa cặp (~~)
- Để thụt đầu dòng sử dụng dấu (.) 
----------------
## Lists
Dùng (*/+/-) để tạo list không theo stt.
Dùng số để tạo list theo stt
vd:
1. header
2. emphasis
3. lists
+ stt
- không stt
---------------------
## Links
Có 2 cách viết link:
1. [text](urls)

"[trang chủ](http://home)"
- text: dòng text hiển thị.
- urls: đường dẫn.

2. dùng ["text"] gán với đường dẫn bằng dấu :, khi dùng thì ghi lại ["text"].
"trở về [trang chủ]"
[trang chủ]: https://home
--------------------
## Images
Thêm dấu "!" trước cú pháp sử dụng links:
1."![tên hình ảnh](link đến hình hảnh)".
2."[tên hình ảnh]".
"[tên hình ảnh]:links"
-----------------------
## Code and Syntax Highlight
1. Để highlight, đặt dòng text vào giữa cặp dấu (`)
2. để viết code block, dùng cú pháp
.......(```[ngôn ngữ code])
........code 
.......(```)
vd: 
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
----------------------
## Tables
Dùng "|"" để ngăn các cột, "-----" để ngăn giữa tiêu đề cột và các giá trị bên dưới bảng. 

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
--------------
## Blockquotes
Dùng (>) trước text để tạo 1 blockquote 
> example
---------------
## Inline HTML
Có thể viết html trong file markdown

-----------------
## Horizontal Rule
Dùng từ 3 dấu (- hoặc * hoặc _)  hoặc nhiều hơn để tạo đường ngang ngăn cách. 

---------------
## Line Breaks
Sử dụng <enter>

------------------
## Youtube videos
Không thể add hoàn toàn 1 video vào markdown nhưng có thể add 1 hình ảnh với đường link đến video đó

vd: 
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

