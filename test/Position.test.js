'use strict';

const expect = require("chai").expect;
const Position = require('../src/Position');
const { JDateRepository } = require('@behaver/jdate');
const Angle = require('@behaver/angle');

const angle = new Angle;

describe('#Position', () => {
  describe('#constructor(time)', () => {
    it('The param time should be a JDateRepository.', () => {
      expect(() => {
        let jdr = new JDateRepository(2334345, 'jde');
        new Position(jdr);
      }).not.to.throw();

      expect(() => {
        new Position(123);
      }).to.throw();
    })
  });

  describe('#verify', () => {
    it('天文算法 例 22.b', () => {
      let JD = (new JDateRepository(new Date('2028/11/13 8:0:0'), 'date')).JD,
          p = new Position(new JDateRepository(JD + 0.19, 'jd'));

      console.log(p.x, p.y, p.z);
    });
  })
})