<template>
    <div id="contact" class="defaultComponent">
        <div class="contactItem">
            <span class="White">
            <i class="fa fa-at"/> <br/> {{profile.email}}
        </span>
        </div>
        <div class="contactItem" v-for="link in profile.socials" :key="link.username">
            <a :href="link.url" target="_blank">
               <i :class="[link.icon]"/><br/> {{link.username}}
           </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        props: ['profile']
    }

</script>

<style scoped>
    .contactItem {
        width: 40%;
        margin-left: auto;
        margin-right: auto;

        padding: 15px;
        background: #439889;
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.3em;
    }

    .contactItem:hover {
        background: #17657D;
    }

    i{
        font-size:1.5em;
    }
</style>