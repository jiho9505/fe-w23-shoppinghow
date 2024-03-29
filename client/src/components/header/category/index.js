import { CATEGORY_HOVER_ICON, CATEGORY_ICON } from '@/static/constants/image-path';
import { $ } from '@/utils/helper';
import './index.scss';

export default class Category {
  constructor({ $parent }) {
    this.category = document.createElement('div');
    this.category.className = 'category';
    this.render();
    $parent.appendChild(this.category);

    this.category.addEventListener('mouseenter', this.handleMouseEnterCategory.bind(this));
    this.category.addEventListener('mouseleave', this.handleMouseLeaveCategory.bind(this));
  }

  render() {
    this.category.innerHTML = `
        <img class="category-img" src=${CATEGORY_ICON} alt='카테고리 아이콘'/>
        <span>카테고리</span>
        <div class="gubun-bar"></div>
    `;
  }

  handleMouseEnterCategory() {
    $('.category-img', this.category).src = CATEGORY_HOVER_ICON;
  }

  handleMouseLeaveCategory() {
    $('.category-img', this.category).src = CATEGORY_ICON;
  }
}
