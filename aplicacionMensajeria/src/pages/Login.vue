<template>
<div class="text-center">

   <div class="jumbotron bg-primary text-white text-center">
     <h2 class="lead display-3">Aplicación de Mensajeria</h2>
     <p>Comunicación en tiempo real</p>
  </div>

  <!-- Show loading statue -->

  <div class="alert alert-info" v-if="loading">Procesando...</div>

  <!-- Mostrando errores -->
  <div class="alert alert-danger" v-if="hasErrors">
    <div v-for="(error,index) in errors" :key="index">{‌{ error }}</div>
  </div>

  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col text-center">
        <button @click="loginWithGoogle" class="btn btn-outline-danger btn-lg">Login con Google</button>
      </div>
    </div>

  <div class="row mt-5">
      <div class="col text-center">
        <button class="btn btn-outline-info btn-lg">Login con Twitter</button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import auth from 'firebase/auth';
export default {
  name: 'login',
  data() {
    return {
      errors: [],
      loading: false
    }
  },
  computed: {
    hasErrors() {
      return this.error.lenght > 0
    }
  },
  methods: {
            loginWithGoogle() {
              // loading set to true
                this.loading = true

                //clear old errors
                this.errors = []

                firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then((response) => {
                    //console.log (response.user)

                    // Enviando setUser action
                    this.$store.dispatch('setUser', response.user)

                    // Luego redireccionar user a '/' la pagina
                    this.$router.push('/')
                })
                 .catch(error => {
                  this.errors.push(error.message)

                  //set loading to false
                  this.loading = false
                })
            }
        }
}
</script>

<style>
  .btn, .jumbotron{
    border-radius: 0px;
  }
</style>
