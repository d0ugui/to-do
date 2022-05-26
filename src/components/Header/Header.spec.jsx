import { render } from "@testing-library/react";

import { Header } from './Header';

describe('Header component', () => {
  it('should be have a title', () => {
    const { getByText } = render(<Header />)

    expect(getByText('to.')).toBeInTheDocument();
    expect(getByText('do')).toBeInTheDocument();
  })
})