<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        
        //get token from request
        $token = $request->bearerToken();

        //if token not from request
        if(!$token) {
            return response()->json([
                'succes' => false,
                'message' => 'Token not provided'
            ], 401);
        }

        //try to validate token PHPOpenSourceServer
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json([
                'succes' => false,
                'message' => 'Token expired'
            ], 401);
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json([
                'succes' => false,
                'message' => 'Token invalid'
            ], 401);
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException $e) {
            return response()->json([
                'succes' => false,
                'message' => 'Token absent'
            ], 401);
        }

        //set user to requst
        $request->auth = $user;

        //call next request
        return $next($request);
    }
}
