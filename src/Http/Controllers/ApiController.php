<?php namespace Akbsit\NovaCardCache\Http\Controllers;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Routing\Controller;
use Illuminate\Http\JsonResponse;

use Akbsit\NovaCardCache\Helper\CacheHelper;

class ApiController extends Controller
{
    private const CODE_SUCCESS_REQUEST = 200;

    public function handle(): JsonResponse
    {
        Artisan::call('optimize:clear');
        Artisan::output();

        return response()
            ->json($this->getResponseData())
            ->setStatusCode(self::CODE_SUCCESS_REQUEST);
    }

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
