import 'react-native';
import React from 'react';

import {render, fireEvent} from 'react-native-testing-library';
import '@testing-library/jest-dom/extend-expect';

import {ScreenThree} from '../src';

test('renders Validation Check',  () => {
        const { getByTestId, toJSON } = render(<ScreenThree />);

        const email = getByTestId('email');
        const password = getByTestId('password');

        fireEvent.changeText(email, "");
        fireEvent.changeText(password, "");

        const input = getByTestId('Pressable');

        fireEvent.press(input);
        expect(toJSON()).toMatchSnapshot(); 
});


test('renders Validation Check',  () => {
        const { getByTestId, toJSON } = render(<ScreenThree />);

        const email = getByTestId('email');
        const password = getByTestId('password');

        fireEvent.changeText(email, "email123@gmail.com");
        fireEvent.changeText(password, "Email@123");

        const input = getByTestId('Pressable');

        fireEvent.press(input);
        expect(toJSON()).toMatchSnapshot(); 
});

test('renders Validation Check',  () => {
        const { getByTestId, toJSON } = render(<ScreenThree />);

        const email = getByTestId('email');
        const password = getByTestId('password');

        fireEvent.changeText(email, "email@123gmail.com");
        fireEvent.changeText(password, "email@123");

        const input = getByTestId('Pressable');

        fireEvent.press(input);
        expect(toJSON()).toMatchSnapshot(); 
});

test('renders Validation Check',  () => {
        const { getByTestId, toJSON } = render(<ScreenThree />);

        const email = getByTestId('email');
        const password = getByTestId('password');

        fireEvent.changeText(email, "email12gmail.com");
        fireEvent.changeText(password, "Email@12");

        const input = getByTestId('Pressable');

        fireEvent.press(input);
        expect(toJSON()).toMatchSnapshot(); 
});


