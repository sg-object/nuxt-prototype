<template>
  <div class="menu_area" >
    <div v-if="!isResize" class="main_menu" @click="activeMenu(naviMenu.url)">
      <div class="menu_text">
        {{ naviMenu.name }}
      </div>
      <fa :icon="['fas', iconType]" style="color: white;" />
    </div>
    <fa v-else :title="naviMenu.name" :icon="['fas', menuIconType]" style="color: white; font-size: x-large; align-self: center;" @click="activeMenu(naviMenu.url)" />
    <div v-if="isActived">
      <div v-for='subMenu in naviMenu.sub' :key="subMenu.url">
        <nuxt-link :to='subMenu.url'>
          {{ subMenu.name }}
        </nuxt-link>
      </div>
    </div>      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

interface NaviMenu{
  name: string;
  url: string;
  actived: boolean;
  sub: NaviMenu[];
}

const icon_up = 'chevron-up';
const icon_down = 'chevron-down';

const menu_icon = {
  user1: 'user',
  user2: 'handshake',
  user3: 'shipping-fast',
  user4: 'wrench'
}

@Component
export default class extends Vue {
  @Prop({ required: true }) readonly naviMenu!: NaviMenu;
  iconType: string = icon_down;
  actived: boolean = false;

  @Prop({ required: true }) activeMenu!: Function;
  @Prop({ required: true }) isResize!: Function;

  mounted(){
    console.log('mounted!!! : ');
  }

  get isActived(): boolean{
    console.log(this.naviMenu);
    this.iconType = this.naviMenu.actived ? icon_up : icon_down
    return this.naviMenu.actived;
  }

  get menuIconType(): string{
    let icon = menu_icon[this.naviMenu.url.substring(1)];
    console.log(icon);
    return icon;
  }
}

</script>
<style lang="scss" scoped>
.page-enter-active {
  transition: opacity 0.3s ease-out;
}
 
.page-leave-active {
  transition: opacity 0.5s ease-in;
}
 
.page-enter,


.menu_area {
  //height: 45px;
  //padding-left: 10px;
  //padding-right: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  //align-items: center;
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: white;
  cursor: pointer;

  .main_menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;  
    width: 100%;
    height: 100%;

    .menu_text {
      //font-weight: bold;
      font-size: 14px;
      color: white;
    }
  }
}
</style>