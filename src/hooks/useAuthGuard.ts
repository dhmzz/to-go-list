import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkSession } from '../auth';

export function useAuthGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    checkSession().then((session) => {
      if (!session) {
        navigate('/signin');
      }
    });
  }, [navigate]);
}
