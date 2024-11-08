'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/recovery.module.scss';
import { AuthRecovery, AuthRecoveryCode, AuthRecoveryReset } from '@/app/api/api';

export default function Recovery() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const router = useRouter();

  const handleEmailSubmit = async () => {
    try {
      await AuthRecovery({ email });
      setStep(2);
    } catch (error) {
      alert('Ошибка отправки данных. Проверьте введенную почту.');
    }
  };

  const handleCodeSubmit = async () => {
    try {
      const response = await AuthRecoveryCode({ email, code });
      setResetToken(response.token);
      setStep(3);
    } catch (error) {
      alert('Ошибка подтверждения кода. Проверьте код.');
    }
  };

  const handlePasswordSubmit = async () => {
    if (newPassword !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    
    try {
      await AuthRecoveryReset({ token: resetToken, newPassword });
      setStep(4);
    } catch (error) {
      alert('Ошибка сброса пароля');
    }
  };

  const redirectStep = () => {
    router.push('/project/create');
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
        <div>
          <h1>Восстановление пароля</h1>
          <form>
            <label>
              Введите свой логин / почту
              <input 
                type="text" 
                placeholder="Введите почту" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </label>
            <button type="button" onClick={handleEmailSubmit}>Далее</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Восстановление пароля</h1>
          <form>
            <label>
              Введите полученный код
              <input 
                type="text" 
                placeholder="123456" 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
              />
            </label>
            <button type="button" onClick={handleCodeSubmit}>Далее</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Восстановление пароля</h1>
          <form>
            <label>
              Новый пароль
              <input 
                type="password" 
                placeholder="Введите новый пароль" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
              />
            </label>
            <label>
              Подтвердите новый пароль
              <input 
                type="password" 
                placeholder="Подтвердите новый пароль" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </label>
            <button type="button" onClick={handlePasswordSubmit}>Далее</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h1>Восстановление прошло успешно</h1>
          <p>Поздравляем!</p>
          <button type="button" onClick={redirectStep}>Продолжить работу</button>
        </div>
      )}
    </div>
  );
}
