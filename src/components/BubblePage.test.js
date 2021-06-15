import React from 'react';
import {render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import {fetchColorService as mockColor} from "../services/fetchColorService";

jest.mock("../services/fetchColorService")

const data = {
    data: [{
        color: "aliceblue",
        code: {hex: "#f0f8ff",},
        id: 1,
    },
        {
            color: "limegreen",
            code: {hex: "#99ddbc",},
            id: 2,
        },
        {
            color: "aqua",
            code: {hex: "#00ffff",},
            id: 3,
        },
    ]
}

test("Renders without errors", () => {
    mockColor.mockResolvedValueOnce({data: []})
    render(<BubblePage/>)
    screen.debug()
});

test("Renders appropriate number of colors passed in through mock", async () => {
    //Keep in mind that our service is called on mount for this component.
    mockColor.mockResolvedValueOnce(data);
    render(<BubblePage/>);
    await waitFor(() => {
    });
    const colors = screen.getAllByTestId(/color/i);
    expect(colors).toHaveLength(3);

    screen.debug();
});