import useAppStore from '@/store/app';

import { useCookies } from '@vueuse/integrations/useCookies';

const isLoginKey = 'isLogin';

const useAuth = () => {
  const { login: _login, isLogin: _isLogin, logout } = useAppStore();
  const cookies = useCookies(['isLogin']);
  const isLogin = _isLogin || cookies.get(isLoginKey);
  function signIn() {
    _login();
    cookies.set(isLoginKey, true);
  }
  function signOut() {
    logout();
    cookies.set(isLoginKey, false);
  }
  return {
    isLogin,
    signIn,
    signOut,
  };
};

export default useAuth;
