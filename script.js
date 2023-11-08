const board = document.getElementById('game-board'),
	scoreboard = document.getElementById('score');

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	equals(x, y) {
		return this.x === x && this.y === y;
	}
}

const ships = [
	[new Point(1, 1), new Point(1, 2), new Point(1, 3), new Point(1, 4)],
	[new Point(3, 0), new Point(4, 0), new Point(5, 0)]
];

let score = 0;
for (let i = 0; i < 10; i++) {
	const row = document.createElement('div');
	row.className = 'row';

	for (let j = 0; j < 10; j++) {
		const tile = document.createElement('div');
		tile.className = 'tile';

		tile.addEventListener('click', () => {
			if (isHit(i, j)) {
				tile.classList.add('hit');
				score++;
				scoreboard.textContent = score.toString();
			} else {
				tile.classList.add('miss');
			}
		});

		row.appendChild(tile);
	}

	board.appendChild(row);
}

function isHit(i, j) {
	let hit = false;
	ships.forEach((ship) => {
		ship.forEach((point) => {
			if (point.equals(i, j)) {
				hit = true;
			}
		});
	});

	return hit;
}

