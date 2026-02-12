export type OTPData = {
  otp: string;
  expiry: number;
  attempts: number;
};

export type OTPValidationResult =
  | { success: true }
  | { success: false; reason: string };
