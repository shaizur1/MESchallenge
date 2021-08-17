export class Player {
    name: string;
    guesses: number;
    time: number;
    score: number;
    isPlaying: boolean;
    constructor(name) {
        this.name = name;
        this.guesses = 0;
        this.time = 0;
        this.isPlaying = true;
    }
    incrementGuess() {
        this.guesses += 1;
    }
    finishPlaying() {
        this.isPlaying = false;
    }
    setTime(finalTime) {
        this.time = finalTime;
    }
    calculateScore() {
        this.score = (this.time + this.guesses);
    }
}