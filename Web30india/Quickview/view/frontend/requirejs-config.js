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
var config = {
    map: {
        '*': {
            web30india_fancybox: 'Web30india_Quickview/js/jquery.fancybox',
            web30india_config: 'Web30india_Quickview/js/web30india_config',
            magnificPopup: 'Web30india_Quickview/js/jquery.magnific-popup.min',
            web30india_tocart: 'Web30india_Quickview/js/web30india_tocart'
        }
    },
    shim: {
        magnificPopup: {
            deps: ['jquery']
        }
    },
    config : {
        mixins: {
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Web30india_Quickview/js/add-to-cart-mixin': true
            }
        }
    }
};
