export function saveDiceRoll(diceRoll: string): void {
	const diceRolls = localStorage.getItem('diceRolls') as string;
	if (diceRolls && diceRolls.indexOf(diceRoll) > -1)
		return;

	if (!diceRolls)
		return localStorage.setItem('diceRolls', diceRoll);

	localStorage.setItem('diceRolls', localStorage.getItem('diceRolls') + `,${diceRoll}`);
}

export function getDiceRolls(): string[] {
	return localStorage.getItem('diceRolls')?.split(',') || [];
}

export function clearRolls(): void {
	localStorage.removeItem('diceRolls');
}