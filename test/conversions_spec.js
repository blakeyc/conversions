import { describe, it } from 'mocha';
import { expect } from 'chai';
import conversions from '../src/conversions';

describe('conversions', () => {
  it('should load as a module', (done) => {
    expect(conversions).to.exist;
    done();
  });

  it('should return null if a proper value is not provided', (done) => {
    const test = conversions('a', 'metres', 'madeupmeasure');
    expect(test).to.be.null;
    done();
  });

  it('should return null if any unit type not found', (done) => {
    const test = conversions(1, 'metres', 'madeupmeasure');
    expect(test).to.be.null;
    done();
  });

  it('should handle being passed ints correctly', (done) => {
    const test = conversions(1000, 'metres', 'kilometres');
    expect(test).to.be.a('number');
    expect(test).to.equal(1);
    done();
  });

  it('should handle being passed floats correctly', (done) => {
    const test = conversions(1000.5, 'metres', 'kilometres');
    expect(test).to.be.a('number');
    expect(test).to.equal(1.0005);
    done();
  });

  it('should convert metres to kilometres', (done) => {
    const test = conversions(1000, 'metres', 'kilometres');
    expect(test).to.be.a('number');
    expect(test).to.equal(1);
    done();
  });

  it('should convert kilometres to metres', (done) => {
    const test = conversions(1, 'kilometres', 'metres');
    expect(test).to.be.a('number');
    expect(test).to.equal(1000);
    done();
  });

  it('should convert metres to feet', (done) => {
    const test = conversions(1, 'metres', 'feet');
    expect(test).to.be.a('number');
    expect(test).to.equal(3.28084);
    done();
  });

  it('should convert kilometres to feet', (done) => {
    const test = conversions(1, 'kilometres', 'feet');
    expect(test).to.be.a('number');
    expect(test).to.equal(3280.84);
    done();
  });

  it('should convert feet to metres', (done) => {
    const test = conversions(1, 'feet', 'metres');
    expect(test).to.be.a('number');
    expect(test).to.equal(0.3048);
    done();
  });

  it('should convert feet to kilometres', (done) => {
    const test = conversions(1, 'feet', 'kilometres');
    expect(test).to.be.a('number');
    expect(test).to.equal(0.0003048);
    done();
  });

  it('should convert m to km using aliases', (done) => {
    const test = conversions(1000, 'm', 'km');
    expect(test).to.be.a('number');
    expect(test).to.equal(1);
    done();
  });

  it('should convert mi to km using aliases', (done) => {
    const test = conversions(1, 'mi', 'km');
    expect(test).to.be.a('number');
    expect(test).to.equal(1.60934);
    done();
  });

});
