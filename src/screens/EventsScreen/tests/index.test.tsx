import React from 'react';
import { renderWithQuery, cleanup, screen } from '../../../utils/test-utlis';
import EventsScreen from '../index';
import { eventsData } from '../../../__mocks__/mockedData';
import { fireEvent } from '@testing-library/react';
import mockedAxios from '../../../__mocks__/axios';


describe('<EventsScreen />', () => {
  beforeEach(cleanup);
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('should show loading then container', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: eventsData })
    );
    const { getByTestId } = renderWithQuery(<EventsScreen />);

    expect(getByTestId('isLoading')).toBeInTheDocument();
    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
  });

  it('should render events', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: eventsData })
    );
    renderWithQuery(<EventsScreen />);

    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
    const block = await screen.findAllByTestId('event');
    expect(block).toHaveLength(10);
  });

  it('should render loadMore', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: eventsData })
    );
    renderWithQuery(<EventsScreen />);

    const loadMoreButton = await screen.findByText(/Load More/i);
    expect(loadMoreButton).toBeInTheDocument();

    fireEvent.click(loadMoreButton);

    expect(mockedAxios.get).toBeCalled();
  });

  it('Should renderWithQuery and match the snapshot', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: eventsData,
      })
    );
    const {
      container: { firstChild },
    } = renderWithQuery(<EventsScreen />);

    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
    expect(firstChild).toMatchSnapshot();
  });
});
