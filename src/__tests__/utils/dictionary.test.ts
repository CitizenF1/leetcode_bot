import dictionary from '../../utils/dictionary';

test('utils.dictionary file', () => {
  const errorMessage = 'placeholder_error_message';

  expect(dictionary.SERVER_MESSAGES.CONNECTION_STATUS.ERROR(errorMessage))
    .toBe(`Database connection error: ${errorMessage}`);
});