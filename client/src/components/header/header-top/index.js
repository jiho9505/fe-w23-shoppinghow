import SearchContainer from '../search-container';
import './index.scss';
import { LOGO } from '@/static/constants/image-path';

export default class HeaderTop {
  constructor({ $parent }) {
    this.headerTop = document.createElement('div');
    this.headerTop.className = 'header-top';
    this.render();
    this.searchContainer = new SearchContainer({ $parent: this.headerTop });
    $parent.appendChild(this.headerTop);
  }

  render() {
    this.headerTop.innerHTML = `
        <div class="title">
            <img src=${LOGO} alt='로고'/>
        </div>`;
  }
}
