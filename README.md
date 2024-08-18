# Fintech Loan Application - React Native

## Project Overview

This project is a React Native mobile application for a fintech company, allowing users to view loan products and apply for loans.

## Setup Instructions

1. Clone the repository:

` git clone [https://github.com/jmwakz99/loan-application-app] cd [loan-application-app
]`

2. Install dependencies:

   `npm install`

3. Start the local server:

- Navigate to the `server` directory
- Follow the instructions in the server's README.md file

4. Start the React Native app:
   `npm start`

5. Run unit test:
   `npm run test`

6. Use an emulator or scan the QR code with Expo Go to run the app on your device.

## Project Structure

- `__tests__/`: All Unit tests
- `app/`: Main application screens
- `assets/`: Images and icons
- `components/`: Reusable React components
- `constants/`: For code clarity and consistency
- `context/`: Context providers to manage global state
- `hooks/`: Custom React hooks
- `lib/`: Libraries and dependencies
- `reducers/`: To manage context state
- `server/`: Server setup and configuration
- `services/`: Services for API calls
- `styles/`: Handle all application styles
- `types/`: TypeScript type definitions
- `utils/`: Utility functions and helpers

## Key Features

- Fetches and displays loan products using GraphQL
- Implements a loan application form with REST API submission
- Responsive design following the provided Figma mockup
- Type-safe code using TypeScript
- Error handling and loading states

## Approach and Rationale

1. **React Native with Expo**: Chosen for rapid development and easy testing across platforms.

2. **TypeScript**: Implemented for improved code quality and maintainability.

3. **GraphQL for Data Fetching**: Used for efficient, type-safe data retrieval of loan products.

4. **GraphQL Codegen**: Facilitates code generation from GraphQL schema.

5. **REST API for Form Submission**: Implemented for compatibility with existing backend systems.

6. **Modular Component Structure**: Enhances reusability and maintainability.

7. **React Native's StyleSheet **: Used for styling, ensuring consistency and ease of maintenance.

8. **React Navigation**: Implemented for smooth navigation between screens.

9. **Form Validation**: Ensures data integrity before submission.

10. **Error Handling**: Improves user experience by gracefully handling potential issues.

11. **Loading States**: Provides visual feedback during asynchronous operations.
12. **Eslint and Prettier**: Ensures consistent code style and readability
13. **Husky precommit hooks**: Enforces code quality and consistency
14. **Documentation**: Added comments and documentation to enhance code readability and collaboration.

## Future Improvements

- Styling DRY principles
- Enhance accessibility features
- Implement more advanced state management (e.g., Redux) for scalability
- Implement Storybook for component documentation, testing and team collaboration
- Refactor the codebase to follow best practices and improve code quality
