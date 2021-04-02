<template>
<div>

   <div class="jumbotron bg-primary text-while">
     <h2 class="lead display-3">Aplicación de Mensajeria</h2>
     <p>Comunicación en tiempo real</p>
  </div>

  <div class="container-fluid">
    <div class="row mt-5">
      <div class="div text-center">
        <button @click="loginWithGoogle" class="btn btn-outline-danger btn-lg">Login con Google</button>
      </div>
    </div>

  <div class="row mt-5">
      <div class="div text-center">
        <button class="btn btn-outline-danger btn-lg">Login con Twitter</button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import auth from 'firebase/auth'

export default {
  name: 'login',
  methods: {
    loginWithGoogle(){
      firebase auth().signInWithPopup(new firebase auth GoogleAuthProvider())
      .then((response)=>{
        console.log(response.user)
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
