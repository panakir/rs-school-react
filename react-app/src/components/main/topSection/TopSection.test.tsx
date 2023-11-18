import { describe, it, expect, vi, Mock } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { TopSection } from './TopSection';
import { MainSectionContext } from '../../context/context';

const renderTopSectionWithContext = (): Mock => {
  const mockedHandleSearch = vi.fn();

  render(
    <MainSectionContext.Provider
      value={{
        resultsOnPage: 10,
        currentPage: 1,
        setCurrentPage: (): void => {},
        countAllResults: 0,
        setCountAllResults: (): void => {},
        resultOfSearch: [],
        setResultOfSearch: () => [],
        handleSearch: mockedHandleSearch,
      }}
    >
      <TopSection />
    </MainSectionContext.Provider>
  );

  return mockedHandleSearch;
};

describe('TopSection', (): void => {
  const INPUT_PLACEHOLDER = 'Enter the name of ship';
  const USER_QUESTION = 'corvette';

  it('user writes text in search input', async () => {
    renderTopSectionWithContext();

    const input: HTMLInputElement =
      screen.getByPlaceholderText(INPUT_PLACEHOLDER);

    await userEvent.type(input, USER_QUESTION);

    expect(input.value).toBe(USER_QUESTION);
  });

  it('user clicks on search button', async (): Promise<void> => {
    const mockedHandleSearch = renderTopSectionWithContext();

    await userEvent.click(screen.getByText('search'));

    expect(mockedHandleSearch.mock.calls[0][0]).toBe('');
  });

  it(`user asks "${USER_QUESTION}"`, async (): Promise<void> => {
    const mockedHandleSearch = renderTopSectionWithContext();

    await userEvent.type(
      screen.getByPlaceholderText(INPUT_PLACEHOLDER),
      USER_QUESTION
    );

    await userEvent.click(screen.getByText('search'));

    expect(mockedHandleSearch.mock.calls[0][0]).toBe(USER_QUESTION);
  });
});
