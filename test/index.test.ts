import test from 'tape';

test('index', async (t: test.Test) => {
  t.equal(process.env.CHECK, '1');
  t.end();
});
