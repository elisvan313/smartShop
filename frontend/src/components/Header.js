import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` 
  <div class="brand">
  <a href="/#/"><img src="images/logo.png" style="width:40px;height:40px"></a>
  </div>
  <div>
  ${
    name
      ? `<a href="/#/profile"><img src="images/Compound Path.png" style="width:30px;height:30px">${name}</a>`
      : `<a href="/#/signin">Sign-In</a>`
  }    
    <a href="/#/cart"><img src="images/Compound Path_2.png" style="width:30px;height:30px"></a>
    ${isAdmin ? `<a href="/#/dashboard"><img src="images/Group.png" style="width:30px;height:30px">Dashboard</a>` : ''}
  </div>`;
  },
  after_render: () => {},
};
export default Header;
