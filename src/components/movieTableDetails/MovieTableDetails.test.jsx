import { render, screen } from '@testing-library/react';
import MovieTableDetails from './MovieTableDetails';

test('Render Table Component', () => {
  const tableData = [
    {
      director: 'George Lucas',
      episodeId: 4,
      key: 0,
      movieDescription: 'It is a period of civil war.',
      producer: 'Gary Kurtz, Rick McCallum',
      releaseDate: '1977-05-25',
      title: 'A New Hope',
      year: 1977,
    },
    {
      director: 'George Lucas',
      episodeId: 7,
      key: 1,
      movieDescription: 'It is a period of civil war.',
      producer: 'Gary Kurtz, Rick McCallum',
      releaseDate: '1990-05-25',
      title: 'A New Hope part 2',
      year: 1990,
    },
  ];
  render(<MovieTableDetails data={tableData} />);
  const tableCol = screen.getByText('Episode No');
  expect(tableCol).toBeInTheDocument();
});
