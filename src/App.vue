<template>
  <div id="app">
    <section id="menu">
      <ul>
        <li><i class="fa fa-home"/> <router-link to='/'>Intro</router-link></li>
        <li><i class="fa fa-user"/> <router-link to='/aboutme'>About me</router-link></li>
        <li><i class="fa fa-graduation-cap"/> <router-link to='/education'>Education</router-link></li>
        <li><i class="fa fa-building"/> <router-link to='/experience'>Experience</router-link></li>
        <li><i class="fa fa-briefcase"/> <router-link to='/projects'>Projects</router-link></li>
        <li><i class="fa fa-envelope"/> <router-link to='/contacts'>Contact</router-link></li>
      </ul>
    </section>
    <section id="content">
        <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import portfolio from '@/assets/data/portfolio.json';

  export default {
    name: 'app',
    data(){
      return {
        profile: portfolio.profile
      }
    }, 
    mounted(){
        this.profile.avatar = require('@/assets/images/'+this.profile.avatar);
    }
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  a, a:hover, .router-link-active, .router-link-active:hover{
    color:white; 
    text-decoration: none;   
  }

  #menu{
    width:100%;
    position: fixed;
    top:0;
    display: block;
    float: left;
    background: #17657D;
    color:white;
  }

  #menu ul{
    width:100%;
    text-align: center;
    list-style: none;
  }

  #menu ul li{
    display: inline-block;
    padding: 15px 30px 5px 30px;
    font-size: 1.1em;
  }

  #content{
    width:100%;
    display: block;
    float: left;
    color:#333;
    height: 100vh;
  }

</style>