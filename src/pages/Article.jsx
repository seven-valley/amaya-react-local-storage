import Nav from "../components/Nav.jsx";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function () {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'designation', headerName: 'Designation', width: 130 },
        
        {
          field: 'prix',
          headerName: 'Prix HT',
          type: 'decimal',
          width: 90,
        },
        {
          field: 'isSommeil',
          headerName: 'En Sommeil',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          type: 'boolean'
          
        },
      ];
      
      const rows = [
        { id: 1, designation: 'Prestation service web /h', prix: 120, isSommeil: true },
        { id: 2, designation: 'Prestation service développement /h', prix: 140, isSommeil: true },
        { id: 3, designation: 'Hébergement de votre site internet - mensuel', prix: 120, isSommeil: false },
        { id: 4, designation: 'maquette graphique', prix: 120, isSommeil: true },
      ];
      
      const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
        <Nav active={"Catalogue"}>
       
        </Nav>

        <Paper sx={{ height: 400, width: '100%' }}>
  <DataGrid
    rows={rows}
    columns={columns}
    // initialState={{ pagination: { paginationModel } }}
    // pageSizeOptions={[5, 10]}
    checkboxSelection
    sx={{ border: 0 }}
  />
</Paper>


        </>
        );
}