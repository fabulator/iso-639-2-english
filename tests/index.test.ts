import { living } from '../src';

describe('Languages', () => {
    it('load list of living languages', () => {
        expect(living).toBeDefined();
        expect(living.cze).toEqual('Czech');
    });
});
