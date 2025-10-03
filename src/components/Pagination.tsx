import styles from './Pagination.module.css';

type PaginationProps ={
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </button>

      {pageNumbers.map((number) => {
        const isActive = currentPage === number;
        const buttonClass = `${styles.button} ${isActive ? styles.active : ''}`;

        return (
          <button
            key={number}
            className={buttonClass}
            onClick={() => onPageChange(number)}
            aria-current={isActive ? 'page' : undefined}
          >
            {number}
          </button>
        );
      })}

      <button className={styles.button} 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;