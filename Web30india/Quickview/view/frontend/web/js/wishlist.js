/**
 * Web30india Commerce Co.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the EULA
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://web30india.com/web30india-Commerce-License.txt
 *
 * @category   Web30india
 * @package    Web30india_Quickview
 * @author     Extension Team
 * @copyright  Copyright (c) 2009-2022 Web30india Commerce Co. (https://web30india.com )
 * @license    https://web30india.com/web30india-Commerce-License.txt
 */
define(
    [
        "jquery",
    ],
    function ($) {
        $(".product-addto-links .towishlist").hover(
            function (e) {
               var dataPost=$(this).attr("data-post");
                var urlWishList="wishlist\\/index\\/add";
                var urlWeb30indiaWistList="web30india_quickview\\/wishlist\\/add";
                dataPost=dataPost.replace(urlWishList,urlWeb30indiaWistList);
                urlWishList="wishlist/index/add";
                urlWeb30indiaWistList="web30india_quickview/wishlist/add";
                dataPost=dataPost.replace(urlWishList,urlWeb30indiaWistList);
                $(this).attr("data-post",dataPost);
            }
        );
    }
);
