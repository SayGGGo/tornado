<img src="/for_readme/main.png" alt="TORNADO">
<hr>


> **Инфо** Проект находится в alpha тесте. Если вы наткнулись на баг - пожалуйста, 
> свяжитесь со мной [тут](https://t.me/SayGG_Go).

> **Инфо** Данный проект создан как итоговый для учебного заведения. Я не собираюсь 
> использовать его в продакшен.

<br>

<img src="/for_readme/install.png" alt="INSTALL">
<hr>

1. Скопируйте репозиторий:
``` commandline
git clone https://github.com/SayGGGo/tornado.git
```

2. Создайте виртуальное окружение
```commandline
python -m venv venv
```

3. Активируйте окружение
```bash
venv\Scripts\activate (для Windows)
source venv/bin/activate (для Linux/MacOS)
```

4. Установите библиотеки
```commandline
pip install -r requirements.txt
```

5. Создайте файл ```.env``` в корневой директории проекта


6. Заполните ```.env```:
```env
SECRET_KEY="Ваш секретный ключ"
ADMIN_PASSWORD="Ваш пароль от админки"
```

7. Запустите скрипт
```commandline
python main.py
```

8. Откройте http://localhost:2000 в браузере

<img src="/for_readme/functional.png" alt="FUNCTIONAL">
<hr>