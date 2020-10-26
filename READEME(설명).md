1. 구조
  ## assets
    style & sass, 이미지나 폰트와 같은 컴파일되지 않은 파일을 포함하는 디렉토리
  
  ## components
    vue 컴포넌트를 포함하는 디렉토리. asyncData나 fetch 메소드는 사용할수 없음

  ## layouts
    application의 레이아웃을 포함하는 디렉토리

  ## middleware
    페이지나 레이아웃이 렌더링 되기 전에 실행할 사용자 정의 함수를 정의할 수 있음
  
  ## pages
    application의 뷰와 라우트를 포함하는 디렉토리. 모든 .vue 파일을 읽고 application의 라우터를 생성
  
  ## plugins
    루트 vue.js application이 생성되기 전에 실행하고 싶은 자바스크립트 플러그인을 포함하는 디렉토리
    global로 컴포넌트를 등록하고 function이나 constant를 주입 할수 있음
  
  ## static
    서버의 루트에 바로 연결가능 ex) /static/test.txt => http://localhost:3000/text.txt
    변경되지 않을 파일들로 구성

  ## store
    Vues Store 파일을 포함하는 디렉토리. Vuex Store는 Nuxt.js에 의해 바로 사용가능하나, 기본적으로 비활성화되어 있음.
    index.js 파일을 생성하면 프레임워크가 자동적으로 Store를 활성화 함

  ## 주의
    assets이나 static 디렉토리에 링크가 필요할 때 ~assets/.. or ~static/... 처럼 입력해야 됨

2. Auth Module
  ## 설명
    내부적으로 Axios 사용하기 때문에 같이 설치 해야됨.
    신규 Nuxt 프로젝트에서 사용시 Vuex Store를 활성화 시켜야됨.
    (콘솔에서 $nuxt.$store에서 Auth 정보를 접근할 수 있는것으로 보아 내부적으로 store를 사용하는 것으로 생각됨.)

  ## 설정
    nuxt.config.js의 router에 middleware 설정(전역) - 현재
    각 page에서 설정하면 url 별로 설정됨 ex) auth: false
    middleware를 설정하면 로그인 하지 않은 사용자가 직접 url로 접근할때 login page로 redirect 시켜준다.

3. Vuex
  ## state
    단일 상태 트리 (단일 객체)를 사용.
    단일 상태 트리를 사용하면 특정 상태를 쉽게 찾을 수 있으므로 디버깅을 위해 현재 앱 상태의 스냅 샷을 쉽게 가져올 수 있음.
    state에 직접 접근하여 변경하면 여러개의 컴포넌트에서 같은 state 값을 동시에 제어할때 state 값이 어느 컴포넌트에서 호출해서
    변경된건지 추적하기가 어렵기 때문에 상태 변화를 명시적으로 수행함으로써 테스팅, 디버깅, Vue의 Reactive 성질을 준수하기 위해
    mutaions의 commit 메소드로 state를 변경한다.
  ## getters
    Store의 계산된 속성 (computed)
    getter의 결과는 종속성에 따라 캐쉬되고, 일부 종속성이 변경된 경우에만 다시 재계산 됨.
  ## actions
    상태를 변이시키는 대신 action으로 변이에 대한 커밋을 한다.
    작업에는 비동기 작업이 포함될 수 있다.
    context 인자를 통해 저장소 인스턴스의 같은 methods와 states, getters에 접근 할수 있음.
    dispatch 메소드로 실행.
    비동기 api 호출과 여러 개의 변이를 commit하는 등의 로직에 사용.
  ## mutations
    Store의 state 값을 변경하는 로직
    commit 메소드로 실행
    mutations의 성격상 안에 정의한 로직들이 순차적으로 일어냐야 각 컴포넌트의 반영 여부를 제대로 추적할 수 있기 때문
    mutations의 역할 자체가 state 관리에 주안점을 두고 있다. 상태관리 자체가 한 데이터에 대해 여러 개의 컴포넌트가 관여하는 것을
    효율적으로 관리하기 위함인데 mutations에 비동기 처리 로직들이 포함되면 같은 값에 대해 여러 개의 컴포넌트에서 변경을 요청했을 때,
    그 변경 순서 파악이 어렵기 때문에 동기적으로 처리됨.
    getters와 차이점
      인자를 받아 Vuex에 넘겨줄 수 있다.
      computed가 아닌 methods에 등록
    actions와 차이점
      mutations는 동기적 로직을 정의
      actions는 비동기적 로직을 정의
  ## namespace
    기본적으로 모듈 내의 action, mutation, getter는 전역 namespace 아래에 등록됨.
    중간 크기 이상의 복잡한 앱을 제작할 때 getters & mutations & actions 의 이름을 유일하게 정하지 않으면
    namespace 충돌이 난다. 따라서, namespace를 구분하기 위해 types.js로 각 속성의 이름들을 빼고 각 컴포넌트에 import 하여
    사용하는 방법과 modules라는 폴더를 만들어 각 단위별로 파일을 쪼개서 관리하는 방법도 있다.
    ※ types.js - action, mutation, getter 호출시 사용하는 name (key)를 상수로 관리하는 파일
