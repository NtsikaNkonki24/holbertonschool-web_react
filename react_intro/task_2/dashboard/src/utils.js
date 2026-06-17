export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}