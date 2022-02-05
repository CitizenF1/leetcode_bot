/* eslint-disable camelcase */
/* eslint-disable no-console */
import { user1, user2 } from '../__mocks__/data.mock';
import { mockButtonOptions } from '../__mocks__/utils.mock';
import { createButtonsFromUsers } from '../../chatbots/utils';

beforeAll(async () => {
  jest.setTimeout(30000);
});

afterAll(async () => {
  jest.setTimeout(5000);
});

test('chatbots.utils.createButtonsFromUsers action', async () => {
  // Valid: 2 users
  const action1 = 'action1';
  const mockOptions1 = mockButtonOptions(action1, [user1, user2]);
  const buttonsResponse1 = createButtonsFromUsers(mockOptions1);

  expect(buttonsResponse1.length).toBe(2);

  const user1response1 = buttonsResponse1[0];
  const user2response1 = buttonsResponse1[1];

  expect(user1response1.text).toBe(user1.username);
  expect(user2response1.text).toBe(user2.username);

  expect(user1response1.action).toBe(`/${action1} ${user1.username} `);
  expect(user2response1.action).toBe(`/${action1} ${user2.username} `);

  // Valid: 3 users
  const action2 = 'action2';
  const otherUsername = 'other_username';
  const mockOptions2 = mockButtonOptions(
    action2, [user1, user2, { ...user1, username: otherUsername }],
  );
  const buttonsResponse2 = createButtonsFromUsers(mockOptions2);

  expect(buttonsResponse2.length).toBe(3);

  // Valid: Add password
  const action3 = 'action3';
  const password3 = 'password3';
  const mockOptions3 = mockButtonOptions(action3, [user1, user2], password3);
  const buttonsResponse3 = createButtonsFromUsers(mockOptions3);

  const user1response2 = buttonsResponse3[0];
  const user2response2 = buttonsResponse3[1];

  expect(user1response2.action).toBe(`/${action3} ${user1.username} ${password3}`);
  expect(user2response2.action).toBe(`/${action3} ${user2.username} ${password3}`);

  // Valid: No users
  const mockOptions4 = mockButtonOptions('', []);
  const buttonsResponse4 = createButtonsFromUsers(mockOptions4);

  expect(buttonsResponse4.length).toBe(0);
});
