import { user1 } from '../__mocks__/data.mock';
import { mockUserWithSolved } from '../__mocks__/utils.mock';
import {
  calculateCml,
  getProblemsSolved,
  getGraphqlLink,
  getLeetcodeUsernameLink,
  getLeetcodeProblemLink,
  getRecentSubmissions,
} from '../../leetcode/utils';
import constants from '../../utils/constants';
import { RecentSubmissionList } from '../../leetcode/models';

const { CML, SYSTEM } = constants;

beforeEach(() => {
  // Fix changed values before each test case
  constants.CML = CML;
  constants.SYSTEM = SYSTEM;
});

test('leetcode.utils.getLeetcodeUsernameLink action', async () => {
  // Valid: Regular Case
  const leetcodeUrl = SYSTEM.LEETCODE_URL;
  const username1 = 'test_username1';
  const link1 = getLeetcodeUsernameLink(username1);

  expect(link1).toBe(`${leetcodeUrl}/${username1}`);

  // Valid: Updated Case
  const randomUrl = 'random_url';
  const username2 = 'test_username2';
  constants.SYSTEM.LEETCODE_URL = randomUrl;
  const link2 = getLeetcodeUsernameLink(username2);

  expect(link2).toBe(`${randomUrl}/${username2}`);
});

test('leetcode.utils.getLeetcodeProblemLink action', async () => {
  // Valid: Regular Case
  const leetcodeUrl = SYSTEM.LEETCODE_URL;
  const title1 = 'test_title1';
  const link1 = getLeetcodeProblemLink(title1);

  expect(link1).toBe(`${leetcodeUrl}/problems/${title1}`);

  // Valid: Updated Case
  const randomUrl = 'random_url';
  const title2 = 'test_title2';
  constants.SYSTEM.LEETCODE_URL = randomUrl;
  const link2 = getLeetcodeProblemLink(title2);

  expect(link2).toBe(`${randomUrl}/problems/${title2}`);
});

test('leetcode.utils.getGraphqlLink action', async () => {
  // Valid: Regular Case
  const leetcodeUrl = SYSTEM.LEETCODE_URL;
  const link1 = getGraphqlLink();

  expect(link1).toBe(`${leetcodeUrl}/graphql`);

  // Valid: Updated Case
  const randomUrl = 'random_url';
  constants.SYSTEM.LEETCODE_URL = randomUrl;
  const link2 = getGraphqlLink();

  expect(link2).toBe(`${randomUrl}/graphql`);
});

test('leetcode.utils.calculateCml action', async () => {
  const easySolved = 10;
  const mediumSolved = 8;
  const hardSolved = 13;

  // Valid: Check with regular values
  constants.CML = {
    EASY_POINTS: 1,
    MEDIUM_POINTS: 2,
    HARD_POINTS: 3,
  };
  const cml1 = calculateCml(easySolved, mediumSolved, hardSolved);

  expect(cml1).toBe(65);

  // Valid: Check with updated values
  constants.CML = {
    EASY_POINTS: 5,
    MEDIUM_POINTS: 15,
    HARD_POINTS: 50,
  };
  const cml2 = calculateCml(easySolved, mediumSolved, hardSolved);

  expect(cml2).toBe(820);
});

test('leetcode.utils.getProblemsSolved action', async () => {
  // Valid: Check with regular values
  constants.CML = {
    EASY_POINTS: 1,
    MEDIUM_POINTS: 2,
    HARD_POINTS: 3,
  };
  const cmlForUser1 = getProblemsSolved(user1.submitStats.acSubmissionNum);
  // Default value for user1
  // Easy: 12312
  // Medium: 2321
  // Hard: 2231
  const calculatedCml1 = calculateCml(12312, 2321, 2231);

  expect(cmlForUser1.cumulative).toBe(calculatedCml1);

  // Valid: Check with updated CML values
  constants.CML = {
    EASY_POINTS: 5,
    MEDIUM_POINTS: 15,
    HARD_POINTS: 50,
  };
  const cml2 = getProblemsSolved(user1.submitStats.acSubmissionNum);
  const calculatedCml2 = calculateCml(12312, 2321, 2231);

  expect(cml2.cumulative).toBe(calculatedCml2);

  // Valid: Check with updated Problem values
  constants.CML = {
    EASY_POINTS: 1,
    MEDIUM_POINTS: 2,
    HARD_POINTS: 3,
  };

  const easySolved = 100;
  const mediumSolved = 200;
  const hardSolved = 300;
  const updatedUser1 = mockUserWithSolved(easySolved, mediumSolved, hardSolved);

  const cml3 = getProblemsSolved(updatedUser1.submitStats.acSubmissionNum);
  const calculatedCml3 = calculateCml(easySolved, mediumSolved, hardSolved);

  expect(cml3.cumulative).toBe(calculatedCml3);
});

test('leetcode.utils.getRecentSubmissions action', async () => {
  const recentSubmissionList: RecentSubmissionList = {
    languageList: [
      {
        id: 10,
        name: 'python',
        verboseName: 'Python',
      },
      {
        id: 12,
        name: 'javascript',
        verboseName: 'Javascript',
      },
      {
        id: 18,
        name: 'csharp',
        verboseName: 'C#',
      },
    ],
    recentSubmissionList: [
      {
        lang: 'python',
        statusDisplay: 'Time Limit Exceeded',
        timestamp: '46468465651',
        title: 'Submission Name 1',
        titleSlug: 'submission-name-1',
      },
      {
        lang: 'javascript',
        statusDisplay: 'Accepted',
        timestamp: '46468465652',
        title: 'Submission Name 2',
        titleSlug: 'submission-name-2',
      },
      {
        lang: 'csharp',
        statusDisplay: 'Memory Limit Exceeded',
        timestamp: '46468465653',
        title: 'Submission Name 3',
        titleSlug: 'submission-name-3',
      },
    ],
  };

  const submissionData = getRecentSubmissions(recentSubmissionList);
  const submissionNode1 = submissionData[0];
  const submissionNode2 = submissionData[1];
  const submissionNode3 = submissionData[2];

  // Check Submission 1
  expect(submissionNode1.link)
    .toBe(getLeetcodeProblemLink('submission-name-1'));
  expect(submissionNode1.status)
    .toBe(constants.SUBMISSION_STATUS_MAP['Time Limit Exceeded']);
  expect(submissionNode1.language).toBe('Python');
  expect(submissionNode1.name).toBe('Submission Name 1');

  // Check Submission 2
  expect(submissionNode2.link)
    .toBe(getLeetcodeProblemLink('submission-name-2'));
  expect(submissionNode2.status)
    .toBe(constants.SUBMISSION_STATUS_MAP.Accepted);
  expect(submissionNode2.language).toBe('Javascript');
  expect(submissionNode2.name).toBe('Submission Name 2');

  // Check Submission 3
  expect(submissionNode3.link)
    .toBe(getLeetcodeProblemLink('submission-name-3'));
  expect(submissionNode3.status)
    .toBe(constants.SUBMISSION_STATUS_MAP['Memory Limit Exceeded']);
  expect(submissionNode3.language).toBe('C#');
  expect(submissionNode3.name).toBe('Submission Name 3');
});
