interface Number {
	times(f: (n: number) => void): void;
}

Number.prototype.times = function(f: (n: number) => void): void {
	for (let i = 0; i < this.valueOf(); i++) {
		f(i);
	}
}