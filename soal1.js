const deret = (num) => {
	const arr = [];
	for (let i = 1; i <= num; i++) {
		i % 3 === 0 && i % 5 === 0
			? (arr[i - 1] = "ApaBole")
			: i % 3 === 0
			? (arr[i - 1] = "Apa")
			: i % 5 === 0
			? (arr[i - 1] = "Bole")
			: arr.push(i);
	}
	console.log(arr.join());
};

deret(100);
