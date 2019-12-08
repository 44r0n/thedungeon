<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <introduction />
            </div>
            <div class="column">
                <section class="section">
                    <div class="container">
                        <b-tabs type="is-boxed">
                            <b-tab-item label="Login">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus ratione voluptatibus quisquam repellendus, id atque totam ex ea explicabo. Iusto fugit sint vero similique quod reiciendis nulla quae blanditiis?
                            </b-tab-item>
                            <b-tab-item label="Register" >
                                <Register />
                            </b-tab-item>
                        </b-tabs>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import Introduction from '../components/public/Introduction.vue';
import Register from '../components/public/Register.vue';

Vue.component('introduction', Introduction);
Vue.component('Register', Register);

@Component
export default class PublicView extends Vue {

}
</script>

<style>
.tab-content {
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>
