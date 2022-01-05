import PrivateMenu from '../private-menu';
import PublicMenu from '../public-menu';
import './index.scss';

export default class HeaderDown {
  constructor({ $parent }) {
    const headerDown = document.createElement('div');
    headerDown.className = 'header-menu';

    this.publicMenu = new PublicMenu({ $parent: headerDown });
    this.privateMenu = new PrivateMenu({ $parent: headerDown });
    $parent.appendChild(headerDown);
  }

  setState(props) {
    this.publicMenu.setState(props);
  }
}

{
  /* <div class="header-menu">
<div class="category">
  <button class="category__title"><i class="fas fa-bars"></i>카테고리</button>
  <ul class="category-first">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="category-second">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul class="category-third">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
<div class="gubun-bar"></div>
<ul class="top-menu">
  <li class="top-menu__btn"><a href="#">핫딜</a></li>
  <li class="top-menu__btn"><a href="">베스트100</a></li>
  <li class="top-menu__btn"><a href="">할인특가</a></li>
  <li class="top-menu__btn"><a href="">기획전</a></li>
</ul>
<ul class="private-menu">
  <li class="private-menu__btn"><a href="#">로그인</a></li>
  <li class="private-menu__btn"><a href="#">최근본상품</a></li>
</ul>
</div> */
}