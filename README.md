# 📱 Passwordless Authentication Flow

### Lokal Full-Term Internship Assignment

Built with React Native (Expo) + TypeScript

---

## 🚀 Overview

This project implements a passwordless authentication flow using Email + OTP, followed by a Session screen that tracks live login duration.

All logic is implemented locally as per assignment requirements.

---

## 🛠 Tech Stack

- React Native (Expo)
- TypeScript
- Functional Components
- React Hooks (useState, useEffect, useRef)
- React Navigation
- AsyncStorage (SDK logging integration)

---

## 📂 Project Structure

src/
├── screens/
│ ├── LoginScreen.tsx
│ ├── OtpScreen.tsx
│ ├── SessionScreen.tsx
├── hooks/
│ └── useSessionTimer.ts
├── services/
│ ├── otpManager.ts
│ └── analytics.ts
├── types/
│ └── auth.ts

---

## 🔐 Features Implemented

### Email + OTP Authentication

- 6-digit OTP generated locally
- OTP stored per email (not global)
- OTP expiry: 60 seconds
- Maximum attempts: 3
- Resend OTP:
  - Invalidates previous OTP
  - Resets attempt count
  - Resets expiry timer

### OTP Validation Rules

- Expired OTP handling
- Incorrect OTP handling
- Maximum attempts exceeded handling
- Proper error messages displayed

### Session Screen

- Live session duration (mm:ss)
- Timer does NOT reset on re-render
- Proper cleanup on unmount
- Logout functionality

### SDK Integration

The following events are logged using AsyncStorage:

- OTP_GENERATED
- OTP_SUCCESS
- OTP_FAILURE
- LOGOUT

---

## 🧠 Architecture Decisions

- Clear separation of UI and business logic
- OTP logic handled in otpManager.ts
- Analytics handled in analytics.ts
- Session timer isolated in useSessionTimer.ts
- No business logic inside JSX
- Proper dependency management
- Cleanup functions implemented correctly

---

## 🧪 Edge Cases Handled

- Expired OTP
- Incorrect OTP
- Exceeded OTP attempts
- Resend resets state properly
- Timer cleanup on screen unmount
- Prevents unnecessary re-renders

---

## 🛠 Setup Instructions

1. Clone the repository

git clone <YOUR_GITHUB_REPOSITORY_LINK>

2. Navigate to project folder

cd lokal-auth

3. Install dependencies

npm install

4. Start development server

npx expo start

5. Run the App

- Open Expo Go on Android device
- Scan the QR code
- OR press "a" to run on Android Emulator

---

## 🎯 Key React Concepts Demonstrated

- useState for UI state
- useEffect for side effects and cleanup
- useRef for persistent values across re-renders
- Custom hooks
- Controlled components
- Navigation state management
- Async handling

---

## 📌 Notes

- No backend used (as per requirement)
- All OTP logic implemented locally
- Designed for clean architecture and maintainability
- App builds and runs without extra configuration

---

## 👨‍💻 Author

Prince Verma  
B.Tech CSE (2026 Batch)
