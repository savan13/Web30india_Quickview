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
namespace Web30india\Quickview\Plugin;

use Magento\Catalog\Api\ProductRepositoryInterface;
use Magento\Framework\App\Action\Context;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Store\Model\StoreManagerInterface;

/**
 * Class Add
 * @package web30indiaquickview\Quickview\Plugin
 */
class Add
{
    /**
     * @var \Magento\Framework\Controller\Result\RedirectFactory
     */
    protected $redirectFactory;
    /**
     * @var Context
     */
    protected $context;
    /**
     * @var StoreManagerInterface
     */
    protected $storeManager;
    /**
     * @var ProductRepositoryInterface
     */
    protected $productRepository;

    /**
     * Add constructor.
     * @param \Magento\Framework\Controller\Result\RedirectFactory $redirectFactory
     * @param Context $context
     * @param StoreManagerInterface $storeManager
     * @param ProductRepositoryInterface $productRepository
     */
    public function __construct(
        \Magento\Framework\Controller\Result\RedirectFactory $redirectFactory,
        Context $context,
        StoreManagerInterface $storeManager,
        ProductRepositoryInterface $productRepository
    ) {
        $this->redirectFactory = $redirectFactory;
        $this->context = $context;
        $this->storeManager = $storeManager;
        $this->productRepository = $productRepository;
    }

    /**
     * @param \Magento\Catalog\Controller\Product\Compare\Add $subject
     * @param $result
     * @return \Magento\Framework\Controller\Result\Redirect
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    protected function afterExcute(\Magento\Catalog\Controller\Product\Compare\Add $subject, $result)
    {
        $resultRedirect = $this->redirectFactory->create();
        $productId = (int)$this->context->getRequest()->getParam('product');
        $storeId = $this->storeManager->getStore()->getId();
        try {
            $product = $this->productRepository->getById($productId, false, $storeId);
        } catch (NoSuchEntityException $e) {
            $product = null;
        }
        if ($product)
        {
            $params = $this->context->getRequest()->getParams();
            if (isset($params['web30indiaquickview']) && $params['web30indiaquickview'] == 1) {
                return $resultRedirect->setPath($product->getUrlModel()->getUrl($product));
            }
        }
        return $result;
    }
}
