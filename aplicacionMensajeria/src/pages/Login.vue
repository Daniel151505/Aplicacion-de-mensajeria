<template>
<div class="text-center">

   <div class="jumbotron bg-primary text-white text-center">
     <h2 class="lead display-3">Aplicación de Mensajeria</h2>
     <p>Comunicación en tiempo real</p>
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
  methods: {
            loginWithGoogle() {
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
