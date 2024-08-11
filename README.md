# Misaka Mikoto Captcha

미사카 미코토 리캡챠.


## 개발 동기

 - 1 ~~[link](https://m.humoruniv.com/board/read.html?&table=thema2&number=1387050)~~    
<img src="readme_img_1.png" width="400">

 - 2 **[코딩애플 유튜브](https://youtu.be/pFjhHPa_Apw?t=119)**   
<img src="readme_img_2.png" width="400">

 - 3
    - 심심함.


## 구조

 - 부득이하게도 2도메인 소유주가 아닌지라, 한 서버(localhost:3000)에서 웹 렌더링(/), 캡챠 api(/captcha) 둘다 함.
 - 구조는 따로 md파일 만들예정

> #### <code>[서버](server.js)</code>   
    - 웹 렌더링   
    - 캡챠 서버

> #### <code>[클라](static/)</code>
    - 


---



## TODO

#### 접속했을 때 과정

 - [X] 0. (server.js)  send index.html
 - [X] 1. (index.html) script:src - ./captcha/api.js
 - [X] 2. (index.html) div id="m-captcha"
 - [X] 3. (api.js)     m-captcha.innerHTML <- ./captcha (+ ./captcha/main.js)
 - [ ] 4. (index.html) onclick -> display ./captcha/form (+ answer)
 - [ ] 5. (index.html) submit form - POST ./captcha/submit  { 'selected': number[] }
 - [ ] 6. (server.js)  check with id, good -> send { 'status': 'ok' }
 - [ ] 7. (index.html) ok -> hide form, display checkmark.   
done

<br>
<br>
<br>

#### **서버**
 - [X] html 떤져주기
 - 캡챠 관련
    - [X] 처음 페이지 html 만들기
    - [ ] form html 만들기
    - [ ] form 아이디 만들기
    - [ ] form에 들어갈 사진(대량) 구하기 **(중요)**
    - [ ] 이미지 **붙여서** 보내기 (9장을 한장으로)
    - [ ] 받은 요청 확인하고 응답하기


#### **클라**   
 - [X] 첫 화면 <details><summary><code>사진</code></summary><img src="readme_img_3.png" width="80%"></details>

 - [ ] 캡챠 클릭 시 form 받고 띄우기

 - [ ] 이미지 9장으로 나누고 각각 표시하기

 - [ ] 캡챠 완료 요청 보내고 확인하기
