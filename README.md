# Codeforces Contest Tracker

A modern React application that helps you track and filter Codeforces programming contests. Built with React, TypeScript, and Shopify Polaris components.

## Features

- View all Codeforces contests in a clean, modern interface
- Filter contests by:
  - Name (search functionality)
  - Contest type (CF, IOI, ICPC)
  - Items per page
- Real-time contest information including:
  - Contest name
  - Type
  - Phase (BEFORE, CODING, FINISHED, etc.)
  - Start time
  - Duration
- Dark theme UI
- Pagination On Table

## Tech Stack

- React 19
- TypeScript
- Shopify Polaris (UI Components)
- Styled Components
- Lodash

## Getting Started

### Prerequisites

- Node.js
- Yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/manav-gopal/codeforces-contests.git
cd codeforces-contests
```

2. Install dependencies

```bash
yarn install
```

3. Start the development server

```bash
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `yarn start` - Runs the app in development mode
- `yarn test` - Launches the test runner
- `yarn build` - Builds the app for production
- `yarn eject` - Ejects from Create React App

## API

The application uses the Codeforces API to fetch contest data:

- Endpoint: `https://codeforces.com/api/contest.list`
- No API key required for public data

## License

This project is open source and available under the [MIT License](LICENSE).
