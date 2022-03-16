<?php namespace Falbar\NovaCardCache;

use Falbar\NovaCardCache\Helper\CacheHelper;
use Laravel\Nova\Card;

/**
 * Class NovaCardCache
 * @package Falbar\NovaCardCache
 */
class NovaCardCache extends Card
{
    /* @inheritDoc */
    public $width = '1/3';

    /* @inheritDoc */
    public function component()
    {
        $this->setComponentMeta();

        return 'nova-card-cache';
    }

    /* @return NovaCardCache */
    private function setComponentMeta()
    {
        return $this->withMeta([
            'size' => CacheHelper::make()->totalSize()->getFormatted(),
        ]);
    }
}
