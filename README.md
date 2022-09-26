# Editor Config (Client)

**`.prettierrc`, `.vite.config.ts` 등과 같은 config 파일의 옵션을 사용자의 스타일에 맞게 추가, 수정하고 다운로드하여 관리할 수 있도록 하는 페이지 입니다.**

## 사용 명령어

- `npm install` or `yarn` : 패키지 설치
- `npm run dev` or `yarn dev` : 개발 서버 실행 (기본 port : 3000)
- `npm run priview` or `yarn priview` : vite를 이용한 production build 실행
- `npm run storybook` or `yarn storybook` : 컴포넌트 storybook 실행 (기본 port : 6006)
- `npm run build-storybook` or `yarn build-storybook` : storybook static build

---

## 새로 도입하거나 주로 사용된 기술

1. **vite**
   - 기존 webpack 번들러 방식에서 vite를 사용하는 방식으로 변경하여 개발시 빠른 빌드 속도와 production 빌드시 기존 webpack을 이용했을 때 보다 가벼운 용량으로 적은 리소스를 확보하기 위해 사용했습니다.
2. **tailwind**
   - tailwind css를 사용하여 상황에 따른 일관된 색상, 스타일을 적용하여 사용자가 이용하기 편하고 유저 친화적인 UI를 적용하기 위해 사용했습니다.
3. **storybook**
   - 공통된 컴포넌트를 관리하고 독립적으로 기능을 작동하는것을 확인 및 관리하여 개별적인 UI에서 확인 할 수 있도록 하기 위해 추가하였습니다.
4. **Redux Toolkit(RTK)**
   - 기존 Redux만을 사용헀을 때 보다 적은 보일러 플레이트와 flux패턴을 이용한 로그인, 로그아웃, 자동 로그인 등 계정 관련 API요청과 토큰 관련 상태를 관리하기 위해 적용하였습니다.
5. **Mobx**
   - Observer 패턴을 이용하여 config 설정 옵션들에 대한 변경이 발생되면 redux tookit을 이용 했을 때 발생되는 dispatch등을 통한 action, reducer등의 코드를 줄이고 설정된 값을 추가하거나 수정 했을 때의 즉각적인 상태 관리를 위해 추가하였습니다.

---

# 참고 사이트

---

## UI

- https://dribbble.com/shots/3991441-Split-header-design-landing-page (로그인 화면)
