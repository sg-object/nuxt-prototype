<template>
  <div class="header">
    <div>홍길동</div>
    <div class="logout text">
      <fa :icon="['fas', 'sign-out-alt']" style="color: black;" />
      로그아웃
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border: 1px solid;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 5px;
  padding-right: 10px;

  .logout {
    background-color: darkgray;
    border-radius: 4px;
    height: 25px;
  }

  .text {
    color: white;
  }
}
</style>