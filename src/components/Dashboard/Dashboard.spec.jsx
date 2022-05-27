import { render, fireEvent } from "@testing-library/react";

import { Dashboard } from "./Dashboard";

import { Users } from "../../mock/users";
import { UsersTests } from "../../mock/userTests";


describe('Dashboard component', () => {
  const onSubmit = jest.fn((e) => e.preventDefault());

  it('should render a to-do list with items', () => {
    const { getByText, queryByText, rerender, unmount } = render(<Dashboard initialTasks={Users} />)

    expect(getByText('Estudar React')).toBeInTheDocument()
    expect(getByText('Estudar Next.js')).toBeInTheDocument()

    unmount()
    rerender(<Dashboard initialTasks={UsersTests} />)

    expect(getByText('Estudar Blockchain')).toBeInTheDocument()
    expect(queryByText('Estudar Soliditys')).not.toBeInTheDocument()
  })

  it('should invoke onSubmit when form is submitted', () => {
    const { getByTestId, getByPlaceholderText } = render(<Dashboard onSubmit={onSubmit} />)

    const inputElement = getByPlaceholderText ('Adicionar nova terefa')
    const addButton = getByTestId('addTask')

    fireEvent.change(inputElement, { target: { value: 'testando' } })
    fireEvent.click(addButton)

    expect(onSubmit).toHaveBeenCalled() 
  })
})
