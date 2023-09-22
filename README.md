Сначала качаем проект на сервер.

Для этого подключаемся по ssh.

`ssh root@<айпи сервера>`

Потом создаём папку `clinic` на пути `/var/www/`

```sh
cd /var/www/
mkdir clinic
cd clinic
```

Качаем проект с репо, для этого нам нужен гит:

`git clone <ссылка на репозиторий> .`

(Если гит не установлен сначала ввести команду `sudo apt-get install git`)

Когда проект установлен в папку, устанавливаем нужные зависимости `yarn`.
И пробуем запустить проект `yarn dev`.
Должен получиться вывод типа такого:
```
VITE v4.4.9  ready in 669 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Потом производим сборку проекта `yarn build`. Получится вывод:
```
...
✓ built in 3.49s
Done in 6.21s.
```

Если всё как написано, то можно приступать к настройке сервера.

---

Для запуска фронт-енда в продакшн среде нужно настроить следующие инструменты:

- Nginx
- Supervisor
- NodeJS (yarn)

### Nginx

```sh
sudo apt-get install nginx
systemctl enable nginx

cd /etc/nginx/sites-enabled/
vim <доменное название>.conf
```

В редактор вставляем следующую конфигурацию:

```conf
server
{
   server_name <доменное имя>;

   location / {
      include proxy_params;
      proxy_pass http://localhost:4173;
   }
}
```

И сохраняем файл.

Перезапускаем nginx `systemctl restart nginx`.

### Supervisor

```sh
sudo apt-get install supervisor -y
cd /etc/supervisor/conf.d/
vim <доменное название>.conf
```

В редактор вставляем следующую конфигурацию:

```conf
[program:clinic]
directory=/var/www/clinic/
command=yarn preview
autostart=true
autorestart=true
```

Потом считываем конфу и смотрим статус:
```
supervisorctl reread
supervisorctl update
supervisorctl status
```

Должно быть такое:
```
clinic:clinic_00 RUNNING (и так далее)
```

---

Проект настроем и работает.

Есть более простые способы развернуть фронт-енд, но данный способ самый гибкий и надёжный.
