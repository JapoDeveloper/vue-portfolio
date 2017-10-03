<template>
    <div id="education">
        <div class="item" v-for="edu in educationSorted" :key="edu.id">
            <i class="fa fa-graduation-cap" v-if="edu.type == 'degree'"/>
            <i class="fa fa-file-text" v-if="edu.type == 'diploma'"/>
            <span class="degree">{{edu.degree}}</span> | <span class="time">{{edu.begin}}</span> - <span class="time">{{edu.end}}</span> <br/>
            <span class="institution">{{edu.institution}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'education',
        props: ['profile'],
        computed:{
            educationSorted:function(){
                return this.profile.education.sort((a,b) => b.end > a.end);
            }
        }
    }

</script>

<style scoped>
    #education {
        width: 60%;
        margin: auto;
        margin-top: 100px;
    }

    .item{
        margin: 3em;
    }

    .degree{
        font-size: 1.4em;
    }

    .time{
        font-size: 1.1em;
    }

    .institution{
        font-size: 1.2em;
    }
</style>