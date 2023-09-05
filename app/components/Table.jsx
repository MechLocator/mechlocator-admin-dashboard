import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "accountType",
    headerName: "Account Type",
    description: "Driver/Partner(Mechanic)",
    sortable: false,
    width: 160,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    description: "Date of initial signup",
    sortable: false,
    width: 160,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    description: "Shows the date of profile update",
    sortable: false,
    width: 160,
  },
  {
    field: "isVerified",
    headerName: "Is Verified",
    description: "Shows whether the partner is verified",
    sortable: false,
    width: 160,
  },
  {
    field: "isSuspended",
    headerName: "Is Suspended",
    description: "Shows whether the a user is suspended",
    sortable: false,
    width: 160,
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "Perform Actions: Not Sortable",
    sortable: false,
    width: 100,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, accountType: "Partner", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Not Verified" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, accountType: "Partner", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, accountType: "Partner", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, accountType: "Partner", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, accountType: "Partner", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Not Verified" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, accountType: "Partner", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, accountType: "Driver", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, accountType: "Driver", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Not Verified" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, accountType: "Driver", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 10, lastName: 'Clifford', firstName: 'Ferrara', age: 44, accountType: "Driver", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "" },
  { id: 11, lastName: 'Frances', firstName: 'Rossini', age: 36, accountType: "Driver", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Verified" },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65, accountType: "Driver", createdAt: "2023-12-12", updatedAt: "2023-16-11", isVerified: "Not Verified" },
];

export default function DataTable() {
  return (
    <div style={{ height: "90%", maxWidth: 1100, overflowX: "scroll", marginTop: "1em" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}