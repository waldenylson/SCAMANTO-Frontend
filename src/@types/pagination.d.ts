export default interface IPagination {
  rows: number;
  limit: number;
  totalPages: number;
  currentPage: number;
}
