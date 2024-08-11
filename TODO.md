# TODO

개복잡함 슈-발

---

서버에서 웹 렌더링(/) + 캡챠(/captcha/) 같이진행


(접속기준)   
 - [X] 0. (server.js)  send index.html
 - [X] 1. (index.html) script:src - ./captcha/api.js
 - [X] 2. (index.html) div id="m-captcha"
 - [X] 3. (api.js)     m-captcha.innerHTML <- ./captcha (+ ./captcha/main.js)
 - [ ] 4. (index.html) onclick -> display ./captcha/form (+ answer)
 - [ ] 5. (index.html) submit form  - POST ./captcha/submit  { 'selected': number[] }
 - [ ] 6. (server.js)  check with id, good -> send { 'status': 'ok' }
 - [ ] 7. (index.html) 'ok' -> hide form, display checkmark.   
done


### 기본
 - [서버](server.js)
    - 웹 렌더링
    - 캡챠 서버
 - [클라](static/)



