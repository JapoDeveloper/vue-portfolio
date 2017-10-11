<template>
    <div id="education" class="defaultComponent">
        <div class="item" v-for="edu in educationSorted" :key="edu.id">
            <i class="fa fa-graduation-cap Teal" v-if="edu.type == 'degree'"/>
            <i class="fa fa-file-text Cyan" v-if="edu.type == 'diploma'"/>
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
    }

    .item{
        margin: 3em;
    }

    .degree{
        font-size: 1.3em;
        color:#17657D;
        font-weight: bold;
    }

    .time{
        font-size: 1.1em;
    }

    .institution{
        font-size: 1.1em;
    }
</style>