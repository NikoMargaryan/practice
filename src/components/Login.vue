<template>
  <div class="login">
    <label>
      Enter your email:
      <input
          type="email"
          v-bind:value="email"
          @input="emailInput($event.target.value)"
      >
    </label>
    <label>
      Enter your password:
      <input
          type="password"
          v-bind:value="password"
          @input="passwordInput($event.target.value)"
      >
    </label>

    email: {{email}}
    password: {{password}}
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email: "name@email.ru",
      password: "123456"
    }
  },
  methods: {
    emailInput(value){
      this.email=value
    },
    passwordInput(value){
      this.email=value
    }
  }
}
</script>

<style scoped>

</style>