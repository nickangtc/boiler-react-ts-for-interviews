# Boiler React TypeScript for interviews

Some live coding interviews will have you build something realistic. I setup this repo to aid me in one such interview. For example, in their "interview prep doc," it said:

> Prepare your environment: come with a skeleton app ready to consume an API and write tests. This is particularly important for languages with lots of boilerplate.

The purpose of this public repo is for reuse for future interviews.

## Features

- Created with create react app (CRA) with TypeScript enabled
- Uses **axios** library to handle HTTP requests/responses
- Uses **mock service worker (msw)** library for mocking network calls, mainly for testing
- Has tests that mock API requests using msw
- Changed CSS file extensions from .css to .module.css to use **CSS Modules** (out of box support from CRA)

## Interview-specific coding

Note to self: Coding during an interview requires a different workflow than day-to-day coding at a job.

Remember to keep things simple when coding in an interview. This means:

- Not writing TypeScript types on everything, but mentioning you will "normally" type things properly before committing to production
- ... more
