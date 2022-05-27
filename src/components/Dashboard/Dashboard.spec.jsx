import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { Dashboard } from "./Dashboard";

import { Users } from "../../mock/users";
import { UsersTests } from "../../mock/userTests";


describe('Dashboard component', () => {
  it('should render a to-do list with items', async () => {
    const { getByText, queryByText, rerender, unmount } = render(<Dashboard initialTasks={Users} />)

    expect(getByText('Estudar React')).toBeInTheDocument()
    expect(getByText('Estudar Next.js')).toBeInTheDocument()

    unmount()
    rerender(<Dashboard initialTasks={UsersTests} />)

    expect(getByText('Estudar Blockchain')).toBeInTheDocument()
    expect(queryByText('Estudar Soliditys')).not.toBeInTheDocument()
  })

  it('should be able to add new item to the list', async () => {
    const { container, getByText, getByPlaceholderText, findByText } = render(<Dashboard initialTasks={[]} />)

    const inputElement = getByPlaceholderText('Adicionar nova terefa')
    const addButton = getByText('Adicionar')

    await userEvent.type(inputElement, 'Novo');
    await userEvent.click(addButton);

    expect(await findByText('Novo')).toBeInTheDocument();
  })
})
