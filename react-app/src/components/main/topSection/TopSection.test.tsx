import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { TopSection } from './TopSection';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('TopSection', (): void => {
  const INPUT_PLACEHOLDER = 'Enter the name of ship';
  const USER_QUESTION = 'corvette';

  it('user writes text in search input', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TopSection />
        </Provider>
      </BrowserRouter>
    );

    const input: HTMLInputElement =
      screen.getByPlaceholderText(INPUT_PLACEHOLDER);

    await userEvent.type(input, USER_QUESTION);

    expect(input.value).toBe(USER_QUESTION);
  });

  it('Verify that clicking the Search button saves the entered value to the local storage', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TopSection />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: USER_QUESTION } });

    const localStorageValue = localStorage.getItem('searchRequest');
    expect(localStorageValue).toBe(USER_QUESTION);
  });
});
