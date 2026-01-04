// Создаем снежинки
        function createSnowflakes() {
            const snowflakesContainer = document.getElementById('snowflakes');
            const snowflakeCount = 50;
            
            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                // Случайный размер от 3 до 10px
                const size = Math.random() * 7 + 3;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                
                // Случайная позиция
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.top = `${Math.random() * 100}%`;
                
                // Случайная прозрачность
                snowflake.style.opacity = Math.random() * 0.7 + 0.3;
                
                // Анимация
                const duration = Math.random() * 10 + 10;
                snowflake.style.animation = `fall ${duration}s linear infinite`;
                
                // Добавляем CSS для анимации
                if (!document.querySelector('#snow-animation')) {
                    const style = document.createElement('style');
                    style.id = 'snow-animation';
                    style.textContent = `
                        @keyframes fall {
                            0% {
                                transform: translateY(-100%) rotate(0deg);
                            }
                            100% {
                                transform: translateY(100vh) rotate(360deg);
                            }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                snowflakesContainer.appendChild(snowflake);
            }
        }
        
        // Обновляем текст письма при вводе данных
        document.getElementById('name').addEventListener('input', function() {
            const name = this.value || '[Ваше имя]';
            document.getElementById('name-placeholder').textContent = name;
            document.getElementById('signature-placeholder').textContent = name;
        });
        
        document.getElementById('age').addEventListener('input', function() {
            const age = this.value || '[Ваш возраст]';
            document.getElementById('age-placeholder').textContent = age;
        });
        
        document.getElementById('wish').addEventListener('input', function() {
            const wish = this.value || '[ваше заветное желание]';
            document.getElementById('wish-placeholder').textContent = wish;
        });
        
        // Обработка отправки формы
        document.getElementById('letter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const city = document.getElementById('city').value;
            const behavior = document.getElementById('behavior').value;
            const wish = document.getElementById('wish').value;
            
            // Проверяем заполнены ли обязательные поля
            if (!name || !age || !city || !behavior || !wish) {
                alert('Пожалуйста, заполни все обязательные поля!');
                return;
            }
            
            // Показываем подтверждение
            document.getElementById('confirmation-name').textContent = name;
            document.getElementById('confirmation').style.display = 'block';
            document.getElementById('letter-form').style.display = 'none';
            
            // Прокручиваем к подтверждению
            document.getElementById('confirmation').scrollIntoView({behavior: 'smooth'});
            
            // Добавляем анимацию отправки
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Письмо отправлено!';
            submitBtn.style.background = 'linear-gradient(to right, #27ae60, #2ecc71)';
            
            // Создаем эффект "отправки письма" - добавляем больше снежинок
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    const snowflake = document.createElement('div');
                    snowflake.classList.add('snowflake');
                    snowflake.style.width = '5px';
                    snowflake.style.height = '5px';
                    snowflake.style.left = `${Math.random() * 100}%`;
                    snowflake.style.top = `-10px`;
                    snowflake.style.opacity = '0.7';
                    snowflake.style.position = 'fixed';
                    snowflake.style.zIndex = '1000';
                    snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear forwards`;
                    document.body.appendChild(snowflake);
                    
                    // Удаляем снежинку после анимации
                    setTimeout(() => {
                        snowflake.remove();
                    }, 7000);
                }
            }, 500);
        });
        
        // Инициализация снежинок при загрузке
        window.addEventListener('load', createSnowflakes);
        
        // Предзаполняем пример данных для демонстрации
        window.addEventListener('load', function() {

            document.getElementById('name').value = "Олег";
            document.getElementById('age').value = "20";
            document.getElementById('city').value = "Москва";
            document.getElementById('behavior').value = "excellent";
            document.getElementById('wish').value = "Новогоднего чуда и подарок от aroken";
            document.getElementById('snow').checked = true;
            document.getElementById('health').checked = true;
            
            
            document.getElementById('name').dispatchEvent(new Event('input'));
            document.getElementById('age').dispatchEvent(new Event('input'));
            document.getElementById('wish').dispatchEvent(new Event('input'));
        });