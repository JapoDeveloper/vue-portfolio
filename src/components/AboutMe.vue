<template>
  <div id="aboutMe">
      <img :src="profile.avatar" width="150"/>
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

<style>

    #aboutMe{
        text-align: center;
        width:60%;
        margin: auto;
        margin-top:100px;
    }

    #bio{
        font-size: 1.2em;
    }
</style>

