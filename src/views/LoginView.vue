<script setup>
import { useUser } from "@/composables/useUser.js";

const { loginModule, user, login, loggedIn, logout, } = useUser();

</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <p v-if="loggedIn">Welcome {{ user ?.username }},
      <a href="#" @click.prevent="logout">Logout</a>
    </p>
    <el-form v-if="!loggedIn" ref="form" :model="loginModule" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="loginModule.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginModule.password" type="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    padding: 15px;
    display: flex;
    align-items: center;
  }
}
</style>
