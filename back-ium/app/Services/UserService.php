<?php

namespace App\Services;

use App\User;
use Error;

class UserService
{
    /**
     *  @var User
     */
    private $userService;

    public function __construct(User $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @author Caio César
     * @date 01/11/2019
     * @return Usuarios
     */
    public function getUser()
    {
        return $this->userService->all();
    }

    /**
     * @author Caio César
     * @date 01/11/2019
     * @return novo usuario
     */
    public function newUser(String $email, String $password)
    {   
        try{

            $user =  User::create([
                'email'     => $email,
                'password'  => \Hash::make($password),
            ]);
            
            $user->token = $user->createToken($user->email)->accessToken;
            
            if (!$user){
                throw new Error('Erro ao inserir o usuario!');
            }

            return [
                'success' => true,
                'message' => ' Usuario cadastrado com sucesso!'
            ];

        } catch (\Throwable $exception) {

            return [
                'success' => false,
                'error'   => $exception->getMessage()  
            ];
        }

    }    

}
 