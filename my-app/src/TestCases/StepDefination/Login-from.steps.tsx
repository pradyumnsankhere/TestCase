import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, fireEvent, screen } from '@testing-library/react';
import   {LoginForm} from '../LoginFrom';

const feature = loadFeature('./src/Features/Login.feature')
defineFeature(feature, (test) => {
  test('Rendering login form elements', ({ given, when, then }) => {
    let loginForm;

    given('the user is on the login page', () => {
      loginForm = render(<LoginForm />);
    });

    then('they should see the username and password fields', () => {
      const usernameInput = screen.getByLabelText('Username');
      const passwordInput = screen.getByLabelText('Password');
      const loginButton = screen.getByTestId('login-button');

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
  });

  test('Updating state on input change', ({ given, when, then }) => {
    let loginForm;

    given('the user is on the login page', () => {
      loginForm = render(<LoginForm />);
    });
    
    when('they enter their username as "testuser"', () => {
      const usernameInput = screen.getByTestId('username-input');
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    });


    then('the username input value should be "testuser"', () => {
      const usernameInput = screen.getByTestId('username-input');
      expect(usernameInput).toHaveValue('testuser');
    });

  });

  test('Handling login correctly', ({ given, when, then }) => {
    let loginForm;

    given('the user is on the login page', () => {
      loginForm = render(<LoginForm />);
    });


    when('they enter their username as "testuser" and password as "testpassword"', () => {
      const usernameInput = screen.getByTestId('username-input');
      const passwordInput = screen.getByTestId('password-input');

      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    });

    when('they click the login button', () => {
      const loginButton = screen.getByTestId('login-button');
      fireEvent.click(loginButton);
    });

    then('they should see a login success message', () => {
      const loginSuccessMessage = screen.getByTestId('login-success');
      expect(loginSuccessMessage).toHaveTextContent('Login Success');
    });
  });
  

 
     


 
  
 
  
   
 
 
});

 