import './category-item.styles.scss';
import { SHOP_NOW } from '../../utils/utils-description';


const CategoryItem = ({category}) => {
    const { imageUrl, title } = category
    return(
        <div className='category-container'>
            <div 
              className='background-image' 
              style={{
                backgroundImage: `url(${imageUrl})`}
              } 
            />
            <div className='category-body-container'>
                <h2> {title} </h2>
                <p> {SHOP_NOW} </p>
            </div>
        </div>
    )
}

export default CategoryItem;