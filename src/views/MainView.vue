<template>
	<dice-roll></dice-roll>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import DiceRoll from '../components/diceRoll/dice-roll.vue';

Vue.component('dice-roll', DiceRoll);

@Component
export default class MainView extends Vue { }

</script><