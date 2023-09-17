<?php namespace Akbsit\NovaCardCache;

use Akbsit\NovaCardCache\Helper\CacheHelper;
use Laravel\Nova\Card;

class NovaCardCache extends Card
{
    public $width = '1/3';

    public function component(): string
    {
        $this->setComponentMeta();

        return 'nova-card-cache';
    }

    private function setComponentMeta(): void
    {
        $this->withMeta([
            'size' => CacheHelper::make()->totalSize()->getFormatted(),
        ]);
    }
}
