export const dropdownOptions = [
  { key: 'episode', text: 'Episode' },
  { key: 'year', text: 'Year' },
];

export const columnList = [
  {
    key: 'episodeNo',
    name: 'Episode No',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    fieldName: 'episodeId',
    onRender: item => {
      return <span>Episode {item.episodeId}</span>;
    },
  },
  {
    key: 'episodeName',
    name: 'Episode Name',
    minWidth: 250,
    maxWidth: 350,
    isResizable: true,
    fieldName: 'title',
    onRender: item => {
      return (
        <span style={{ fontWeight: 'bold' }}>
          Episode {item.episodeId} - {item.title}
        </span>
      );
    },
  },
  {
    key: 'episodeDate',
    name: 'Episode Date',
    minWidth: 70,
    maxWidth: 90,
    isResizable: true,
    fieldName: 'releaseDate',
  },
];

export const filterColumns = ['episodeId', 'title', 'releaseDate'];
