<script>
import { defineComponent } from 'vue'
import './assets/theme.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default defineComponent({
      name: 'App',
})
</script>

<template>
<Main>
      <router-view />
</Main>
</template>
      

    
<style>
   body {
     background-image: url('./assets/img/bg.jpg');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-attachment: fixed;
   }
 </style>