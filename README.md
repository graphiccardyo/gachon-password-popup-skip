# 가천 SSO 비밀번호 알림 자동 넘김

가천대학교 SSO 로그인 뒤 뜨는 비밀번호 변경 권장 팝업에서 `다음에 변경` 버튼을 자동으로 누르는 Chrome/Edge 확장 프로그램입니다.

## 설치

1. Chrome 또는 Edge에서 확장 프로그램 관리 화면을 엽니다.
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
2. `개발자 모드`를 켭니다.
3. `압축해제된 확장 프로그램을 로드`를 누릅니다.
4. 이 확장 프로그램 폴더를 선택합니다.

```text
gachon-password-popup-skip
```

## 동작 범위

- `https://sso.gachon.ac.kr/*`에서만 실행됩니다.
- `#exPassword` 팝업 안에 `login2Frm` 폼이 있고, 팝업 문구에 `90일 이상`, `비밀번호`, `변경`이 모두 들어있을 때만 동작합니다.
- 조건이 맞으면 `다음에 변경` 버튼을 클릭하고, 클릭 후에도 팝업이 남아 있으면 폼 제출을 한 번 더 시도합니다.

