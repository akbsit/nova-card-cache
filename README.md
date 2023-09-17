# nova-card-cache, [Packagist](https://packagist.org/packages/akbsit/nova-card-cache), [Nova packages](https://novapackages.com/packages/akbsit/nova-card-cache)

## Install

To install package, you need run command:

```bash
composer require akbsit/nova-card-cache
```

## Usage

Add the card tools to your dashboard:

```php
use Akbsit\NovaCardCache\NovaCardCache;

protected function cards()
{
    return [
        NovaCardCache::make(),
        ...
    ];
}
```
