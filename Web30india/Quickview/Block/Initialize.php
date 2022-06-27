<?php
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
namespace Web30india\Quickview\Block;

use Exception;

/**
 * Quickview Initialize block
 */
class Initialize extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Web30india\QuickView\Helper\Data
     */
    protected $helper;

    /**
     * @param \Web30india\Quickview\Helper\Data $helper
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param array $data
     */
    public function __construct(
        \Web30india\Quickview\Helper\Data $helper,
        \Magento\Framework\View\Element\Template\Context $context,
        array $data = []
    ) {
        $this->helper = $helper;
        parent::__construct($context, $data);
    }

    /**
     * Returns config
     *
     * @return array
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getConfig()
    {
        return [
            'baseUrl' => $this->getBaseUrl()
        ];
    }

    /**
     * Class Helper::Data
     *
     * @return \Web30india\QuickView\Helper\Data
     */
    public function getHelper()
    {
        return $this->helper;
    }

    /**
     * Return base url.
     *
     * @codeCoverageIgnore
     * @return string
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getBaseUrl()
    {
        try {
            return $this->_storeManager->getStore()->getBaseUrl();
        } catch (Exception $e) {
            return null;
        }
    }
}
