<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Services\UserService;

class UserController extends Controller
{
    
    /**
    * @var UserService
    */
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function newUser(Request $request)
    {
        $validacao =  Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        
        if ($validacao->fails()) {
            return $validacao->errors();
        }
        
        $response = $this->userService->newUser($request['email'], $request['password']);
        
        if (!$response['success']) {
            return Response()->Json([
                'success' => false,
                'error' => $response['error']
            ],500); 
        }
        
        return Response()->Json([
            'success' => true,
            'message' => $response['message']
        ],201);

    }

    public function  getUser()
    {
       $response =  $this->userService->getUser();
       
       return Response()->Json([
            'success' => true,
            'data' => $response
       ],200);
    }
}
