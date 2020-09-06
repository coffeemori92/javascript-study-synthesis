// 실행문맥
ExecutionContext = {
  // 랙시컬 환경 컴포넌트 : 자바스크립트 엔진이 자바스크립트 코드를 실행하기 위해 자원을 모아둔 곳으로
  // 구체적으로는 함수 또는 블록의 유효 범위 안에 있는 식별자와 그 결과값이 저장되는 곳.
  LexicalEnvironment: {
    // 환경 레코드 : 유효 범위안에 포함된 식별자를 기록하고 실행하는 영역
    EnvironmentRecord: {
      // 선언적 환경 레코드 : 함수와 변수, catch문의 식별자와 실행 결과가 저장되는 영역.
      DeclarativeEnvironmentRecord: {},
      // 객체 환경 레코드 : 객체 전체의 참조를 가져와서 객체 환경 레코드의 bindObject라는 프로퍼티에 바인드하도록 만들어져 있음.
      ObjectEnvironmentRecord: {}
    },
    // 외부 렉시컬 환경 참조 : 함수를 둘러싸고 있는 코드가 속한 렉시컬 환경 컴포넌트의 참조가 저장
    OuterLexicalEnvironmentReference: {}
  },
  // 변수 환경 컴포넌트
  VariableEnvironment: {},
  // 디스 바인딩 컴포넌트
  ThisBinding: null
};

// 전역환경
GlobalEnvironment = {
  ObjectEnvironmentRecord: {
    bindObject: window
  },
  OuterLexicalEnvironmentReference: null
}

// 전역실행문맥
ExecutionContext = {
  LexicalEnvironment: GlobalEnvironment,
  ThisBinding: window
}