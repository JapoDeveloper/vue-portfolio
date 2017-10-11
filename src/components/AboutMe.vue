<template>
  <div id="aboutMe" class="defaultComponent">
      <img :src="profile.avatar" width="150" class="img-circle"/>
      <p>{{profile.firstName}} {{profile.lastName}}</p>
      <br/>
      <p id="bio">
      {{profile.aboutMe}}
      </p>
        <br/><br/>
      <blockquote class="blockquote blockquote-reverse">
        <p class="mb-0">{{profile.quote}}</p>
        <footer class="blockquote-footer"><cite>{{profile.quoteAutor}}</cite></footer>
        </blockquote>
    </div>
</template>

<script>
export default {
  name:'about-me',
  props:['profile']
}
</script>

<style scoped>

    #aboutMe{
        text-align: center;
    }

    #bio{
        font-size: 1.3em;
    }
</style>

