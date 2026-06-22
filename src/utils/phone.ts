// Phone verification utilities
export async function sendVerificationSms(phone: string): Promise<boolean> {
  try {
    const response = await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    return data.success;
  } catch {
    return false;
  }
}

export async function validateOtp(phone: string, otp: string): Promise<boolean> {
  try {
    const response = await fetch("/api/validate-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    return data.valid;
  } catch {
    return false;
  }
}
