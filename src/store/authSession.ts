const AUTH_KEY = 'ventilation-platform-auth';

export function isAuthed(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return sessionStorage.getItem(AUTH_KEY) === '1';
}

export function setAuthed(value: boolean): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (value) {
    sessionStorage.setItem(AUTH_KEY, '1');
  } else {
    sessionStorage.removeItem(AUTH_KEY);
  }
}
