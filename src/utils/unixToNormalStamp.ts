export function unixToNormalStamp(unix: number): string {
  const uptimeSeconds = unix;
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = (uptimeSeconds % 60).toFixed(2);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default unixToNormalStamp;
