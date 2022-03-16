<?php namespace Falbar\NovaCardCache\Http\Controllers;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

use Falbar\NovaCardCache\Helper\CacheHelper;

/**
 * Class ApiController
 * @package Falbar\NovaCardCache\Http\Controllers
 */
class ApiController extends Controller
{
    private const CODE_SUCCESS_REQUEST = 200;

    /* @return JsonResponse */
    public function handle(): JsonResponse
    {
        Artisan::call('optimize:clear');
        Artisan::output();

        return response()
            ->json($this->getResponseData())
            ->setStatusCode(self::CODE_SUCCESS_REQUEST);
    }

    /* @return array */
    private function getResponseData(): array
    {
        return [
            'status'  => true,
            'data'    => [
                'size' => CacheHelper::make()->totalSize()->getFormatted(),
            ],
            'message' => 'Success request',
            'code'    => self::CODE_SUCCESS_REQUEST,
        ];
    }
}
