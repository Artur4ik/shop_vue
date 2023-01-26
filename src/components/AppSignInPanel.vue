<template>
  <div class="sign-in-panel container-sm p-2">
    <form class="d-flex flex-column" action="javascript:void(0);">
    <div class="row mb-3">
      <label for="email" class="col-sm-3 col-form-label">Email</label>
      <div class="col-sm-12">
        <input type="email"
          class="form-control"
          id="email"
          v-model="email"
          :class="{ 'is-invalid': this.emailError, 'is-valid': this.passwordError }"
        >
      </div>
    </div>
    <div class="row mb-3">
      <label for="password" class="col-sm-3 col-form-label">Password</label>
      <div class="col-sm-12">
        <input type="password" class="form-control" id="password" v-model="password" :class="passwordError ? 'is-invalid' : ''">
      </div>
    </div>
    <button class="btn btn-success" :disabled="loading" @click="authorize">
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading" ></span>
      {{ submit_text }}
    </button>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
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
      loading: false,
      info: null,
      submit_text: "Sign in",
      email: "",
      emailError: false,
      passwordError: false,
      password: "",
    }
  },
  name: 'AppSignInPanel',
  components: {
  },
  methods: {
    authorize() {
      this.loading = true;
      this.emailError = false;
      this.passwordError = false;
      this.submit_text = 'signing in...'
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
        this.loading = false;
        this.submit_text = 'Sign in'
        this.auth.setToken(response.data.token)
        this.$router.push('/')
      }).catch((error) => {
        this.loading = false;
        this.submit_text = 'Sign in'
        if (error.response.data.errors.email) {
          this.emailError = true;
        }
        if (error.response.data.errors.password) {
          this.passwordError = true;
        }
      });
    }
  }
}
</script>

<style scoped>
.sign-in-panel {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.329);
  border: 1px solid rgba(0, 0, 0, 0.329);
  border-radius: 10px;
}
</style>
