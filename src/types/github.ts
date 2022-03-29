export interface GHSearch<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface GHRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;

  html_url: string;

  // Using Open API, always false
  private: false;

  owner: GHUser;
}

export interface GHUser {
  id: number;
  login: string;
  type: 'User' | 'Organization';
}

export interface GHIssue {
  id: number;
  url: string;

  closed_at: string | null;
  created_at: string;
  updated_at: string;
  state: 'open' | 'closed';

  title: string;
  body: string;
  comments: number;

  user: GHUser;
  closed_by: GHUser;
}

// [
//   {
//     node_id: 'MDU6SXNzdWUx',
//     repository_url: 'https://api.github.com/repos/octocat/Hello-World',
//     labels_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}',
//     comments_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347/comments',
//     events_url: 'https://api.github.com/repos/octocat/Hello-World/issues/1347/events',
//     html_url: 'https://github.com/octocat/Hello-World/issues/1347',
//     number: 1347,
//     labels: [
//       {
//         id: 208045946,
//         node_id: 'MDU6TGFiZWwyMDgwNDU5NDY=',
//         url: 'https://api.github.com/repos/octocat/Hello-World/labels/bug',
//         name: 'bug',
//         description: "Something isn't working",
//         color: 'f29513',
//         default: true,
//       },
//     ],
//     assignee: {
//       login: 'octocat',
//       id: 1,
//       node_id: 'MDQ6VXNlcjE=',
//       avatar_url: 'https://github.com/images/error/octocat_happy.gif',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/octocat',
//       html_url: 'https://github.com/octocat',
//       followers_url: 'https://api.github.com/users/octocat/followers',
//       following_url: 'https://api.github.com/users/octocat/following{/other_user}',
//       gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
//       starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
//       organizations_url: 'https://api.github.com/users/octocat/orgs',
//       repos_url: 'https://api.github.com/users/octocat/repos',
//       events_url: 'https://api.github.com/users/octocat/events{/privacy}',
//       received_events_url: 'https://api.github.com/users/octocat/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     assignees: [
//       {
//         login: 'octocat',
//         id: 1,
//         node_id: 'MDQ6VXNlcjE=',
//         avatar_url: 'https://github.com/images/error/octocat_happy.gif',
//         gravatar_id: '',
//         url: 'https://api.github.com/users/octocat',
//         html_url: 'https://github.com/octocat',
//         followers_url: 'https://api.github.com/users/octocat/followers',
//         following_url: 'https://api.github.com/users/octocat/following{/other_user}',
//         gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
//         starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
//         subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
//         organizations_url: 'https://api.github.com/users/octocat/orgs',
//         repos_url: 'https://api.github.com/users/octocat/repos',
//         events_url: 'https://api.github.com/users/octocat/events{/privacy}',
//         received_events_url: 'https://api.github.com/users/octocat/received_events',
//         type: 'User',
//         site_admin: false,
//       },
//     ],
//     milestone: {
//       url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1',
//       html_url: 'https://github.com/octocat/Hello-World/milestones/v1.0',
//       labels_url: 'https://api.github.com/repos/octocat/Hello-World/milestones/1/labels',
//       id: 1002604,
//       node_id: 'MDk6TWlsZXN0b25lMTAwMjYwNA==',
//       number: 1,
//       state: 'open',
//       title: 'v1.0',
//       description: 'Tracking milestone for version 1.0',
//       creator: {
//         login: 'octocat',
//         id: 1,
//         node_id: 'MDQ6VXNlcjE=',
//         avatar_url: 'https://github.com/images/error/octocat_happy.gif',
//         gravatar_id: '',
//         url: 'https://api.github.com/users/octocat',
//         html_url: 'https://github.com/octocat',
//         followers_url: 'https://api.github.com/users/octocat/followers',
//         following_url: 'https://api.github.com/users/octocat/following{/other_user}',
//         gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
//         starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
//         subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
//         organizations_url: 'https://api.github.com/users/octocat/orgs',
//         repos_url: 'https://api.github.com/users/octocat/repos',
//         events_url: 'https://api.github.com/users/octocat/events{/privacy}',
//         received_events_url: 'https://api.github.com/users/octocat/received_events',
//         type: 'User',
//         site_admin: false,
//       },
//       open_issues: 4,
//       closed_issues: 8,
//       created_at: '2011-04-10T20:09:31Z',
//       updated_at: '2014-03-03T18:58:10Z',
//       closed_at: '2013-02-12T13:22:01Z',
//       due_on: '2012-10-09T23:39:01Z',
//     },
//     locked: true,
//     active_lock_reason: 'too heated',
//     comments: 0,
//     pull_request: {
//       url: 'https://api.github.com/repos/octocat/Hello-World/pulls/1347',
//       html_url: 'https://github.com/octocat/Hello-World/pull/1347',
//       diff_url: 'https://github.com/octocat/Hello-World/pull/1347.diff',
//       patch_url: 'https://github.com/octocat/Hello-World/pull/1347.patch',
//     },
//     closed_at: null,
//     created_at: '2011-04-22T13:33:48Z',
//     updated_at: '2011-04-22T13:33:48Z',
//     author_association: 'COLLABORATOR',
//   },
// ];
