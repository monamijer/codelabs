interface HasScore{
	score: number;
}
addPointsToScore(player: HasScore, points: number): void{
	player.score += points;
};

