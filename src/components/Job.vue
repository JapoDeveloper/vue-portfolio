<template>
    <div id="jobs" class="defaultComponent">
        <div class="item" v-for="job in profile.experience" :key="job.id">
                <span class="title">{{job.jobTitle}}</span> | <span class="time">{{job.begin}}</span> - <span class="time">{{job.end}} <span v-if="job.end == undefined">Present</span></span> <br/>
                <span class="company"><i class="fa fa-building"/> {{job.company}}</span>
                <br/>
                <span class="location"><i class="fa fa-map-marker"/> {{job.location}}</span>
                <p class="description" v-html="job.description"/>
        </div>
    </div>
</template>

<script>
    export default{
        name:'job',
        props:['profile']

    }
</script>

<style scoped>
    #jobs {
    }

    .item{
        margin: 1em;
        border-bottom: 1px solid #ccc;
    }

    .title{
        font-size: 1.3em;
        color:#17657D;
        font-weight: bold;
    }

    .description{
        padding: 1em;
        font-size: 1.1em;
        text-align: justify;
    }
</style>