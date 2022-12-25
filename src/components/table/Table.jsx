import React, { useState } from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode, Selection } from '@fluentui/react';
import { columnList } from '../../constants/constants';

export default function Table({ data }) {
  const transformTableData = () => {
    return (
      data &&
      data.map(item => {
        return {
          episodeId: item.episode_id,
          releaseDate: item.release_date,
          title: item.title,
          episodeDescription: item.opening_crawl,
          director: item.director,
          producer: item.producer,
        };
      })
    );
  };

  const tableData = transformTableData();
  console.log({ tableData });

  const getSelectionDetails = () => {
    console.log('selected:', onSelectionChange.getSelection());
  };

  const onSelectionChange = new Selection({
    onSelectionChanged: () => {
      getSelectionDetails();
    },
  });

  return (
    <>
      <DetailsList
        columns={columnList}
        items={tableData}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        selectionMode={SelectionMode.single}
        selection={onSelectionChange}
      />
    </>
  );
}
