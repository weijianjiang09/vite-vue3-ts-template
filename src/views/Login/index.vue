<template>
  <div>
    <div>{{ user.userInfo.name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
// pinia 使用
import { useUserStore } from "@/store/user";

const user = useUserStore();
</script>

<style lang="scss" scoped></style>
