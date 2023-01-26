<template>
  <div class="sign-in-panel">
    <p>Email:</p>
    <AppInputText type="email" @changed="sync_email" />
    <p>Password:</p>
    <AppInputText type="password" @changed="sync_password" />
    <div class="button-wrapper">
      <AppButton class="submit-btn" title="Sign in" @clicked="authorize"/>
      <AppLoadingIcon v-if="loading == true"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AppLoadingIcon from './AppLoadingIcon.vue'
import AppButton from './AppButton.vue';
import AppInputText from './AppInputText.vue';
import { useAuthStore } from '../logic/stores/auth'

export default {
  setup () {
    const auth = useAuthStore()

    return {
      auth,
    }
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      info: null
    }
  },
  name: 'AppSignInPanel',
  components: {
    AppInputText,
    AppButton,
    AppLoadingIcon
  },
  methods: {
    sync_email($event) {
      this.email = $event
    },
    sync_password($event) {
      this.password = $event
    },
    authorize() {
      this.loading = true;
      axios.post('http://localhost:3000/api/v1/auth',
      {
        user: {
          email: this.email,
          password: this.password
        }
      },
      {
        headers: {
          'Accept': 'application/json',
          'Accept-Language': 'ru',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        //window.location.href = '/'
        this.auth.setToken(response.data.token)
        this.$router.push('/')
      }).catch((error) => {
        this.loading = false;
        if (error.response.data.errors.email) {
          alert(error.response.data.errors.email[0])
        }
        if (error.response.data.errors.password) {
          alert(error.response.data.errors.password[0])
        }
      });
    }
  }
}
</script>

<style scoped>
.button-wrapper {
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
}
.sign-in-panel {
  width: 260px;
  height: 220px;
  border: 1px solid rgba(0, 0, 0, 0 .185);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.514);
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
}
</style>
