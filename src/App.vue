<template>
    <div>
        <nav-bar></nav-bar>
        <div class='container'>
            <router-view></router-view>
	    </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue'

Vue.component('nav-bar', NavBar);

@Component
export default class App extends Vue {

}
</script>

<style lang='scss'>
.container .columns {
	margin: 0;
}

@import 'app.scss';
</style>