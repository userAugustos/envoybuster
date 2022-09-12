import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

import { Input } from '.';

const fakeCall = jest.fn();

const mockedInputOptions = {
  value: "something",
  type: "text",
  name: "fakeInput",
  onchange: fakeCall,
  required: false,
  label: "Este é um teste de input"
}

describe("Input and Label test", () => {
  test("must render the input", async () => {
    render(
      <Input
        value={mockedInputOptions.value}
        type={mockedInputOptions.type}
        name={mockedInputOptions.name}
        onChange={mockedInputOptions.onchange}
        required={mockedInputOptions.required}
        label={mockedInputOptions.label}
    />
    );

    const input = screen.getByDisplayValue(mockedInputOptions.value);
    expect(input).toHaveValue(mockedInputOptions.value); //input should have the value passed

    userEvent.type(input, "felipe");

    expect(mockedInputOptions.onchange).toBeCalled(); //confirming that the onchange was called when we typed

    expect(screen.getByText(mockedInputOptions.label)).toBeInTheDocument(); //label

  });
})