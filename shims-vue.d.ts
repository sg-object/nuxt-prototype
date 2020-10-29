import Vue from "vue"

declare module "*.vue" {
  export default Vue
}

declare module "*.json" {
  const value: any
  export default value
}

// tsconfig.json의 types에 @nuxtjs/axios를 추가해도 type을 찾을 수가 없어 error가 발생. 임의로 설정
declare module "vue/types/vue" {
  interface Vue {
    $auth: any
  }
}
