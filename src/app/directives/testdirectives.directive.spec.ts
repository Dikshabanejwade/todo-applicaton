import { TestdirectiveDirective } from '../testdirective.directive';
import { TestdirectivesDirective } from './testdirectives.directive';

describe('TestdirectivesDirective', () => {
  it('should create an instance', () => {
    const directive = new TestdirectiveDirective();
    expect(directive).toBeTruthy();
  });
});
