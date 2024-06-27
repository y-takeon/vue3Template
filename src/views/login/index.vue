<!--
 * @Author: ycb
 * @Date: 2024-05-21 22:50:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-27 15:09:35
 * @Description: 
-->
<script setup lang="ts">
// import { useRouter } from 'vue-router';
// const router = useRouter();
// function handleSubmit () {
//   router.replace('/home');
// };
</script>

<template>
  <div class="size-full flex">
    <div class="relative left_content basis-4/6 h-full">
      <span class="absolute left-10% top-8% w-260px h-60px i-icon:shattrath"></span>
      <span class="absolute left-10% top-16% text-54px font-bold font-SansCN">沙塔思网关配置平台</span>
      <span class="absolute left-10% top-26% text-28px">连接无界，智控未来 —— 领先的网关配置平台</span>
    </div>
    <div class="basis-2/6 text-primary h-full">登录区</div>
  </div>
</template>
<style lang="scss">
.left_content {
  @include BackgroundImg('@/assets/imgs/login_bg.png');
}
</style>