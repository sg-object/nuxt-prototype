<template>
  <div class="menu-area" >
    <div v-if="!isResize" class="main-menu" @click="activeMenu(naviMenu.url)">
      <div class="menu-text">
        {{ naviMenu.name }}
      </div>
      <fa :icon="['fas', iconType]" style="color: white;" />
    </div>
    <fa v-else :title="naviMenu.name" :icon="['fas', menuIconType]" style="color: white; font-size: x-large; align-self: center;" @click="activeMenu(naviMenu.url)" />
    <div v-if="isActived" class="sub-menu-area">
      <nuxt-link v-for='subMenu in naviMenu.sub' :key="subMenu.url" :to='subMenu.url' class="sub-menu-text">
        {{ subMenu.name }}
      </nuxt-link>
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

const upIcon = 'chevron-up';
const downIcon = 'chevron-down';

type IconType = {
  [key: string]: string | undefined;
}

const menuIcon: IconType = {
  user: 'users',
  partner: 'handshake',
  pro: 'shipping-fast',
  setting: 'cogs',
  default: 'question'
}

@Component
export default class extends Vue {
  @Prop({ required: true }) readonly naviMenu!: NaviMenu;
  iconType: string = downIcon;
  actived: boolean = false;

  @Prop({ required: true }) activeMenu!: Function;
  @Prop({ required: true }) isResize!: Function;

  mounted(){
    this.naviMenu.actived = false
    console.log('mounted!!! : ');
  }

  get isActived(): boolean{
    this.iconType = this.naviMenu.actived ? upIcon : downIcon;
    return this.naviMenu.actived;
  }

  get menuIconType(): string | undefined{
    const icon = menuIcon[this.naviMenu.url.substring(1)];
    return icon !== undefined ? icon : menuIcon['default'];
  }
}

</script>
<style lang="scss" scoped>
$border-radius: 5px;
$font-size: 13px;

a:hover {
  background-color: #eaecf4;
}

.page-enter-active {
  transition: opacity 0.3s ease-out;
}
 
.page-leave-active {
  transition: opacity 0.5s ease-in;
}
 
.page-enter,


.menu-area {
  padding: 15px 0px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: white;
  cursor: pointer;

  .main-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .menu-text {
      //font-weight: bold;
      font-size: $font-size;
      color: white;
    }
  }

  .sub-menu-area {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: $border-radius;
    padding: 10px;
    margin-top: 10px;

    .sub-menu-text {
      color: black;
      text-decoration: none;
      padding: 10px;
      border-radius: $border-radius;
      font-size: $font-size;
    }
  }
}
</style>