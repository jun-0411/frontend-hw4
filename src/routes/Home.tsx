import { useState } from 'react';
import Pagination from '../components/Pagination';
import RecipeCard from '../components/RecipeCard';
import useFetch from '../hooks/useFetch';
import type { Recipe } from '../types';
import styles from './Home.module.css';

type RecipeApiResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 12;
  const skip = (currentPage - 1) * limit;
  const url = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`;

  const { data, isLoading, error } = useFetch<RecipeApiResponse>(url);

  const recipes = data?.recipes ?? [];
  const totalPages = data ? Math.ceil(data.total / limit) : 0;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className={styles.container}>
      {isLoading && <div className="centered-message">Loading...</div>}
      {error && <div className="centered-message">Error: {error}</div>}

      {!isLoading && !error && recipes.length > 0 && (
        <>
          <div className={styles.recipeGrid}>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
}
export default Home;
