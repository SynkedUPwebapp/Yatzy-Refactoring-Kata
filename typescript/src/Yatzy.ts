export default class Yatzy {
  private dice: number[];

  constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
    this.dice = [d1, d2, d3, d4, d5]
  }

  public chance(): number {
    return this.dice.reduce((prev, current) => 
      prev + current
    , 0)
  }

  public yatzy(): number {
    return this.tally().some(x => x >= 5) ? 50 : 0
  }

  private sum(number:number): number {
    return this.dice.reduce((prev, current) => 
      current == number ? prev + number : prev
    , 0)
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
    let score = 0
    this.tally().forEach((tally, index) => {
      if (tally >= n)
        score = (index+1) * n
    })
    
    return score
  }

  public four_of_a_kind(): number {
    return this.ofAKind(4)
  }

  public three_of_a_kind(): number {
    return this.ofAKind(3)
  }

  private straight(startingIndex:number, points: number) : number {
    let isStraight = this.tally()
      .slice(startingIndex, 5)
      .every(x => x === 1)
    return isStraight ? points : 0
  }

  public smallStraight(): number {
    return this.straight(0, 15)
  }

  public largeStraight(): number {
    return this.straight(1, 20)
  }

  public fullHouse(): number {
    let double = false
    let triple = false
    let total = 0
    
    this.tally().forEach((tally, index) => {
      if (tally == 2) {
        double = true
        total += (index + 1) * 2
      } else if (tally == 3) {
        triple = true
        total += (index + 1) * 3
      }
    })

    return double && triple ? total : 0
  }
}
