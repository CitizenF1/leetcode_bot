# LeetCode BOT Commands

### Start

Starting page that contains links to all other actions.

| Name | Start |
| --- | --- |
| Arguments | - |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | No |

| Request | Response |
| --- | --- |
| `/start` | ![Start](https://i.imgur.com/fxH0iad.png) | 

---

### Rating

Prints out rating of Users. You can display cumulative rating by `/rating cml` command.

| Name | Rating |
| --- | --- |
| Arguments | [1] `type` - type of rating. |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | No |

| Request | Response |
| --- | --- |
| `/rating` | ![Regular Rating](https://i.imgur.com/EkbBnlo.png) |
| `/rating cml` | ![Cumulative Rating](https://i.imgur.com/4rM623E.png) |

---

### Profile

Prints data of Users, that inclues:
- User's real name
- Link, that leads to User's profile in LeetCode
- Amount of solved problems in different levels of difficulty

| Name | Profile |
| --- | --- |
| Arguments | [1] `username` - username of User in LeetCode. |
| Telegram | Yes |
| Discord | Limited |
| Slack | Limited |
| Admin | No |

| Request | Response |
| --- | --- |
| `/profile` | ![Profile](https://i.imgur.com/ui2FvMu.png) |
| `/profile username` | ![Profile username](https://i.imgur.com/JGdSsNb.png) | 

---

### Add

Takes list of Users separated by whitespaces. Saves usernames into Database. Loads data of these Users from LeetCode and saves it into Cache.

| Name | Add |
| --- | --- |
| Arguments | [1+] `username ...` - usernames of Users in LeetCode |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | No |

| Request | Response |
| --- | --- |
| `/add username1 username2 ...` | ![Add username1 username2](https://i.imgur.com/ahSSzry.png) |

---

### Avatar

Returns avatar of User from LeetCode as image

| Name | Avatar |
| --- | --- |
| Arguments | [1] `username` - username of User in LeetCode |
| Telegram | Yes |
| Discord | Limited |
| Slack | Limited |
| Admin | No |

| Request | Response |
| --- | --- |
| `/avatar` | ![Avatar](https://i.imgur.com/AnMGzQK.png) |
| `/avatar username` | ![Avatar username](https://i.imgur.com/7yeNN0l.png) |

---

### Submissions

Gets submission data of User, converts that data into visualization using [VizAPI](https://github.com/madrigals1/vizapi). Returns visualization as image.

| Name | Submissions |
| --- | --- |
| Arguments | [1] `username` - username of User in LeetCode |
| Telegram | Yes |
| Discord | Limited |
| Slack | Limited |
| Admin | No |

| Request | Response |
| --- | --- |
| `/submissions` | ![Submissions](https://i.imgur.com/f5RlHRM.png) |
| `/submissions username` | ![Submissions username](https://i.imgur.com/PWUYubx.png) |

---

### Compare

Creates small comparison visualization between 2 users using [VizAPI](https://github.com/madrigals1/vizapi). Returns visualization as image.

| Name | Compare |
| --- | --- |
| Arguments | [1] `username1` - username of User in LeetCode |
| | [2] `username2` - username of User in LeetCode |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | No |

| Request | Response |
| --- | --- |
| `/compare` | ![Compare](https://i.imgur.com/vsvynWh.png) |
| `/compare username1` | ![Compare username1](https://i.imgur.com/oZqdnKn.png) |
| `/compare username1 username2` | ![Compare username1 username2](https://i.imgur.com/bUPH7Df.png) |

---

### Refresh

Manual refresh of database. By default, database is refreshed once in 15 minutes.

| Name | Refresh |
| --- | --- |
| Arguments | - |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | No |

| Request | Response |
| --- | --- |
| `/refresh` | ![Refresh](https://i.imgur.com/rn9ppHD.png) |

---

### Remove

Admin action, that removes specified User from Database and Cache

| Name | Remove |
| --- | --- |
| Arguments | [1] `username` - username of User in LeetCode |
| | [2] `master_password` - MASTER_PASSWORD, specified in .env |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | Yes |

| Request | Response |
| --- | --- |
| `/remove password` | ![Remove](https://i.imgur.com/kbuzG4O.png) |
| `/remove madrigals1 password` | ![Remove](https://i.imgur.com/2SvP59r.png) |

---

### Clear

Admin action, that clears Database and Cache from all Users

| Name | Clear |
| --- | --- |
| Arguments | [1] `master_password` - MASTER_PASSWORD, specified in .env |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | Yes |

| Request | Response |
| --- | --- |
| `/clear password` | ![Clear](https://i.imgur.com/5L9PS8X.png) |

---

### Stats

Admin action, that shows some lets us see some part of data, only accessible by admins directly on the server.

| Name | Stats |
| --- | --- |
| Arguments | [1] `master_password` - MASTER_PASSWORD, specified in .env |
| Telegram | Yes |
| Discord | Yes |
| Slack | Yes |
| Admin | Yes |

| Request | Response |
| --- | --- |
| `/stats password` | ![Stats](https://i.imgur.com/lFWBTmE.png) |