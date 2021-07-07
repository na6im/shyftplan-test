import {eventsData} from "./__mocks__/mockedData";
import {renderWithQuery, screen} from "./utils/test-utlis";
import App from "./screens/EventsScreen";
import React from "react";
import mockedAxios from './__mocks__/axios';

it('Should renderWithQuery and match the snapshot', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: eventsData,
        })
    );
    const {
        container: { firstChild },
    } = renderWithQuery(<App />);

    expect(await screen.findByTestId(/container/i)).toBeInTheDocument();
    expect(firstChild).toMatchSnapshot();
});
