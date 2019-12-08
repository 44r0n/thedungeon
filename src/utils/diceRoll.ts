import './number.extensions';

type objectiveType = 'normal' | 'min' | 'max';

type diceRoll = Readonly<{
	quantity: number;
	dice: number;
	objective: false;
} | {
	quantity: number;
	dice: number;
	objective: true;
	objectiveType: objectiveType;
}>;

const reg = /([1-9][0-9]*d[1-9][0-9]*)|([1-9][0-9]*o[1-9][0-9]*d[1-9][0-9]*[+]?[-]?)/g;

export function isValidDiceRoll(diceRollType: string): boolean {
	reg.lastIndex = 0;
	return reg.test(diceRollType.toString());
}

export function createDiceRoll(diceRollType: string): diceRoll {
	const split = diceRollType.split('d');

	if (split[0][1] !== 'o') {
		const quantity = parseInt(split[0]);
		const dice = parseInt(split[1]);
		return {quantity, dice, objective: false};
	}

	let objectiveType: objectiveType = 'normal';

	if(split[1].indexOf('+') !== -1)
		objectiveType = 'max';

	if(split[1].indexOf('-') !== -1)
		objectiveType = 'min';

	return { quantity: 3, dice: 10, objective: true, objectiveType };
}

export function roll(diceRoll: diceRoll | string): string {
	reg.lastIndex = 0;
	if(typeof(diceRoll) === 'string') {
		const rolledString = diceRoll.replace(reg, (str) => roll(createDiceRoll(str)).toString());

		return rolledString.split(',').map(cs => eval(cs)).join(',');
	}

	let result = 0;
	if(!diceRoll.objective) {
		diceRoll.quantity.times(() => {
			result += rollDice(diceRoll.dice);
		});
	} else {
		const rolls: number[] = [];
		diceRoll.quantity.times(() => {
			rolls.push(rollDice(diceRoll.dice));
		});

		rolls.sort((n1, n2) => n1 - n2);

		if (diceRoll.objectiveType === 'normal')
			result = rolls[1];

		if(diceRoll.objectiveType === 'max')
			result = rolls[2];

		if(diceRoll.objectiveType === 'min')
			result = rolls[0];
	}

	return result.toString();
}

function rollDice(dice: number): number {
	return Math.floor(Math.random() * dice) + 1;
}