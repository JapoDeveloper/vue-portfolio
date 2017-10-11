<template>
  <div id="socials">
      <ul>
          <li v-for="social in profile.socials" :key="social.username">
              <a class="SocialIcon Cyan" :href="social.url" target="_blank" :title="social.username">
                 <span> <i :class="social.icon"/></span>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name:'social',
  props:['profile']
}
</script>

<style scoped>

    #socials{
        position: fixed;
        top:30%;
        left:20px;
        background-color: rgba(33,33,33,.2); 
        text-align: center;
        border-radius: 2px;
    }

    .SocialIcon{
        font-size: 2em;
    }

    ul li{
        /* margin: 30px 0px; */
        padding: 20px 15px;
    }

    ul li:hover{
        background-color: #17657D;
    }
</style>
