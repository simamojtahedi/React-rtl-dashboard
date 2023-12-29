import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface MainTableProps {
  header: any;
  tableItems: any;
}

export default function MainTable({ header, tableItems }: MainTableProps) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((headerItem: any) => (
              <TableCell
                key={headerItem.id}
                align="center"
                sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              >
                {headerItem.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map((transaction: any, index: number) => (
            <TableRow key={index}>
              {header.map((headerItem: any) =>
                headerItem.isUser ? (
                  <TableCell
                    key={headerItem.id}
                    align="center"
                    sx={{
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {transaction[headerItem.id].map((user: any) => (
                      <img
                        key={user.name}
                        alt={user.name}
                        src={user.image}
                        className="table_image"
                      />
                    ))}
                  </TableCell>
                ) : (
                  <TableCell
                    key={headerItem.id}
                    align="center"
                    sx={{
                      border: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {transaction[headerItem.id]}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
