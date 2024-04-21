import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { exam1 } from "./exam1.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="container">
<div class="header">5/8 外出確認表</div>
<div class="content">
  <ol class="shop-list">
    <li class="item">麵包</li>
    <li class="item">短袖衣服</li>
    <li class="item">飲用水</li>
    <li class="item">帳篷</li>
  </ol>
  <ul class="shop-list">
    <li class="item">暈車藥</li>
    <li class="item">感冒藥</li>
    <li class="item">丹木斯</li>
    <li class="item">咳嗽糖漿</li>
  </ul>
</div>
<div class="footer">以上僅共參考</div>
</div>
`;

exam1(document.querySelector<HTMLButtonElement>("#counter")!);
