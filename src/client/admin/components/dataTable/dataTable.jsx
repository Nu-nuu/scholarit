import React from 'react';
import {
  DataGrid,
  GridToolbar,
} from '@mui/x-data-grid';
import './dataTable.scss';
import { Link } from 'react-router-dom';

const DataTable = (props) => {
  const { rows, columns, handleDelete, pageNo, pageSize, onPageChange, onPageSizeChange, totalItems } = props;

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        pageSize={pageSize}
        pagination
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        components={{
          Toolbar: GridToolbar,
        }}
        pageSizeOptions={[5, 10, 20, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        hideFooterPagination={true}
        disablePageSize
        rowCount={totalItems}
      />
      
    </div>
  );
};

export default DataTable;
