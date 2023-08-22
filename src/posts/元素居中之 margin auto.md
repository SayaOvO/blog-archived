---
title: >
    元素居中之 margin: auto
description: >
    试着解释了为什么margin: 0 auto 会使元素水平居中以及为什么通过绝对定位和 margin: auto 可以让元素水平、垂直居中
date: 2023-08-22
published: true
categories:
- 前端 101
tags:
- CSS
---

如何将元素居中这个常见的面试题有一个解决方法是通过 margin 和 绝对定位的方式完成的，下面是代码

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/SayyaOvO/embed/ExGaYzj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/SayyaOvO/pen/ExGaYzj">
  Untitled</a> by Saya (<a href="https://codepen.io/SayyaOvO">@SayyaOvO</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

我个人认为这里的 `margin:auto` 最难理解了，因为有一个非常常见的用法是将元素的 margin-left, margin-right 设置为 auto，这样可以使元素达到水平居中的效果，如果我没记错的话，一般给的解释是如果把 margin-left 或 margin-right 设置为 auto 的话，这样他的边距会往相应的方向尽可能的占据空间，既然左右两个边距都想要最大的空间而且宽度已知的情况下，自然元素会被“挤”到中间了。不知道有没有人和我一样，试图把同样的模式应用到 margin-bottom/margin-top 上面，即将这两个值设置为 auto，希望能使元素垂直居中。but it didn't work 😥

看到上面的代码，我就想到我一直以来我都不知道为什么会这样，也不理解为什么上面的代码会让元素居中，至少我也暂时还没看到合适的解释。于是我在 CSS 规范里找到了这个网页 [Visual formatting model details](https://www.w3.org/TR/CSS22/visudet.html#Computing_widths_and_margins)  这里面关于宽度和 margin 的计算，解决了我的这个困惑

### margin-inline auto

第 10.3 节 「Calculating widths and margins」 里面有说

> The values of an element's ['width'](https://www.w3.org/TR/CSS22/visudet.html#propdef-width), ['margin-left'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-left), ['margin-right'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-right), ['left'](https://www.w3.org/TR/CSS22/visuren.html#propdef-left) and ['right'](https://www.w3.org/TR/CSS22/visuren.html#propdef-right) properties as used for layout depend on the type of box generated and on each other.

即如何利用这四个属性的值来布局依赖元素的类型，其中第10.3.3 小节 「Block-level, non-replaced elements in normal flow」 中的

> The following constraints must hold among the used values of the other properties:  ['margin-left'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-left) + ['border-left-width'](https://www.w3.org/TR/CSS22/box.html#propdef-border-left-width) + ['padding-left'](https://www.w3.org/TR/CSS22/box.html#propdef-padding-left) + ['width'](https://www.w3.org/TR/CSS22/visudet.html#propdef-width) + ['padding-right'](https://www.w3.org/TR/CSS22/box.html#propdef-padding-right) + ['border-right-width'](https://www.w3.org/TR/CSS22/box.html#propdef-border-right-width) + ['margin-right'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-right) = width of [containing block](https://www.w3.org/TR/CSS22/visudet.html#containing-block-details)

字面意思，就是他们几个加起来要等于 containing block 的宽度
后面具体说了各种不同的情况

> If there is exactly one value specified as 'auto', its used value follows from the equality.

这个就是说明了如果这几个值中其中有且只有一个值为 auto 的情况下，这个对应的属性的 `used value` 将根据上面的等式计算。这就解释了为什么*将 margin-left 或 margin-right 的其中一个值设置为 auto，对应方向的外边距会占据所有剩余可用空间*

> If both ['margin-left'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-left) and ['margin-right'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-right) are 'auto', their used values are equal. This horizontally centers the element with respect to the edges of the containing block.

这个说明了 `margin-inline: auto` 会将元素水平居中


### margin block auto

第 10.6 节 「Calculating heights and margins」 里面

> For calculating the values of ['top'](https://www.w3.org/TR/CSS22/visuren.html#propdef-top), ['margin-top'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-top), ['height'](https://www.w3.org/TR/CSS22/visudet.html#propdef-height), ['margin-bottom'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-bottom), and ['bottom'](https://www.w3.org/TR/CSS22/visuren.html#propdef-bottom) a distinction must be made between various kinds of boxes:

和宽度一样，高度的计算视不同的盒子类型来定，第 10.6.3 节 「Block-level non-replaced elements in normal flow when 'overflow' computes to 'visible'」 说

> If ['margin-top'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-top), or ['margin-bottom'](https://www.w3.org/TR/CSS22/box.html#propdef-margin-bottom) are 'auto', their used value is 0.

所以设置 margin-top 和 margin-bottom 为 auto，不起任何作用，因为它们的值为 0


### margin: auto and absolute

回归到开始的代码，为什么设置了绝对定位再加上 margin: auto 会让元素居中呢？解释在第 10.6.4 和第 10.3.7 节 「Absolutely positioned, non-replaced elements」 里面
第 10.6.4 节：

> For absolutely positioned elements, the used values of the vertical dimensions must satisfy this constraint:
> 	'top' + 'margin-top' + 'border-top-width' + 'padding-top' + 'height' + 'padding-bottom' + 'border-bottom-width' + 'margin-bottom' + 'bottom' = height of containing block
> 
> If none of the three are 'auto': If both 'margin-top' and 'margin-bottom' are 'auto', solve the equation under the extra constraint that the two margins get equal values
> 

第 10.3.7 节也有基本一样的说明，两个方向结合起来就可以得出处于绝对定位的元素会被水平、垂直居中于其 `Containing block`，而上面的例子中，通过 `inset：0` 让该 `containing block` 占据整个 `.outer` 元素的空间

