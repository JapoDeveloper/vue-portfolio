<template>
  <div id="app">
    <section id="menu">
      <ul>
        <li><router-link to='/'><i class="fa fa-home"/> Intro</router-link></li>
        <li><router-link to='/aboutme'><i class="fa fa-user"/> About me</router-link></li>
        <li><router-link to='/education'><i class="fa fa-graduation-cap"/> Education</router-link></li>
        <li><router-link to='/'><img :src="require('@/assets/images/logo.png')" width="70"/></router-link></li>
        <li><router-link to='/experience'><i class="fa fa-building"/> Experience</router-link></li>
        <li><router-link to='/projects'><i class="fa fa-briefcase"/> Projects</router-link></li>
        <li><router-link to='/contact'><i class="fa fa-envelope"/> Contact</router-link></li>
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

  ul{
    list-style: none;
}

  .defaultComponent{
    width: 60%;
    margin: auto;
    margin-top: 130px;
  }

  a, a:hover{
    color:white; 
    text-decoration: none !important;   
  }
  .router-link-active, .router-link-active:hover{
    color:white !important; 
    text-decoration: none !important;   
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

  .Green{
    color:#2E7D32;
  }

  .Red{
    color:#c62828;
  }

  .Pink{
    color:#AD1457;
  }

  .Purple{
    color:#6A1B9A;
  }

  .DeepPurple{
    color:#4527A0;
  }

  .Blue{
    color:#1565C0;
  }

  .LightBlue{
    color:#0277BD;
  }

  .Cyan, .Cyan:hover{
    color:#00838F;
  }

  .Teal{
    color:#00695C;
  }

  .LightGreen{
    color:#558B2F;
  }

  .Yellow{
    color:#F9A825;
  }

  .Amber{
    color:#FF8F00;
  }

  .Orange{
    color:#EF6C00;
  }

  .DeepOrange{
    color:#D84315;
  }

  .Brown{
    color:#4E342E;
  }

  .Gray{
    color:#424242;
  }

  .BlueGray{
    color:#37474F;
  }

  .White{
    color:#fff;
  }
</style>