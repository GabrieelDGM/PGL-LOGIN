export function isValidEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()); }
export function isStrongPassword(pswd: string) { return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pswd); }
export function notEmpty(text: string) { return text.trim().length > 0; }
