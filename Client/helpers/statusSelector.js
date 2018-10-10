const StatusSelector = (status) => {
  let statusIndicator;
  switch (status) {
    case 'Disapproved':
      statusIndicator = 'status-pill-rejected';
      break;
    case 'Pending':
      statusIndicator = 'status-pill-pending';
      break;
    case 'Resolved':
      statusIndicator = 'status-pill-accepted';
      break;
    default:
      statusIndicator = 'status-pill-inactive';
  }
  return statusIndicator;
};

export default StatusSelector;
