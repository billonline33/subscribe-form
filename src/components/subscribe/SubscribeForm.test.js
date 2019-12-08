import React from 'react';
import Subscribe from './SubscribeForm';

import Enzyme, { shallow } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Controlled form testing', () => {
  let wrapper;
  let mockSubmit;
  let mockHistory;

  beforeEach(() => {
    mockSubmit = jest.fn();
    mockHistory = { push: jest.fn() };
    wrapper = shallow(<Subscribe submit={mockSubmit} history={mockHistory} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('render form element', () => {
    it('should have one form element', () => {
      const appComponent = wrapper.find('form');
      console.log(wrapper.debug());
      expect(appComponent.length).toBe(1);
    });

    it('should have input for one first name, one last name, one email and one mobile', () => {
      expect(wrapper.find('input[name="firstName"]').length).toBe(1);
      expect(wrapper.find('input[name="lastName"]').length).toBe(1);
      expect(wrapper.find('input[name="email"]').length).toBe(1);
      expect(wrapper.find('input[name="mobilePhone"]').length).toBe(1);
    });

    it('should have one input for submit button', () => {
      expect(wrapper.find('input[type="submit"]').length).toBe(1);
    });
  });

  describe('handle changes', () => {
    it('should call setState on first name', () => {
      const mockEvent = {
        target: {
          name: 'firstName',
          value: 'Bill'
        }
      };

      const expected = {
        firstName: 'Bill',
        lastName: '',
        email: '',
        mobilePhone: '',
        submitActive: false
      };

      wrapper.instance().handleInputChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });

    it('should call setState on last name', () => {
      const mockEvent = {
        target: {
          name: 'lastName',
          value: 'Huang'
        }
      };

      const expected = {
        firstName: '',
        lastName: 'Huang',
        email: '',
        mobilePhone: '',
        submitActive: false
      };

      wrapper.instance().handleInputChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });

    it('should call setState on email', () => {
      const mockEvent = {
        target: {
          name: 'email',
          value: 'bill@hot.com'
        }
      };

      const expected = {
        firstName: '',
        lastName: '',
        email: 'bill@hot.com',
        mobilePhone: '',
        submitActive: false
      };

      wrapper.instance().handleInputChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });

    it('should call setState on mobile phone', () => {
      const mockEvent = {
        target: {
          name: 'mobilePhone',
          value: '04040404'
        }
      };

      const expected = {
        firstName: '',
        lastName: '',
        email: '',
        mobilePhone: '04040404',
        submitActive: false
      };

      wrapper.instance().handleInputChange(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe('handle form submit', () => {
    it('should call preventDefault', () => {
      const mockPreventDefault = jest.fn();

      const mockEvent = {
        preventDefault: mockPreventDefault
      };
      wrapper.instance().handleSubmit(mockEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });
  });
});
