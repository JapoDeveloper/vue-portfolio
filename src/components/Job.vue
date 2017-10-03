<template>
    <div id="jobs">
        <div class="item" v-for="job in profile.experience" :key="job.id">
                <span class="title">{{job.jobTitle}}</span> | <span class="time">{{job.begin}}</span> - <span class="time">{{job.end}} <span v-if="job.end == undefined">Present</span></span> <br/>
                <span class="company"><i class="fa fa-building"/> {{job.company}}</span>
                <br/>
                <span class="location"><i class="fa fa-map-marker"/> {{job.location}}</span>
                <p class="description">
                    {{job.description}}
                </p>
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
        width: 60%;
        margin: auto;
        margin-top: 100px;
    }

    .item{
        margin: 3em;
    }
</style>