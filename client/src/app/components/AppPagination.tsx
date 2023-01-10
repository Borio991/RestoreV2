import { Typography, Pagination } from "@mui/material";
import { MetaData } from "../models/paginationModel";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, pageSize, totalCount, totalPages } = metaData;
  return (
    <>
      <Typography>
        Displaying {currentPage * pageSize - (pageSize - 1)}-{totalCount < currentPage * pageSize ? totalCount : currentPage * pageSize}{" "}
        item of {totalCount} item
      </Typography>
      <Pagination
        size="large"
        color="secondary"
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => {
          onPageChange(page);
        }}
      />
    </>
  );
}

export default AppPagination;
