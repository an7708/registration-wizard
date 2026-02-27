# The Registration Wizard

A multi-step onboarding form built with modern React best practices.  
This project simulates a real-world registration flow similar to setting up a SaaS account or online banking profile.


Live Server: https://registrationwizard23.vercel.app/

---

## Project Overview

Long forms reduce user engagement. Modern applications improve UX by breaking large forms into smaller, manageable steps.

The Registration Wizard demonstrates:

- Controlled multi-step navigation
- Centralized state management
- Real-time form validation
- Schema-based validation using industry-standard tools
- Clean and responsive UI with Tailwind CSS

---

## Live Features

### Multi-Step Form Structure

**Step 1 – Personal Information**
- First Name
- Last Name
- Date of Birth

**Step 2 – Account Details**
- Email
- Password
- Confirm Password

**Step 3 – Review & Submit**
- Displays all collected information
- Final submission confirmation screen

---

## Technical Implementation

### Level 1 – Core Logic
- Conditional rendering of step components
- Parent-managed state
- Data persistence between steps
- Navigation using Next and Back buttons
- Final submission logs full data object and displays success screen

---

### Level 2 – Validation & UX Enhancements
- Real-time input validation
- Email format validation
- Password minimum length (8 characters)
- Confirm password match validation
- Disabled Next button until current step is valid
- Show/Hide password toggle
- Visual progress bar with dynamic percentage

---

### Level 3 – Industry Standard Implementation

This project implements enterprise-level form handling using:

- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `Tailwind CSS`

#### Why React Hook Form?
- Minimal re-renders
- High performance
- Cleaner validation handling
- Scalable architecture

#### Why Zod?
- Schema-based validation
- Centralized validation logic
- Type-safe constraints
- Clean error messaging

---

## Tech Stack

- React
- Vite
- React Hook Form
- Zod
- Tailwind CSS

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/registration-wizard.git
```

Navigate into the project:

```bash
cd registration-wizard
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Project Structure

```
src/
 ├── components/
 │   ├── Step1.jsx
 │   ├── Step2.jsx
 │   ├── Step3.jsx
 │   ├── ProgressBar.jsx
 │   └── Success.jsx
 ├── Schemas/
 │   └── registerSchema.js
 ├── App.jsx
 └── main.jsx
```

---

## Key Learning Outcomes

- Multi-step form architecture
- State persistence across conditional renders
- Schema-driven validation
- Controlled form UX patterns
- Enterprise-ready form handling

---

## Future Improvements

- API integration for real submission
- Form reset functionality
- Animations between steps
- Accessibility improvements
- Unit testing with React Testing Library

---

## License

This project is for educational and portfolio purposes.
