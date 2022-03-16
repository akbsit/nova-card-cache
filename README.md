# nova-card-cache, [Packagist](https://packagist.org/packages/falbar/nova-card-cache), [Nova packages](https://novapackages.com/packages/falbar/nova-card-cache)

## Установка

Для установки пакета нужно:

```bash
composer require falbar/nova-card-cache
```

## Подключение

Подключить в `NovaServiceProvider`:

```php
use Falbar\NovaCardCache\NovaCardCache;

protected function cards()
{
    return [
        NovaCardCache::make(),
        ...
    ];
}
```
