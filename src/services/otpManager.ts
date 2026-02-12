import { OTPData, OTPValidationResult } from "../types/auth";

const otpStore: Record<string, OTPData> = {};

export const generateOtp = (email: string): string => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[email] = {
    otp,
    expiry: Date.now() + 60 * 1000,
    attempts: 0,
  };

  return otp;
};

export const validateOtp = (
  email: string,
  enteredOtp: string
): OTPValidationResult => {
  const data = otpStore[email];

  if (!data) {
    return { success: false, reason: "No OTP found." };
  }

  if (Date.now() > data.expiry) {
    return { success: false, reason: "OTP expired." };
  }

  if (data.attempts >= 3) {
    return { success: false, reason: "Max attempts exceeded." };
  }

  if (data.otp !== enteredOtp) {
    data.attempts += 1;
    return { success: false, reason: "Incorrect OTP." };
  }

  return { success: true };
};
