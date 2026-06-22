// Email validation utility
export async function emailValidation(email: string): Promise<boolean> {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  try {
    // In production, call your email validation API here
    // For now, basic client-side validation
    const response = await fetch(`/api/validate-email?email=${encodeURIComponent(email)}`);
    if (!response.ok) {
      // Fallback to basic regex validation if API is unavailable
      return emailRegex.test(email);
    }
    const data = await response.json();
    return data.valid;
  } catch {
    // Fallback to regex
    return emailRegex.test(email);
  }
}
