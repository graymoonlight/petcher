import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5.182.87.84:4444',
});

api.interceptors.response.use(
  (response) => {
    console.log("Ответ от сервера:", response.data);
    return response.data;
  },
  (error) => {
    console.error('Ошибка API:', error);
    return Promise.reject(error);
  }
);

export const registerUser = async (userData) => {
  try {
    console.log("Отправляемые данные для регистрации:", userData);
    const data = await api.post('/auth/registration', userData);
    return data;
  } catch (error) {
    console.error('Ошибка регистрации:', error.response?.data || error.message);
    throw new Error('Ошибка регистрации');
  }
};

export const registerUserCode = async (userData) => {
  try {
    console.log("Отправляемые данные для подтверждения регистрации:", userData);
    const data = await api.post('/auth/registration-code', userData);
    return data;
  } catch (error) {
    console.error('Ошибка подтверждения регистрации:', error.response?.data || error.message);
    throw new Error('Ошибка подтверждения регистрации');
  }
};

export const loginUser = async (loginOrEmail, password) => {
  const loginData = {
    loginOrEmail,
    password,
  };

  try {
    console.log("Отправляемые данные для входа:", loginData);
    const data = await api.post('/auth/login', loginData);

    if (data.token) {
      localStorage.setItem('authToken', data.token);
      console.log("Токен успешно сохранен в localStorage:", data.token);
    }

    return data;
  } catch (error) {
    console.error('Ошибка при входе:', error.response?.data || error.message);
    throw new Error('Ошибка при входе');
  }
};

export const checkAuthToken = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error("Токен не найден");
  }

  try {
    console.log("Проверка токена:", token);
    const data = await api.post('/auth/check-token', { token });
    return data;ы
  } catch (error) {
    console.error('Ошибка проверки токена:', error.response?.data || error.message);
    throw new Error('Ошибка проверки токена');
  }
};



export const AuthRecovery = async (recoveryData) => {
  try {
    console.log("Отправляемые данные для запроса восстановления:", recoveryData);
    const data = await api.post('/auth/request-reset-password', recoveryData);
    return data;
  } catch (error) {
    console.error('Ошибка запроса восстановления:', error.response?.data || error.message);
    throw new Error('Ошибка запроса восстановления');
  }
};

export const AuthRecoveryCode = async (recoveryData) => {
  try {
    console.log("Отправляемые данные для подтверждения кода восстановления:", recoveryData);
    const data = await api.post('/auth/verify-reset-code', recoveryData);
    return data;
  } catch (error) {
    console.error('Ошибка подтверждения кода восстановления:', error.response?.data || error.message);
    throw new Error('Ошибка подтверждения кода восстановления');
  }
};

export const AuthRecoveryReset = async (recoveryData) => {
  try {
    console.log("Отправляемые данные для сброса пароля:", recoveryData);
    const data = await api.post('/auth/reset-password', recoveryData);
    return data;
  } catch (error) {
    console.error('Ошибка сброса пароля:', error.response?.data || error.message);
    throw new Error('Ошибка сброса пароля');
  }
};
