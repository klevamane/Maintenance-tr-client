import React from 'react';
import { shallow } from 'enzyme';
import StatusSelector from '../../helpers/statusSelector';


describe('Helper: StatusSelector', () => {
  describe('should test for conditions in the status selector', () => {
    it('should indicate when the status is dissaproved', () => {
      const statusIndicator = StatusSelector('Disapproved');
      expect(statusIndicator).toBe('status-pill-rejected');
    });

    it('should indicate when the status is inactive', () => {
      const statusIndicator2 = StatusSelector('inactive');
      expect(statusIndicator2).toBe('status-pill-inactive');
    });

    it('should indicate when the status is pending', () => {
      const statusIndicator3 = StatusSelector('Pending');
      expect(statusIndicator3).toBe('status-pill-pending');
    });

    it('should indicate when the status is resolved', () => {
      const statusIndicator4 = StatusSelector('Resolved');
      expect(statusIndicator4).toBe('status-pill-accepted');
    });
  });
});
