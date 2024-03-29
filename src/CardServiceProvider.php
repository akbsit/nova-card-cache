<?php namespace Akbsit\NovaCardCache;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class CardServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $oEvent) {
            Nova::script('nova-card-cache', __DIR__ . '/../dist/js/card.js');
            Nova::style('nova-card-cache', __DIR__ . '/../dist/css/card.css');
        });
    }

    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
            ->prefix('nova-vendor/nova-card-cache')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
