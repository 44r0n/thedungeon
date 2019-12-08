<template>
	<section>
		<b-collapse class='panel' :open.sync='isOpen' >
			<div class='panel-heading' slot='trigger' role='button'>
				{{ this.$t('favoriteRollsLabel') }}
			</div>
			<div class='panel-block'>
				<div class="columns is-multiline is-mobile">
					<div class='column' v-for='diceRoll in diceRolls' :key='diceRoll'>
						<b-button type='is-primary' size='is-medium' @click='roll(diceRoll)'><vue-fontawesome :icon="['fas','dice-d20']"/>&nbsp; {{ diceRoll }} ({{ diceRollResults[diceRoll] }})</b-button>
					</div>
					<div class='column' v-show='noDiceRolls'>{{ this.$t('noRollsInFavoritesLabel') }}</div>
				</div>
			</div>
		</b-collapse>
	</section>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import DiceRoll from './dice-roll.vue';
import { roll } from '../../utils/diceRoll';

@Component
export default class StoredRolls extends Vue {
	isOpen: boolean = false;
	diceRollResults: { [rollType: string]: string } = {};

	@Prop() diceRolls: string[];

	roll(diceRoll: string): void {
		this.diceRollResults[diceRoll] = roll(diceRoll);
		this.$forceUpdate(); // ? Why should I forceUpdate?
	}

	created() {
		this.diceRolls.forEach(dr => this.diceRollResults[dr] = '0');
	}

	get noDiceRolls(): boolean {
		return this.diceRolls.length === 0;
	}
}
</script>