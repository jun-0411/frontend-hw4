import { Link } from 'react-router-dom';
import type { Recipe } from '../types';
import styles from './RecipeCard.module.css';

type RecipeCardProps = {
  recipe: Recipe;
};

function RecipeCard({ recipe }: RecipeCardProps) {
  if (!recipe) return null;

  return (
    <Link to={`/detail/${recipe.id}`} className={styles.container}>
        <img className={styles.image} src={recipe.image} alt={recipe.name} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{recipe.name}</h3>
            <span className={styles.difficulty}>{recipe.difficulty}</span>
          </div>
          <div className={styles.tags}>
            {recipe.tags?.slice(0, 3).map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
        </div>
    </Link>
  );
}

export default RecipeCard;