import './categories-module.styles.scss';
import categories from '../../utils/categories-info.json'
import CategoryItem from '../CategoryItem/category-item.component';

const CategoriesBody = () => {
    return (
        <div className='categories-container'> 
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    )
}

export default CategoriesBody;