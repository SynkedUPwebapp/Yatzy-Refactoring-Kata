export default class Yatzy {
  private dice: number[];

  constructor(d1: number, d2: number, d3: number, d4: number, _5: number) {
    this.dice = [];
    this.dice[0] = d1;
    this.dice[1] = d2;
    this.dice[2] = d3;
    this.dice[3] = d4;
    this.dice[4] = _5;
  }

  public chance(): number {
    var total = 0;
    total += this.dice[0];
    total += this.dice[1];
    total += this.dice[2];
    total += this.dice[3];
    total += this.dice[4];
    return total;
  }

  public yatzy(): number {
    const tallies = this.tally()
    for (let i = 0; i < 6; i++) if (tallies[i] >= 5) return 50;
    return 0;
  }

  private sum(number:number): number {
    let sum = 0;
    if (this.dice[0] == number) sum += number;
    if (this.dice[1] == number) sum += number;
    if (this.dice[2] == number) sum += number;
    if (this.dice[3] == number) sum += number;
    if (this.dice[4] == number) sum += number;

    return sum;
  }

  public ones(): number {
    return this.sum(1);
  }

  public twos(): number {
    return this.sum(2);
  }

  public threes(): number {
    return this.sum(3);
  }

  public fours(): number {
    return this.sum(4)
  }

  public fives(): number {
    return this.sum(5)
  }

  public sixes(): number {
    return this.sum(6)
  }

  private tally() : number[] {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0];
    tallies[this.dice[0] - 1] += 1;
    tallies[this.dice[1] - 1] += 1;
    tallies[this.dice[2] - 1] += 1;
    tallies[this.dice[3] - 1] += 1;
    tallies[this.dice[4] - 1] += 1;
    return tallies
  }

  public score_pair(): number {
    const tallies = this.tally()
    var at;
    for (at = 0; at != 6; at++) if (tallies[6 - at - 1] >= 2) return (6 - at) * 2;
    return 0;
  }

  public two_pair(): number {
    const tallies = this.tally()
    var n = 0;
    var score = 0;
    for (let i = 0; i < 6; i += 1)
      if (tallies[6 - i - 1] >= 2) {
        n++;
        score += 6 - i;
      }
    if (n == 2) return score * 2;
    else return 0;
  }

  private ofAKind(n:number) : number {
    const tallies = this.tally()
    for (let i = 0; i < 6; i++) if (tallies[i] >= n) return (i + 1) * n;
    return 0
  }

  public four_of_a_kind(): number {
    return this.ofAKind(4)
  }

  public three_of_a_kind(): number {
    return this.ofAKind(3)
  }

  private straight(startingIndex:number, points: number) : number {
    const tallies = this.tally()
    let isStraight = true
    for(let i=startingIndex; i<tallies.length-1+startingIndex; i++) {
      if(tallies[i]!==1)
        isStraight = false
    }

    return isStraight ? points : 0
  }

  public smallStraight(): number {
    // const tallies = this.tally()
    // if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    // return 0;
    return this.straight(0, 15)
  }

  public largeStraight(): number {
    const tallies = this.tally()
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
  }

  public fullHouse(): number {
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    const tallies = this.tally()

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
  }
}
