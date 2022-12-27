import React, { useState } from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode, Selection } from '@fluentui/react';
import { columnList } from '../../constants/constants';

export default function MovieTableDetails({ data }) {
  const [rowData, setRowData] = useState([]);

  const getSelectionDetails = () => {
    setRowData(onSelectionChange.getSelection());
  };

  const onSelectionChange = new Selection({
    onSelectionChanged: () => {
      getSelectionDetails();
    },
  });

  return (
    <div className="movie-detail-section">
      <DetailsList
        columns={columnList}
        items={data}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        selectionMode={SelectionMode.single}
        selection={onSelectionChange}
        data-testid="tableComp"
      />
      <div className="movie-details">
        {rowData && rowData.length ? (
          <>
            <h2>
              Episode {rowData[0]?.episodeId} - {rowData[0]?.title}
            </h2>
            <div className="movie-description">{rowData[0].movieDescription}</div>
            <div>Directed by: {rowData[0]?.director}</div>
            <div>Produced by: {rowData[0]?.producer}</div>
          </>
        ) : (
          <div className="no-movie-info">no movie selected</div>
        )}
      </div>
    </div>
  );
}
