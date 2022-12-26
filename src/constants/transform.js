export const filterTableData = data => {
  return (
    data &&
    data.length > 0 &&
    data.map((item, index) => {
      return {
        key: index,
        episodeId: item.episode_id,
        title: item.title,
        director: item.director,
        producer: item.producer,
        releaseDate: item.release_date,
        movieDescription: item.opening_crawl,
        year: parseInt(item.release_date?.split('-')[0]),
      };
    })
  );
};
