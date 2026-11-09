# Citizens for Mount Vernon Schools website

A simple static website built with [Jekyll](https://jekyllrb.com) and published free with GitHub Pages.

- **Volunteers** edit content through [Pages CMS](https://app.pagescms.org). See [EDITING-GUIDE.md](EDITING-GUIDE.md).
- **Changes** go live automatically a minute or two after they're saved.

## Where things live

| What | File |
| --- | --- |
| Home page text | `index.md` |
| The Levy, Get Involved, Donate, Contact | `the-levy.md`, `get-involved.md`, `donate.md`, `contact.md` |
| Q&A questions | `questions.md` (front matter list) |
| Events (one file per event) | `_events/` |
| Group name, election date, email, links, logo, "Paid for by" line | `_data/settings.yml` |
| Menu | `_data/navigation.yml` |
| Colors and styles | `assets/css/style.css` (colors at the top) |
| Page templates | `_layouts/` |
| Editor forms | `.pages.yml` |

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

## Custom domain

1. Buy the domain in an account the group owns.
2. In the repo go to **Settings → Pages → Custom domain**, enter it, and add the DNS records GitHub shows.
3. Set `baseurl: ""` in `_config.yml`.
4. Tick **Enforce HTTPS** once it's available.
