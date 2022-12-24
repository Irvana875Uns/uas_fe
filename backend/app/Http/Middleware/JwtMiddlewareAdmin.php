<?php
 
namespace App\Http\Middleware;
 
use Closure;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
 
 
class JwtMiddlewareAdmin
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
 
        //if token not found
        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'Token not provided'
            ], 401);
        }
 
        //try to validate token
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Token expired'
            ], 401);
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Token invalid'
            ], 401);
        } catch (\PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Token absent'
            ], 401);
        }
 
        //if user not found
        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'User not found'
            ], 404);
        }
 
        //set user to request
        $request->auth = $user;
 
        //if user is admin
        if ($user->role == 'admin') {
            return $next($request);
        }
 
        //if user is not admin
        return response()->json([
            'success' => false,
            'message' => 'User is not admin'
        ], 401);
 
    }
}