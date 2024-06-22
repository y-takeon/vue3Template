<!--
 * @Author: ycb
 * @Date: 2024-04-22 17:19:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-18 15:04:18
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/modules/app'
import { getTest, GetElectricWaveVal } from '@/service/api';

const appStore = useAppStore()
let timestamp = ref()
const router = useRouter()

function reset() {
  console.log('reset', appStore)
  const secretKey = '';
  getTest(secretKey).then(res => {
    console.log('res', res)
  })
  appStore.$reset()
}

function getData() {
  const secretKey = '';
  GetElectricWaveVal({
    dayNum: 1
  }, {
    secretKey
  }).then(res => {
    console.log('res2', res)
  })
}

function goLogin() {
  router.push('/login');
}
// defineProps<{ msg: string }>()
</script>

<template>
  <NButton type="primary" class="mr-4" @click="appStore.increment()">加一</NButton>
  <n-button type="warning" @click="reset">重置</n-button>
  <n-date-picker v-model:value="timestamp" type="date" />
  <h1>{{ timestamp }}</h1>
  <h2>{{ appStore.count }}</h2>
  <h3>{{ appStore.doubleCount }}</h3>
  <n-button type="success" @click="getData" class="mr-2.5">发起网络请求</n-button>
  <n-button type="success" @click="goLogin">登录页</n-button>
</template>

<style scoped>

</style>
