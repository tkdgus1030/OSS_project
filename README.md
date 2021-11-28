# Pay G

![main_picture](https://user-images.githubusercontent.com/63357094/143764869-53d2e934-7273-4ac2-9c8e-ad0e5ec23c81.png)
Open Source Software Project

Team 10: 김세란, 김예린, 박상현


## Brief Overview


Pay G는 여행이나 모임이 있어서 총무 역할을 해줍니다. 여러 명이서 돈을 함께 써서 서로 송금을 해줘야 할 일이 생겼을 때 Pay G는 유용하게 사용됩니다. 가격과 계산한 사람, 함께한 사람만 입력하면, 가장
최선의 수로 누가 누구에게 송금을 해야하는 지 알려줍니다. Pay G로 더욱 편안한 돈계산을 해보세요!



## Function



+ 무조건 1/N 계산이 아닌, 체크박스를 통해 결제 내역의 대상자를 그룹 내에서 선택 가능!
+ 복잡한 내역을 가장 적은 송금 횟수로 계산!
+ 단순한 총합이 아닌, 누가 누구에게 송금을해야 하는 지 자세한 설명!
+ 로그인 없이 간편한 계산 기능도 가능!
+ 로그인 시 계산 내역 기록하여 언제든지 열람 가능!
+ 자주 모이는 사람들과 그룹을 형성 해 사용 가능!
+ 깔끔하고 디자인의 간편한 웹페이지!


## Prerequisite
__python 설치(3이상)__
```bash
$ python --version
# Python 3.8.8 

```

## Installation & Run


__0. git clone__

```bash
$ git clone https://github.com/tkdgus1030/OSS_project.git

```

__1. venv 설치__

root에 설치 권장

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



## How to Use(with Demo Video)

__예시__ : 팀프로젝트를 위해 만나, 즐거운 시간을 가진 3명! 각자 계산한 내역이 달라 서로 송금을 해줘야하는 상황에 처해있다. 이럴때 Pay G를 어떻게 활용할 수 있는 지 알아보자!

  


__1. 로그인없이 사용__

+ 메인 화면
  <img width="1440" alt="main" src="https://user-images.githubusercontent.com/76947209/143770891-7043fbe3-3768-46d6-8ce9-921689188330.png">

+ 멤버 추가
  <img width="1440" alt="people" src="https://user-images.githubusercontent.com/76947209/143733392-0ce418c2-af93-4bee-a07a-c4c2ef4803b3.png">

+ 계산 내역
  <img width="1440" alt="temp_calculate" src="https://user-images.githubusercontent.com/76947209/143733393-7cf318e1-097d-4fab-a186-ba9ce7058add.png">

+ 계산 결과
  <img width="1440" alt="temp_result" src="https://user-images.githubusercontent.com/76947209/143733394-b4de6817-d6f5-42cd-94b7-fa97d89b5d04.png">

  
+ [비회원 버전 비디오](https://youtu.be/coTLcfuYR0M)

__2. 로그인 후 사용__

+ 로그인
  <img width="1440" alt="log_in" src="https://user-images.githubusercontent.com/76947209/143770774-5ca17ff1-3d4c-4e56-b01e-7dd4010f312e.png">

+ 그룹 리스트
  <img width="1440" alt="group_list2" src="https://user-images.githubusercontent.com/76947209/143770783-c0f1bc0a-9cfb-4af6-bb4b-75a79cf771c7.png">

+ 그룹 정산 내역 리스트
  <img width="1440" alt="history_list2" src="https://user-images.githubusercontent.com/76947209/143770786-f7653299-4915-4cdf-aa29-8e533e9d247b.png">
  
+ 그룹 정산 내역 상세페이지
  <img width="1440" alt="group_create" src="https://user-images.githubusercontent.com/76947209/143770792-e4293275-b42f-4d71-9a5d-96c0e23475a8.png">
  <img width="1440" alt="detail_result" src="https://user-images.githubusercontent.com/76947209/143770794-7a500a6b-967c-4101-b3d8-1e12b36e12a2.png">

<img width="1440" alt="people" src="https://user-images.githubusercontent.com/76947209/143733392-0ce418c2-af93-4bee-a07a-c4c2ef4803b3.png">
+ [회원 버전 비디오](https://youtu.be/NEK4u1khsu4)



## How to Contribute



여행이나 모임 후에 한사람이 총무를 맡아서 계산을 해야하는 경우가 많고, 이럴 경우 정확하지 않거나 복잡하게 분배가 이루어진다. PayG는 그러한 사람들의 불편 사항을 개선해주는 것에 기여한다.   
이제 PayG를 사용하면 참여 인원이 항상 달라 돈 계산이 머리 아픈 상황이나, 송금 시 불필요한 횟수가 줄어들 것이다.



## Versions


+ version 0.0.0 : 백엔드가 필요하지 않는 부분 프론트엔드 구현
+ version 1.0.0 : 백엔드(유저, 그룹, 히스토리 데이터 베이스) 구현 시작
+ version 1.0.1 : 로그인 구현(아직 user data가 구현되지 않아 올바은 phone.No / PW인지 구별은 할 수 없음)
+ version 1.1.0 : 로그인 기능 보완, 사용자 database를 불러와 존재하는 휴대폰 번호와 비밀번호를 입력해야만 로그인 되도록 설정
+ version 1.2.0 : 회원가입 구현 및 temp_calculate의 delete 기능, 계산 기능 구현
+ version 1.2.1 : 회원가입 구현 및 버그 제거
+ version 1.3.0 : 그룹 리스트 표시 구현
+ version 1.4.0 : 그룹 생성 및 사용자별 그룹 리스트 표시 구현
+ version 1.4.1 : group create에서 멤버 수 추가, 삭제 기능 구현, 중복된 group 체크, 입력한 멤버가 올바른지(전화번호, 이름이 실제로 존재하는지) 체크하는 기능 구현
+ version 1.4.2 : 그룹 생성시 자기자신도 포함하도록 수정
+ version 1.4.3 : Group list에서 history로 link하는 과정 구현 및 Group list를 database와 연동
+ version 1.4.4 : Group list에서 생성되는 tr이 child tr이 맨 처음 tr의 class, type, 형식 등을 상속받도록 수정
+ version 1.5.0 : history list와 group 연동, history list에 새로운 history 추가하는 기능 구현
+ version 2.0.0 : 백엔드 alpha 완료 및 다운로드 기능, calculate와 localstorage 연동 구현, 프론트엔드 구현 및 버그 수정 시작
+ version 2.1.0 : 결과보기 창 제외 대부분의 html css js의 디자인 수정 완료
+ version 2.2.0 : 모든 html의 디자인 구현과 결과 보기 창의 송금 내역 완료
+ version 2.3.0 : CSS정돈, local storage clear button 코드 위치 수정, 초기화버튼 추가, localstorage버튼 삭제
+ version 2.3.1 : 이전 버전에서 발생한 오류 수정
+ version 2.3.2 ~ 2.3.5: Bug 발생으로 인해 2.3.1로 Revert
+ version 2.3.6 : 썸네일 thumbnail.png 제작 및 추가
+ version 2.4.0 : History_detail.html 백엔드 연동 구현 시작
+ version 2.4.1 : History_list.html css 완성, 모든 css 완료
+ version 2.4.2 ~ 2.4.4 : History_detail.html 수정
+ version 2.5.0 : History_detail.html과 Calculate_group.js간 DB연동
+ version 2.5.1 : 2.5.0 버그수정
+ version 2.6.0 : History_detail.html에서 히스토리.txt 다운로드 기능 구현
+ version 2.6.1 : home.html에서 로그아웃 기능 구현
+ version 2.7.0 : History_detail.html에 DB에 맞게 정산 내역 표시 구현
+ version 2.7.1 : History_detail.html에서 다운로드 버튼이 비정상적으로 표시되는 버그 수정
+ version 2.7.2 : History_detail.html UI 개선
+ version 2.8.0 : 다운로드 기능 구현 완료
+ version 2.8.1 : History_detail.html title표시 버그 수정
+ version 2.9.0 : 모든 페이지 title 깔끔하게 수정
+ version 3.0.0 : 모든 기능 구현



## User Database Management


모든 사용자의 데이터는 아래 ER diagram과  이루어져 있다.

![userdatabase](https://user-images.githubusercontent.com/63357094/143764303-c8589882-a39b-4e9d-bb84-f61dbd730f7d.png)

+ 각 사용자는 휴대폰 번호를 Id key로 가지고 있고 user들은 group을 만들 수 있다.
+ 각 group또한 고유한 id를 가진다. 
+ 한 user는 여러 group에 속할 수 있고 group은 최소 1명 이상의 user를 포함한다.
+ 각 group은 history list라는 attribute를 가지고 있으며 각 history는 group based id를 가진다.
+ 각 history는 해당 정산에 참여한 user의 list와 이와 관련된 결제 내역을 포함하고 있다.



## License

[MIT License](https://github.com/tkdgus1030/OSS_project/blob/main/LICENSE)


