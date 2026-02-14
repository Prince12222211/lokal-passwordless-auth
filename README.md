# Passwordless Authentication Flow

Lokal Full-Term Internship Assignment  
Built with React Native (Expo) + TypeScript

---

## Overview

This project implements a passwordless authentication flow using Email + OTP, followed by a Session screen that tracks live login duration.

All authentication logic is implemented locally as per assignment requirements.

---

## Tech Stack

- React Native (Expo)
- TypeScript
- Functional Components
- React Hooks (useState, useEffect, useRef)
- React Navigation
- AsyncStorage (SDK logging integration)

---

## Project Structure

```
src/
├── screens/
│   ├── LoginScreen.tsx
│   ├── OtpScreen.tsx
│   ├── SessionScreen.tsx
├── hooks/
│   └── useSessionTimer.ts
├── services/
│   ├── otpManager.ts
│   └── analytics.ts
├── types/
│   └── auth.ts
```

## Features Implemented

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

## Architecture Decisions

- Clear separation of UI and business logic
- OTP logic handled in otpManager.ts
- Analytics handled in analytics.ts
- Session timer isolated in useSessionTimer.ts
- No business logic inside JSX
- Proper dependency management
- Cleanup functions implemented correctly

---

## Edge Cases Handled

- Expired OTP
- Incorrect OTP
- Exceeded OTP attempts
- Resend resets state properly
- Timer cleanup on screen unmount
- Prevents unnecessary re-renders

---

## Setup Instructions

### Prerequisites

Make sure the following are installed:

- Node.js (v18 or above recommended)
- npm
- Expo Go (for Android device) OR Android Emulator

Verify installation:

node -v
npm -v

---

### 1. Clone the Repository

git clone <YOUR_GITHUB_REPOSITORY_LINK>

---

### 2. Navigate to Project Folder

cd lokal-auth

---

### 3. Install Dependencies

npm install

---

### 4. Start Development Server

npx expo start

This will start the Expo development server and display a QR code.

---

### 5. Run the Application

Option A: Physical Android Device (Recommended)

- Install Expo Go from Play Store
- Connect phone and laptop to same WiFi
- Scan QR code
- App will launch automatically

Option B: Android Emulator

- Open Android Studio
- Start an Android Virtual Device
- In terminal press:

a

Option C: Web (Optional)

Press:

w

---

### 6. Clear Cache (If Needed)

If bundling issues occur:

npx expo start -c

---

### 7. Clean Build Verification (Optional)

Delete node_modules:

rm -rf node_modules

Reinstall dependencies:

npm install

Start again:

npx expo start

If the app runs without errors, setup is successful.

---

## Key React Concepts Demonstrated

- useState for UI state management
- useEffect for side effects and cleanup
- useRef for persistent values across re-renders
- Custom hooks
- Controlled components
- Navigation state management
- Async handling

---

## Notes

- No backend used (as per requirement)
- All OTP logic implemented locally
- Designed for clean architecture and maintainability
- App builds and runs without extra configuration

---

## Author

Prince Kumar Verma  
9334549702
princeverma9504@gmail.com
B.Tech CSE (2026 Batch)
