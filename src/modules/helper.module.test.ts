/* Module */
import transformNavJSON from './helper.module';
/* Type */
import testData from '../data/testData.json';

test('transform the json into a useable navigation', () => {
  const results = transformNavJSON(testData);
  expect(results).toMatchSnapshot();
});
