<template>
  <div id="intro">
      <div id="intro-content">
          <div class="smallText">
              I'm
              <br/> 
              <span class="largeText">{{profile.firstName}} {{profile.lastName}}</span> 
              <br/>
              alias
              <br/>
              <em><span class="mediumText">{{profile.alias}}</span></em>
          </div>
          <br/>
          <p class="smallText">
              <span>Web and Mobile developer for passion</span>
              <br/>
              <span>and</span>
              <br/>
              <span>an anime fan</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name:'intro',
    props:['profile'],
    mounted(){
    }
}
</script>

<style scoped>
    #intro{
        background: url('../assets/images/intro.jpeg') 100% 100%;
        /* background-size: 100%; */
        height: 100vh;
    }

    #intro-content{
        text-align: center;
        position: relative;
        top:20%;
        width:60%;
        margin: auto;
        background: rgba(204,204,204,.7);
        padding: 5%;
    }

    .largeText{
        font-size:48px;
        color:#0D47A1;
    }

    .mediumText{
        font-size:36px;
        color:#0D47A1;
    }

    .smallText{
        font-size:26px;
        color:#333;
    }

</style>
