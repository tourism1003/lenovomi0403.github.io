### [洪瑋駿's Resume](https://lenovomi0403.github.io/Resume/) url="https://lenovomi0403.github.io/Resume/"
# Body
* 有使用 `scroll-behavior: smooth` ：讓捲動時達到平滑的效果。
* 套件的應用
    * <span style='background-color:#F3F4F4;'>&ensp;&ensp;Hover.css<sup>`v2.3.1`</sup>&ensp;&ensp;</span> 套件
        * 套件應用在 `按鈕`的區塊
        * 採用 ```Border Transitions``` 系列的  ```reveal```效果

    * <span style='background-color:#F3F4F4;'>&ensp;&ensp;AOS.js<sup>`v3.0.0-beta.6`</sup>&ensp;&ensp;</span> 套件
        * 套件應用在 `頁面的每個區塊`
        * 採用 ```ZOOM``` 系列的 ```zoom-in-up```效果
        * 為了要加快載入速度，`data-aos-duration`設定在`500` <br>
        才會覺得載入的速度很快

            \- 在寫網頁的時後的注意事項：<span style='color:red;'>`使用者體驗`</span><br>
~~原本對於`每個卡片`還有再加上`flip效果`，後來刪掉了~~。只保留 `zoom` 效果

    * <span style='background-color:#F3F4F4;'>&ensp;&ensp;Swiper.js<sup>`v5.4.0`</sup>&ensp;&ensp;</span> 套件
        * 套件應用在 `"RWD Effect" Section`與`"Structure Have Use innerHTML" Section`
        * 採用 `Navigation`、`Dynamic Bullets Pagination`、`Loop Mode`、`Autoplay` 效果

* Bootstrap Grid Rwd Effect
![image](https://lenovomi0403.github.io/Resume/01-img/04-README.md/03-Resume%20Website%20RWD%20Effect%20mockup.png)

    * `Bootstrap-xl` ：Extra large≥1200px
        * <span style='color:#FF83FA;'>navbar-toggler</span> : `display="none"`</li><li><span style='color:#2962ff;'>Programming Skill</span> ="`progressbar`"
    * `Bootstrap-lg` ：Large≥992px
        * <span style='color:#FF83FA;'>navbar-toggler</span> : `display="block"`</li><li><span style='color:#2962ff;'>Programming Skill</span> ="`donut`"</li><li><span style='color:#00e676;'>profile-img</span> ="`col-4`"</li><li><span style='color:#6200ea;'>donut-card</span> ="`col-3`"</li><li><span style='color:#004d40;' >education-img</span> ="`col-4`"</li><li><span style='color:#827717;'>experience-img</span> ="`col-4`"</li>
    * `Bootstrap-md` ：Medium≥768px
        * <span style='color:#00e676;'>profile-img</span> ="`col-12`"</li><li><span style='color:#6200ea;'>donut-card</span> ="`col-2`"</li><li><span style='color:#004d40;' >education-img</span> ="`col-12`"</li><li><span style='color:#827717;'>experience-img</span> ="`col-12`"</li>
    * `Bootstrap-sm` ：Small≥576px,
        * experience ="`order`"</li><li><span style='color:#6200ea;'>donut-card</span> ="`col-3`"</li><li><span style='color:#004d40;' >education-img</span> ="`col-4`"</li>
    * `Bootstrap-xs` ：Extra small<576px
        * <span style='color:#6200ea;'>donut-card</span> ="`col-2`"</li>
# Front-End Architecture
* HTML
    * `Navbar-button`，以及 `"Programming Skill" Section`、`"Education" Section`、`"Experience" Section`、`"RWD Effect" Section`、`"Structure Have Use innerHTML" Section`、`"footer icon" Section` 等主要區塊有使用 `innerHTML` ，達到簡化結構的效果
![image](https://lenovomi0403.github.io/Resume/01-img/04-README.md/01-innerHTML.jpg)

    * Navbar
        * 有 `scrolling-navbar` 的效果
        * `Portfolio` 與 `聯絡資訊/社交` 使用 `a#` 的設定

* CSS
    * 寫法採用 `SCSS`
![image](https://lenovomi0403.github.io/Resume/01-img/04-README.md/02-scss.jpg)
    * cursor Property
        * body {`cursor:context-menu;`}
        * Swiper {`cursor: pointer;`}

# Special thanks list&ensp;&ensp;
###### References
* `Programming Skill ="donut"` ： [SVG Percentage doughnut](https://codepen.io/sandersu/pen/gerEbM)<br>
https://codepen.io/sandersu/pen/gerEbM

* `Swiper.js 套件` ： [Swiper - 不需要使用到 jQuery 的輪播套件](https://codepen.io/sandersu/pen/gerEbM)<br>
Paragraph `3D Coverflow Effect` 的 `2. Card`<br>
https://codepen.io/sandersu/pen/gerEbM

* `Mockup template` ： [12 Column Vector Grid Draft (Mobile, Tablet, Desktop)](https://dribbble.com/shots/1711320-12-Column-Vector-Grid-Draft-Mobile-Tablet-Desktop)<br>
https://dribbble.com/shots/1711320-12-Column-Vector-Grid-Draft-Mobile-Tablet-Desktop
###### Very thank you about your provide.<br><br>

### UI frameworks Powered by [Bootstrap<sup>`v4.5.0`</sup>](https://getbootstrap.com/) & [MDBootstrap<sup>`v4.18.0`</sup>](https://mdbootstrap.com/) <br>icon Powered by [Font-Awesome](https://fontawesome.com/icons) & [Icons8 LLC.](https://icons8.com/icons) <br>Copyright © 2020 lenovomi0403. All rights reserved.