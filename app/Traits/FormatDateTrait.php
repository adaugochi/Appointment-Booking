<?php

namespace App\Traits;

trait FormatDateTrait
{
    /**
     * @return string
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function getFullName()
    {
        return ucfirst($this->first_name) . ' ' . ucfirst($this->last_name) ;
    }

    public function getUserName()
    {
        return strtolower($this->first_name . $this->middle_name[0] . $this->last_name);
    }

    /**
     * @return false|string
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function formatDate()
    {
        return date("jS F Y h:i A", strtotime($this->created_at));
    }
}