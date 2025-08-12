# React SSO App with Google Cloud Hosting

This is a React application with Google SSO authentication, built with Vite and TypeScript, designed to be hosted on Google Cloud Platform.

## Prerequisites

1. Node.js 18 or later
2. Google Cloud SDK
3. A Google Cloud Project with OAuth 2.0 configured

## Features

- Google SSO Authentication
- Protected Routes
- Material-UI Components
- TypeScript Support
- Vite for fast development and building

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a Google OAuth 2.0 Client ID:
   - Go to the [Google Cloud Console](https://console.cloud.google.com)
   - Navigate to APIs & Services > Credentials
   - Create an OAuth 2.0 Client ID
   - Add your development and production URLs to the authorized origins
   - Copy the Client ID

3. Create a `.env` file in the root directory and add your Google OAuth Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

## Development

Run the development server:

```bash
npm run dev
```

## Building for Production

Build the project:

```bash
npm run build
```

## Deploying to Google Cloud

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)

2. Initialize your Google Cloud project:
   ```bash
   gcloud init
   ```

3. Deploy to Google App Engine:
   ```bash
   gcloud app deploy
   ```

## Additional Configuration

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
