<template>
<div class="navi-area" :style="naviAreaClass">
  <div class="navi-header" :style="{'justify-content': headerStyle}">
    <div v-if="!this.resizeMenu" style="align-self: center; height: 50px; color: white;font-size: 30px;font-weight: bold;">
      SG.Object
    </div>
    <fa :icon="['fas', 'bars']" style="color: white; font-size: x-large;cursor: pointer;" @click="test" />
  </div>
  <NaviMenu v-for='menu in getMenus' :key='menu.url' :navi-menu='menu' :active-menu='activeMenu' :is-resize="isResize" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'


@Component
export default class extends Vue {
  menus = [
      {name: '회원 관리', url: '/user1', actived: false, sub: [{name: '메뉴1', url: '/user'}]},
      {name: '파트너스 관리', url: '/user2', actived: false, sub: [{name: '메뉴1', url: '/usera'}]},
      {name: '작업 신청 관리', url: '/user3', actived: false, sub: [{name: '메뉴1', url: '/users'}]},
      {name: '설정', url: '/user4', actived: false, sub: [{name: '메뉴1', url: '/userd'}]}
      ];

  currentUrl: string = '';
  resizeMenu: boolean = false;

  activeMenu(url: string){
    for(let i=0;i<this.menus.length;i++){
      let menu = this.menus[i];
      if(url == menu.url){
        menu.actived = !menu.actived;
        this.resizeMenu = false
      }else{
        menu.actived = false;
      }
    }
    /* this.menus.forEach(function(menu){
      if(url == menu.url){
        menu.actived = !menu.actived;
      }else{
        menu.actived = false;
      }
    }); */
  }

  test(){
    this.resizeMenu = !this.resizeMenu;
    this.activeMenu('@@@@');
  }

  mounted(){
    this.menus.forEach(function(menu){
      for(var i=2;i<=5;i++){
        menu.sub.push({name: '메뉴'+i, url: '/userasd'+i});
      }
    });
    console.log();
  }

  get getMenus(): Array<object>{
    return this.menus;
  }

  get naviAreaClass(): object{
    return this.resizeMenu ? {width: '50px'} : {width: '100%'};
  }

  get isResize(): boolean{
    return this.resizeMenu;
  }

  get headerStyle(): string{
    if(this.resizeMenu){
      return 'center';
    }else{
      return 'space-between';
    }
  }
}

</script>

<style lang="scss" scoped>
.navi-area {
  width: 10%;
  max-width: 250px;
  //min-width: 230px;
  //background-color: #6799FF;
  background-color:#4e73df;
  display: flex;
  flex-direction: column;

  .navi-header {
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
  }
}
</style>