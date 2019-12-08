import { describe } from 'mocha';
import { expect } from 'chai';
import { createDiceRoll, isValidDiceRoll, roll } from './diceRoll';

describe('Given a roll type', () => {
	it('Validates 1d6', () => {
		const valid = isValidDiceRoll('1d6');
		expect(valid).to.be.true;
	});

	it('Creates 1d6', () => {
		const diceRoll = createDiceRoll('1d6');
		expect(diceRoll.quantity).to.be.equal(1);
		expect(diceRoll.dice).to.be.equal(6);
		expect(diceRoll.objective).to.be.false;
	});

	it('Validates 2d10', () => {
		const valid = isValidDiceRoll('2d10');
		expect(valid).to.be.true;
	});

	it('Creates 2d10', () => {
		const diceRoll = createDiceRoll('2d10');
		expect(diceRoll.quantity).to.be.equal(2);
		expect(diceRoll.dice).to.be.equal(10);
		expect(diceRoll.objective).to.be.false;
	});

	it('Validates 3d8', () => {
		const valid = isValidDiceRoll('3d8');
		expect(valid).to.be.true;
	});

	it('Creates 3d8', () => {
		const diceRoll = createDiceRoll('3d8');
		expect(diceRoll.quantity).to.be.equal(3);
		expect(diceRoll.dice).to.be.equal(8);
		expect(diceRoll.objective).to.be.false;
	});

	it('Validates 10d10', () => {
		const valid = isValidDiceRoll('10d10');
		expect(valid).to.be.true;
	});

	it('Creates 10d10', () => {
		const diceRoll = createDiceRoll('10d10');
		expect(diceRoll.quantity).to.be.equal(10);
		expect(diceRoll.dice).to.be.equal(10);
		expect(diceRoll.objective).to.be.false;
	});

	it('Validates 1o3d10', () => {
		const valid = isValidDiceRoll('1o3d10');
		expect(valid).to.be.true;
	});

	it('Creates 1o3d10', () => {
		const diceRoll = createDiceRoll('1o3d10');
		expect(diceRoll.quantity).to.be.equal(3);
		expect(diceRoll.dice).to.be.equal(10);
		expect(diceRoll.objective).to.be.true;
		if(diceRoll.objective)
			expect(diceRoll.objectiveType).to.be.equal('normal');
	});

	it('Validates 1o3d10-', () => {
		const valid = isValidDiceRoll('1o3d10-');
		expect(valid).to.be.true;
	});

	it('Creates 1o3d10-', () => {
		const diceRoll = createDiceRoll('1o3d10-');
		expect(diceRoll.quantity).to.be.equal(3);
		expect(diceRoll.dice).to.be.equal(10);
		expect(diceRoll.objective).to.be.true;
		if(diceRoll.objective)
			expect(diceRoll.objectiveType).to.be.equal('min');
	});

	it('Validates 1o3d10+', () => {
		const valid = isValidDiceRoll('1o3d10+');
		expect(valid).to.be.true;
	});

	it('Creates 1o3d10+', () => {
		const diceRoll = createDiceRoll('1o3d10+');
		expect(diceRoll.quantity).to.be.equal(3);
		expect(diceRoll.dice).to.be.equal(10);
		expect(diceRoll.objective).to.be.true;
		if(diceRoll.objective)
			expect(diceRoll.objectiveType).to.be.equal('max');
	});

	it('1dd3 is not valid', () => {
		const valid = isValidDiceRoll('1dd3');
		expect(valid).to.be.false;
	});

	it('Applies Math operation like "1d6 + 3"', () => {
		const valid = isValidDiceRoll('1d6+ 3');
		expect(valid).to.be.true;
	});

	it('Applies Math operation like "55 + 1d10"', () => {
		const valid = isValidDiceRoll('55 + 1d10');
		expect(valid).to.be.true;
	});

	it('Applies Math operation with dice Rolls. Like "1d6 + 1d4"', () => {
		const valid = isValidDiceRoll('1d6 + 1d4 ');
		expect(valid).to.be.true;
		const result = roll('1d6 + 1d4');
		expect(result).to.not.be.equals(1);
	});
});