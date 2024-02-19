// Твой апи запрос

// async function fetchDataFromAPI() {
//     try {
//         const response = await fetch('api_путь');
//         if (!response.ok) {
//             throw new Error('Ошибка получения данных с API');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }
// -------------------------------------------------------------------

function insertMarkupIntoBody(imageSrc, messageTitle, messageText, messageCount) {
    const styleMarkup = `
        <style>
            body {
                position: relative;
            }

            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 350px;
                height: auto;
                max-height: 150px;
                border-radius: 10px;
                border: solid 1px rgba(0, 0, 0, 0.1);
                padding: 10px;
                background: var(--gray, #F5F5F5);
                z-index: 5;
                display: flex;
                align-items: center;
            }

            .notification_image {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: solid 1px rgba(0, 0, 0, 0.1);
            }

            .notification_titles {
                text-align: start;
                margin: 0 0 0 10px;

                .notification_title {
                    color: orangered;
                    font-size: 18px;
                    margin-bottom: 5px;
                    align-self: flex-start;

                    span {
                        color: black;
                        font-size: 16px;
                        margin: 0 0 0 10px;
                    }
                }

                .notification_subtitle {
                    color: black;
                    font-size: 16px;
                    margin-bottom: 10px;
                }
            }

            .notification_close_button {
                position: absolute;
                top: 10px;
                right: 10px;
                border: none;
                padding: 3px;
                border-radius: 5px;
                cursor: pointer;
            }

            .notificationActive {
                /* display: none; */
            }
        </style>
    `;

    const htmlMarkup = `
        <div class="notification notificationActive">
            <img class="notification_image" src="${imageSrc}" alt="">
            <div class="notification_titles">
                <p class="notification_title">${messageTitle} <span>${messageCount}+</span></p>
                <p class="notification_subtitle">${messageText}</p>
            </div>
            <button class="notification_close_button" onclick="closeNotification()">Х</button>
        </div>
    `;

    return new Promise((resolve, reject) => {
        try {
            const head = document.head || document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            style.innerHTML = styleMarkup;
            head.appendChild(style);

            const body = document.body;
            const div = document.createElement('div');
            div.innerHTML = htmlMarkup;
            body.appendChild(div);

            div.style.display = 'flex';

            resolve('Разметка успешно вставлена в тег <body>');
        } catch (error) {
            reject('Произошла ошибка при вставке разметки в тег <body>');
        }
    });
}

function closeNotification() {
    const notification = document.querySelector('.notificationActive');
    notification.style.display = 'none';
}

async function main() {
    try {

        // ----------------------------------------
        // Для работы с апи сними с коммента
        // const apiData = await fetchDataFromAPI();
        // const imageSrc = apiData.imageSrc;
        // const messageTitle = apiData.messageTitle;
        // const messageText = apiData.messageText;
        // const messageCount = apiData.messageCount;

        // Для работы с апи закомментируй
        const imageSrc = 'https://funbox.ee/media/catalog/product/cache/441b20b75d6d2f0ed0624ad0dc9fd0bb/1/_/1_856.png';
        const messageTitle = 'Cronos | Profil';
        const messageText = 'Верни сотку Саня';
        const messageCount = 6; // Число сообщений
        // ----------------------------------------

        const result = await insertMarkupIntoBody(imageSrc, messageTitle, messageText, messageCount);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();
