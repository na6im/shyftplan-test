import React from 'react';
import axios from 'axios';
import { renderWithQuery, cleanup, screen } from '../../../utils/test-utlis';
import DetailsView from '../index';
import { EventDetails } from '../../../__mocks__/mockedData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(cleanup);
describe('<DetailsView />', () => {
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('should show loading then container', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: EventDetails })
    );
    const { getByTestId } = renderWithQuery(
      <DetailsView
        match={{
          params: { id: '126' },
        }}
      />
    );

    expect(getByTestId('isLoading')).toBeInTheDocument();
    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
  });

  it('should render employees elements', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: EventDetails })
    );
    renderWithQuery(
      <DetailsView
        match={{
          params: { id: '126' },
        }}
      />
    );

    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
    expect(await screen.findByText(/Employees/i)).toBeInTheDocument();
    const block = await screen.findAllByTestId(/employee/i);
    expect(block).toHaveLength(1);
  });

  it('Should renderWithQuery and match the snapshot', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: EventDetails,
      })
    );
    const {
      container: { firstChild },
    } = renderWithQuery(
      <DetailsView
        match={{
          params: { id: '126' },
        }}
      />
    );

    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
    expect(firstChild).toMatchSnapshot();
  });

  it('Should renderWithQuery and match the snapshot', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: EventDetails,
      })
    );
    const {
      container: { firstChild },
    } = renderWithQuery(
      <DetailsView
        match={{
          params: { id: '126' },
        }}
      />
    );

    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
    expect(firstChild).toMatchSnapshot();
  });
});
