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
        'jquery',
        'mage/mage',
        'Web30india_Quickview/js/jquery.magnific-popup.min'
    ],
    function ($) {
        "use strict";
        $.widget(
            'web30india.web30india_config',
            {
                options: {
                    productUrl: '',
                    buttonText: '',
                    isEnabled: false,
                    baseUrl: '',
                    productImageWrapper: '',
                    productItemInfo: ''
                },

                _create: function () {
                    this.renderButton();
                    this._EventListener();
                },

                renderButton: function () {
                    var $widget = this,
                        id_product,
                        productImageWrapper = '.' + this.options.productImageWrapper,
                        productItemInfo = '.' + this.options.productItemInfo;
                    if ($widget.options.isEnabled == 1) {
                        $(productImageWrapper).each(
                            function () {

                                if ($(this).parents(productItemInfo).find('.actions-primary input[name="product"]').val() != '') {
                                    id_product = $(this).parents(productItemInfo).find('.actions-primary input[name="product"]').val();
                                }
                                if (!id_product) {
                                    id_product = $(this).parents(productItemInfo).find('.price-box').data('product-id');
                                }
                                if (id_product) {
                                    $(this).append('<div id="quickview-' + id_product + '" class="web30india-bt-quickview"><a class="web30india-quickview" data-quickview-url="' + $widget.options.productUrl + 'id/' + id_product + '" href="javascript:void(0);" ><span>' + $widget.options.buttonText + '</span></a></div>');
                                }
                            }
                        )
                    }
                },

                _EventListener: function () {
                    var $widget = this;
                    if ($widget.options.isEnabled == 1) {

                        $('a.mailto').click(
                            function (e) {
                                e.preventDefault();
                                window.top.location.href = $(this).attr('href');
                                return true;
                            }
                        );

                        $('body, #layer-product-list').on(
                            'contentUpdated',
                            function () {
                                $('.web30india-bt-quickview').remove();
                                $widget.renderButton();
                            }
                        );

                        $(document).on(
                            'click',
                            '.web30india-quickview',
                            function () {
                                var prodUrl = $(this).attr('data-quickview-url');
                                if (prodUrl.length) {
                                    $widget.openPopup(prodUrl);
                                }
                            }
                        );
                    }
                },

                openPopup: function (prodUrl) {
                    var $widget = this,
                        url = $widget.options.baseUrl + 'web30india_quickview/index/updatecart';

                    if (!prodUrl.length) {
                        return false;
                    }

                    $.magnificPopup.open(
                        {
                            items: {
                                src: prodUrl
                            },
                            type: 'iframe',
                            closeOnBgClick: false,
                            scrolling: false,
                            preloader: true,
                            tLoading: '',
                            callbacks: {
                                open: function () {
                                    $('.mfp-preloader').css('display', 'block');
                                    $("iframe.mfp-iframe").contents().find("html").addClass("web30india_loader");
                                },
                                beforeClose: function () {
                                    $('[data-block="minicart"]').trigger('contentLoading');
                                    $.ajax(
                                        {
                                            url: url,
                                            method: "POST"
                                        }
                                    );
                                },
                                close: function () {
                                    $('.mfp-preloader').css('display', 'none');
                                }
                            }
                        }
                    );
                }
            }
        );
        return $.web30india.web30india_config;
    }
);
