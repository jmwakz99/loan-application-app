# Fintech Loan Application - React Native

## Project Overview

This project is a React Native mobile application for a fintech company, allowing users to view loan products and apply for loans. It demonstrates skills in frontend and mobile development, code structuring, TypeScript usage, component reusability, and adherence to design principles.

## Setup Instructions

1. Clone the repository:

` git clone [your-repo-url] cd [your-repo-name]`

2. Install dependencies:
   npm install

3. Start the local server:

- Navigate to the `server` directory
- Follow the instructions in the server's README.md file

4. Start the React Native app:
   npm start

5. Use an emulator or scan the QR code with Expo Go to run the app on your device.

## Project Structure

- `components/`: Reusable React components
- `app/`: Main application screens
- `services/`: API and GraphQL services
- `styles/`: Global styles and theme
- `types/`: TypeScript type definitions

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

4. **REST API for Form Submission**: Implemented for compatibility with existing backend systems.

5. **Modular Component Structure**: Enhances reusability and maintainability.

6. **Styled Components**: Used for component-scoped styling and theme consistency.

7. **React Navigation**: Implemented for smooth navigation between screens.

8. **Form Validation**: Ensures data integrity before submission.

9. **Error Handling**: Improves user experience by gracefully handling potential issues.

10. **Loading States**: Provides visual feedback during asynchronous operations.

## Future Improvements

- Implement unit and integration tests
- Add offline support for form submissions
- Enhance accessibility features
- Implement more advanced state management (e.g., Redux) for scalability
