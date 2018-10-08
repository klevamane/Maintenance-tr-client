const StatusSelector = (status) => {
  let statusIndicator;
  switch (status) {
    case 'Rejected':
      statusIndicator = 'status-pill-rejected';
      break;
    case 'Pending':
      statusIndicator = 'status-pill-pending';
      break;
    case 'Accepted':
      statusIndicator = 'status-pill-accepted';
      break;
    default:
      statusIndicator = 'status-pill-inactive';
  }
  return statusIndicator;
};

export default StatusSelector;
