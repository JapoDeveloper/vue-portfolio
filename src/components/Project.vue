<template>
    <div id="projects" class="defaultComponent">
        <div class="item" v-for="project in profile.projects" :key="project.name">
            <div class="projectHeader">
                <div class="title Teal">{{project.name}}</div>
                <div class="link">
                    <a :href="project.url" target="_blank" class="Cyan">{{project.url}}</a>
                </div>
                <div class="description">{{project.description}}</div>
                <div id="technologies">
                    <div class="subtitle Cyan">Technologies</div>
                    <ul>
                        <li v-for="tech in project.techonologies" :key="tech.name">
                            <i :class="[tech.logo,'Teal']"></i> {{tech.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="projectFeatureImage">
                <img :src="project.featuredImage" class="img-circle" width="200" height="200" />
            </div>
            <div id="gallery">
                <div class="subtitle Cyan">Gallery</div>

                <div class="row">
                    <div class="col-xs-6 col-md-3" v-for="img in project.gallery" :key="img.url">
                        <a href="#" class="thumbnail">
                            <img :src="img.url" :alt="img.name">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project',
    props: ['profile']
}
</script>

<style scoped>
#projects {}

.item {
    width: 100%;
    margin: 1em;
    border-bottom: 1px solid #ccc;
}

.title {
    font-size: 1.3em;
    font-weight: bold;
}

.subtitle {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 10px;
}

.link {
    font-size: 1em;
    font-style: italic;
}

.description {
    margin: 1em;
}

.projectHeader {
    width: 60%;
    display: inline-block;
    float: left;
}

.projectFeatureImage {
    width: 40%;
    display: inline-block;
    float: left;
    text-align: center;
}

#gallery li {
    display: inline-block;
    margin: 0px 10px;
}
</style>


