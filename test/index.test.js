import { living } from './../src/index';

describe('Languages', () => {
    it('load list of living languages', () => {
        expect(living).toBeDefined();
        expect(living.cze).toEqual('Czech');
    });
});
