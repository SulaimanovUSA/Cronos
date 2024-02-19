// Получение всех чатов
GET /api/chats

// Ответ: Массив чатов
[
    {
        "id": 1,
        "username": "Alex",
        "lastMessage": {
            "message": "Whats up",
            "time": "12:00"
        },
        "userImg": "link"
    },
    // Другие чаты...
]

// Поиск чатов по имени пользователя
GET /api/chats/search?username={username}

// Ответ: Массив чатов, где возвращaешь по username
[
    {
        "id": 2,
        "username": "John",
        "lastMessage": {
            "message": "Hello there",
            "time": "11:30"
        },
        "userImg": "link"
    },
    // Другие чаты...
]

// Получение текущих сообщений в чате по идентификатору чата
GET /api/chats/{chatId}/combined-messages

// Ответ: Массив всех сообщений в указанном чате, включая как сообщения текущего пользователя, так и сообщения другого пользователя
{
    "myMessages": [
        {
            "id": 1,
            "sender": {
                "username": "YourUsername",
                "userImg": "link"
            },
            "message": "Hello!",
            "time": "12:15",
            "date": "2024-02-19"
        },
        // Другие сообщения текущего пользователя...
    ],
    "userMessages": [
        {
            "id": 2,
            "sender": {
                "username": "OtherUsername",
                "userImg": "link"
            },
            "message": "Hi there!",
            "time": "12:20",
            "date": "2024-02-19"
        },
        // Другие сообщения другого пользователя...
    ]
}

// Получение информации о пользователе для заголовка сообщений
GET /api/chats/{chatId}/header-status

// Ответ: Информация о пользователе
[
    {
        "username": "S.A.SH",
        "status": "online",
        "userImg": "link"
    }
]

// Отправка сообщения в чат
POST /api/chats/{chatId}/send-message

// Запрос: Данные нового сообщения
{
    "message": "Текст сообщения/Ссылка на изображение",
}