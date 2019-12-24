<template>
	<div class='columns'>
		<div class="column is-11 is-offset-3">
			<div class="columns">
				<div class='column is-5'>
					<section>
						<b-field horizontal :label="rollTypeText" :type='diceInputFieldType' :message='diceFieldMessage'>
							<b-input name='subject' placeholder='1d6, 2d10, 1d9+2, 1o3d10' v-model='diceInput' expanded></b-input>
						</b-field>
						<b-field horizontal>
							<div class='column'>
								<b-button type='is-primary' @click='roll'><vue-fontawesome :icon="['fas','dice-d20']"/>&nbsp; {{ this.$t('rollButton') }}</b-button>
							</div>
							<div class='column'>
								<b-button type='is-primary' outlined @click='addToFavorites'><vue-fontawesome :icon="['fas', 'plus']"/>&nbsp; {{ this.$t('addToFavoritesButton') }}</b-button>
							</div>
							<div class='column'>
								<b-button type='is-danger' @click='clearFavorites'><vue-fontawesome :icon="['fas', 'trash']"/>&nbsp; {{ this.$t('clearFavoritesButton') }} </b-button>
							</div>
						</b-field>
					</section>
				</div>
				<div class='column is-5'>
					<section>
						<div class='field'>
							<div class='field-label is-normal' style='text-align: left'>
								<label class='label' v-show='result' ><vue-fontawesome :icon="['fas', 'arrow-right']" /> {{ diceRollResult }}</label>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class='columns'>
				<div class='column is-5'>
					<stored-rolls :diceRolls="diceRolls" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import inputField from '../../utils/inputField';
import { isValidDiceRoll, roll } from '../../utils/diceRoll';
import StoredRolls from './stored-rolls.vue';
import * as Store from '../../store/dice-roll.store';

Vue.component('stored-rolls', StoredRolls);

const rollError = 'The given roll type is not valid.';

@Component
export default class DiceRoll extends Vue {
	diceInputFieldType: inputField = '';
	diceInputFieldMessage = '';
	diceInput = '';
	diceRollResult = '';
	diceRolls = Store.getDiceRolls();

	get diceFieldType(): inputField {
		return this.diceInputFieldType;
	}

	get rollTypeText() {
		return this.$t('rollTypeLabel');
	}

	get diceFieldMessage(): string {
		return this.diceInputFieldMessage;
	}

	get result(): boolean {
		return this.diceRollResult !== '';
	}

	roll():void  {
		if (isValidDiceRoll(this.diceInput)) {
			this.setValidDiceRoll();
			this.diceRollResult = roll(this.diceInput);
		} else {
			this.setInvalidDiceRoll();
		}
	}

	addToFavorites(): void {
		if (isValidDiceRoll(this.diceInput)) {
			this.setValidDiceRoll();
			Store.saveDiceRoll(this.diceInput);
			this.diceRolls.push(this.diceInput);
		} else
			this.setInvalidDiceRoll();
	}

	clearFavorites(): void {
		Store.clearRolls();
		this.diceRolls = [];
	}

	private setInvalidDiceRoll() {
		this.diceInputFieldType = 'is-error';
		this.diceInputFieldMessage = rollError;
		this.diceRollResult = '';
	}

	private setValidDiceRoll() {
		this.diceInputFieldType = '';
		this.diceInputFieldMessage = '';
	}
}
</script>