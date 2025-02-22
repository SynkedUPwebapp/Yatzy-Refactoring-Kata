import assert from 'assert';

import Yatzy from '../src/Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    assert.strictEqual(15, new Yatzy(2, 3, 4, 5, 1).chance());
    assert.strictEqual(16, new Yatzy(3, 3, 4, 5, 1).chance());
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    assert.strictEqual(50, new Yatzy(4, 4, 4, 4, 4).yatzy());
    assert.strictEqual(50, new Yatzy(6, 6, 6, 6, 6).yatzy());
    assert.strictEqual(0, new Yatzy(6, 6, 6, 6, 3).yatzy());
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    assert.strictEqual(1, new Yatzy(1, 2, 3, 4, 5).ones());
    assert.strictEqual(2, new Yatzy(1, 2, 1, 4, 5).ones());
    assert.strictEqual(0, new Yatzy(6, 2, 2, 4, 5).ones());
    assert.strictEqual(4, new Yatzy(1, 2, 1, 1, 1).ones());
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    assert.strictEqual(4, new Yatzy(1, 2, 3, 2, 6).twos());
    assert.strictEqual(10, new Yatzy(2, 2, 2, 2, 2).twos());
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    assert.strictEqual(6, new Yatzy(1, 2, 3, 2, 3).threes());
    assert.strictEqual(12, new Yatzy(2, 3, 3, 3, 3).threes());
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    assert.strictEqual(12, new Yatzy(4, 4, 4, 5, 5).fours());
    assert.strictEqual(8, new Yatzy(4, 4, 5, 5, 5).fours());
    assert.strictEqual(4, new Yatzy(4, 5, 5, 5, 5).fours());
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    assert.strictEqual(10, new Yatzy(4, 4, 4, 5, 5).fives());
    assert.strictEqual(15, new Yatzy(4, 4, 5, 5, 5).fives());
    assert.strictEqual(20, new Yatzy(4, 5, 5, 5, 5).fives());
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    assert.strictEqual(0, new Yatzy(4, 4, 4, 5, 5).sixes());
    assert.strictEqual(6, new Yatzy(4, 4, 6, 5, 5).sixes());
    assert.strictEqual(18, new Yatzy(6, 5, 6, 6, 5).sixes());
  });
});

describe('One pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.strictEqual(6, new Yatzy(3, 4, 3, 5, 6).score_pair());
    assert.strictEqual(10, new Yatzy(5, 3, 3, 3, 5).score_pair());
    assert.strictEqual(12, new Yatzy(5, 3, 6, 6, 5).score_pair());
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    assert.strictEqual(16, new Yatzy(3, 3, 5, 4, 5).two_pair());
    assert.strictEqual(16, new Yatzy(3, 3, 5, 5, 5).two_pair());
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.strictEqual(9, new Yatzy(3, 3, 3, 4, 5).three_of_a_kind());
    assert.strictEqual(15, new Yatzy(5, 3, 5, 4, 5).three_of_a_kind());
    assert.strictEqual(9, new Yatzy(3, 3, 3, 3, 5).three_of_a_kind());
    assert.strictEqual(9, new Yatzy(3, 3, 3, 3, 3).three_of_a_kind());
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.strictEqual(12, new Yatzy(3, 3, 3, 3, 5).four_of_a_kind());
    assert.strictEqual(20, new Yatzy(5, 5, 5, 4, 5).four_of_a_kind());
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    assert.strictEqual(15, new Yatzy(1, 2, 3, 4, 5).smallStraight());
    assert.strictEqual(15, new Yatzy(2, 3, 4, 5, 1).smallStraight());
    assert.strictEqual(0, new Yatzy(1, 2, 2, 4, 5).smallStraight());
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    assert.strictEqual(20, new Yatzy(6, 2, 3, 4, 5).largeStraight());
    assert.strictEqual(20, new Yatzy(2, 3, 4, 5, 6).largeStraight());
    assert.strictEqual(0, new Yatzy(1, 2, 2, 4, 5).largeStraight());
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.strictEqual(18, new Yatzy(6, 2, 2, 2, 6).fullHouse());
    assert.strictEqual(0, new Yatzy(2, 3, 4, 5, 6).fullHouse());
    assert.strictEqual(0, new Yatzy(2, 2, 4, 4, 6).fullHouse());
  });
});
