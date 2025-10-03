import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import type { Recipe } from '../types';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams<{ id: string }>();

  const {
    data: recipe,
    isLoading,
    error,
  } = useFetch<Recipe>(`https://dummyjson.com/recipes/${id}`);

  return (
    <div className={styles.container}>
      {isLoading && <div className="centered-message">Loading...</div>}
      {error && <div className="centered-message">Error: {error}</div>}

      {!isLoading && !error && recipe && (
        <div className={styles.content}>
          <div className={styles.topSection}>
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.name}
            />
            <div className={styles.header}>
              <h2 className={styles.name}>
                {recipe.name}
                <span className={styles.difficulty}>{recipe.difficulty}</span>
              </h2>
              <div className={styles.timeTotal}>
                total {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes
                needed
              </div>
              <div className={styles.timeInfo}>
                prep time {recipe.prepTimeMinutes} minutes
              </div>
              <div className={styles.timeInfo}>
                cook time {recipe.cookTimeMinutes} minutes
              </div>
              <ul className={styles.tags}>
                {recipe.tags?.map((tag, i) => (
                  <li className="tag" key={i}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.ingredientsBox}>
              <h2 className={styles.sectionTitle}>Ingredients</h2>
              <span>{recipe.ingredients.join(', ')}</span>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Instructions</h2>
            <ol className={styles.instructionList}>
              {recipe.instructions.map((step, index) => (
                <li className={styles.instructionItem} key={index}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Info</h2>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>cuisine: {recipe.cuisine}</li>
              <li className={styles.infoItem}>
                meal type: {recipe.mealType?.join(', ')}
              </li>
              <li className={styles.infoItem}>
                calories: {recipe.caloriesPerServing} calories
              </li>
              <li className={styles.infoItem}>rating: {recipe.rating}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
