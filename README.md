# Pay G

---    
   
  
  
    
## 설명  

---  
Pay G는 여행이나 모임이 있어서 총무 역할을 해줍니다. 
여러 명이서 돈을 함께 써서 서로 송금을 해줘야 할 일이 생겼을 때 Pay G는 유용하게 사용됩니다.
가격과 계산한 사람, 함께한 사람만 입력하면, 가장 최선의 수로 누가 누구에게 송금을 해야하는 지 알려줍니다. 
Pay G로 더욱 편안한 돈계산을 해보세요!
  
  
  
  
## 기능

---

+ 단순한 총합이 아닌, 누가 누구에게 송금을 해야 가장 적게 돈계산이 완료되는지 자세한 설명!
+ 로그인 없이 간편한 계산 기능 활용!
+ 로그인 시 계산 내역 기록하여 언제든지 열람 가능!
+ 자주 모이는 사람들과 그룹을 형성 해 사용 가능!
+ 깔끔하고 디자인의 간편한 웹페이지!
  
  

  
## 설치 방법

---
__0. python 설치(3이상)__
```bash
$ python --version
# Python 3.8.8 

```
__1. venv 설치__

root에 설치 권장한다.

```bash
$ python -m venv venv
# $ python3 -m venv venv 
```
__2. requirements.txt 설치__

```bash
$ pip install -r requirements.txt
```
__3. 로컬 서버 실행__

manage.py 가 있는 root에서 명령어 입력

```bash
$ ls
# README.md        db.sqlite3       main             manage.py        payG             requirements.txt venv

$ python manave.py runserver
# System check identified no issues (0 silenced).
# November 28, 2021 - 04:01:09
# Django version 3.2.9, using settings 'payG.settings'
# tarting development server at http://127.0.0.1:8000/
# Quit the server with CONTROL-C.
```

__4. 로컬 서버 접속__

해당 예시에서는 다음과 같은 url로 접속할 수 있다 : http://127.0.0.1:8000/
  
   
  
  
## 예시 및 스크린샷

---
__예시__ : 팀프로젝트를 위해 만나, 즐거운 시간을 가진 3명! 각자 계산한 내역이 달라 서로 송금을 해줘야하는 상황에 처해있다.
이럴때 Pay G를 어떻게 활용할 수 있는 지 알아보자!

1. 로그인없이 사용
    + 메인 화면
      <img width="1440" alt="main" src="https://user-images.githubusercontent.com/76947209/143733386-80495f1c-c08e-4a9f-931a-3857672f6f27.png">
    
    + 멤버 추가
      <img width="1440" alt="people" src="https://user-images.githubusercontent.com/76947209/143733392-0ce418c2-af93-4bee-a07a-c4c2ef4803b3.png">
    
    + 계산 내역 
      <img width="1440" alt="temp_calculate" src="https://user-images.githubusercontent.com/76947209/143733393-7cf318e1-097d-4fab-a186-ba9ce7058add.png">
    
    + 계산 결과
      <img width="1440" alt="temp_result" src="https://user-images.githubusercontent.com/76947209/143733394-b4de6817-d6f5-42cd-94b7-fa97d89b5d04.png">


2. 로그인 후 사용 
    + 메인 화면
    + 그룹 목록
    + 그룹 생성
    + 히스토리 목록
    + 계산 내역 
    + 계산 결과
  
  
  
  
## 데모 영상

---

[로그인 기능 미사용 버전 비디오](https://youtu.be/_fTBQUddHy4)  
(링크 추가) : 로그인 기능 사용





