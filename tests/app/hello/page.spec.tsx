import Hello from '@/app/pages/hello/page';
import { render, screen } from '@tests/utils';

describe('Hello page', () => {
  test('should render correctly', () => {
    render(<Hello />);

    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
