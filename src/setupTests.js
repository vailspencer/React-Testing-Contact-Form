// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import App from './App';
import ContactForm from './components/ContactForm';
import {render} from '@testing-library/react';

test('App render First Name, Last name, Email, and Message', () => {
    const render = rtl.render (<ContactForm />);
    const FirstName = render.queryByText('First Name*')
    const LastName = render.queryByText('Last Name*')
    const Email = render.queryByText('Email*')
    const Message = render.queryByText('Message');

    expect(FirstName).toBeInTheDocument();
    expect(LastName).toBeInTheDocument();
    expect(Email).toBeInTheDocument();
    expect(Message).toBeInTheDocument();
});