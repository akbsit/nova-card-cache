<?php namespace Falbar\NovaCardCache\Helper;

use Illuminate\Foundation\Application;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/**
 * Class CacheHelper
 * @package Falbar\NovaCardCache\Helper
 */
class CacheHelper
{
    const TYPE_VIEW = 'view';
    const TYPE_FILE = 'file';
    const TYPE_ROUTES = 'routes';
    const TYPE_CONFIG = 'config';
    const TYPE_SERVICES = 'services';
    const TYPE_PACKAGES = 'packages';
    private const TYPE_AVAILABLE = [
        self::TYPE_VIEW,
        self::TYPE_FILE,
        self::TYPE_ROUTES,
        self::TYPE_CONFIG,
        self::TYPE_SERVICES,
        self::TYPE_PACKAGES,
    ];

    private ?string $sLastCalledMethod;

    private array $arPathList = [];
    private int $iSize = 0;
    private int $iTotalSize = 0;

    /* @return static */
    public static function make(): self
    {
        return new static();
    }

    /* @return $this */
    public function pathList(): self
    {
        $this->sLastCalledMethod = __FUNCTION__;

        /* @var Application $oLaravel */
        $oLaravel = app();

        $this->arPathList = [
            self::TYPE_VIEW     => storage_path('framework/views'),
            self::TYPE_FILE     => config('cache.stores.file.path'),
            self::TYPE_ROUTES   => $oLaravel->getCachedRoutesPath(),
            self::TYPE_CONFIG   => $oLaravel->getCachedConfigPath(),
            self::TYPE_SERVICES => $oLaravel->getCachedServicesPath(),
            self::TYPE_PACKAGES => $oLaravel->getCachedPackagesPath(),
        ];

        return $this;
    }

    /**
     * @param string $sType
     *
     * @return $this
     */
    public function size(string $sType): self
    {
        $this->sLastCalledMethod = __FUNCTION__;

        if (!in_array($sType, self::TYPE_AVAILABLE)) {
            $this->iSize = 0;

            return $this;
        }

        $this->pathList();

        $this->sLastCalledMethod = __FUNCTION__;

        if (empty($this->arPathList)) {
            $this->iSize = 0;

            return $this;
        }

        $sPath = Arr::get($this->arPathList, $sType);
        if (empty($sPath)) {
            $this->iSize = 0;

            return $this;
        }

        $oFilesystem = new Filesystem;
        if (!$oFilesystem->exists($sPath)) {
            $this->iSize = 0;

            return $this;
        }

        $this->iSize = $oFilesystem->size($sPath);

        return $this;
    }

    /* @return $this */
    public function totalSize(): self
    {
        $iResult = 0;
        foreach (self::TYPE_AVAILABLE as $sType) {
            $iResult += $this->size($sType)->get();
        }

        $this->sLastCalledMethod = __FUNCTION__;

        $this->iTotalSize = $iResult;

        return $this;
    }

    /* @return mixed */
    public function get()
    {
        if (!method_exists($this, $this->sLastCalledMethod)) {
            return null;
        }

        $sMethodName = 'get' . Str::studly($this->sLastCalledMethod);
        if (!method_exists($this, $sMethodName)) {
            return null;
        }

        return $this->$sMethodName();
    }

    /* @return mixed */
    public function getFormatted()
    {
        if (!method_exists($this, $this->sLastCalledMethod)) {
            return null;
        }

        $sMethodName = 'get' . Str::studly($this->sLastCalledMethod) . 'Formatted';
        if (!method_exists($this, $sMethodName)) {
            return null;
        }

        return $this->$sMethodName();
    }

    /* @return array */
    private function getPathList(): array
    {
        return $this->arPathList;
    }

    /* @return int */
    private function getSize(): int
    {
        return $this->iSize;
    }

    /* @return int */
    private function getTotalSize(): int
    {
        return $this->iTotalSize;
    }

    /* @return string */
    private function getTotalSizeFormatted(): string
    {
        return FileHelper::formatBytes($this->iTotalSize);
    }
}
