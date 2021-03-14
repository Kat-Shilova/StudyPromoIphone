document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tubs = () => {

        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');
        const descriptionMemory = document.querySelector('.description__memory');

        const dataPhone = [
            {
                name:'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img:'img/iPhone-graphite.png',
                price: 95990,
                memoryROM: 128
            },
            {
                name:'Смартфон Apple iPhone 12 Pro 128GB Silver',
                img:'img/iPhone-silver.png',
                price: 120990,
                memoryROM: 256
            },
            {
                name:'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img:'img/iPhone-blue.png',
                price: 99990,
                memoryROM: 128
            },
        ];

        const deactive = () => {
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'))
        };

        cardDetailChangeElems.forEach( (btn, i) => {
            btn.addEventListener('click', () =>{

                if (!btn.classList.contains('active')) {

                    deactive();
                    
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = dataPhone[i].name;
                    cardImageItemElem.src = dataPhone[i].img;
                    cardImageItemElem.alt = dataPhone[i].name;
                    cardDetailsPriceElem.textContent = dataPhone[i].price + '₽';
                    descriptionMemory.textContent = `Встроенная память (ROM) ${dataPhone[i].memoryROM} ГБ`;
                }
            });
        });

        
    };

    const accordion = () => {
        const characteristicsList = document.querySelector('.characteristics__list');
        const characteristicsItem = document.querySelectorAll('.characteristics__item');
        
        // const characteristicsTitle = document.querySelectorAll('.characteristics__title');
        // const characteristicsDescription = document.querySelectorAll('.characteristics__description');
        // characteristicsTitle.forEach((elem, i) => {
        //     elem.addEventListener('click', () => {
        //         elem.classList.toggle('active');
        //         characteristicsDescription[i].classList.toggle('active');
        //     });
        // });

        const open = (btn, dropDown) => {
            closeAllDrops()
            dropDown.style.height = `${dropDown.scrollHeight}px`;
            dropDown.classList.add('active');
            btn.classList.add('active');
        };

        const close = (btn, dropDown) => {
            dropDown.style.height = '';
            dropDown.classList.remove('active');
            btn.classList.remove('active');
        };

        const closeAllDrops = (btn, dropDown) => {
            characteristicsItem.forEach((elem) => {
                if (elem.children[0] !== btn && elem.children[1] !== dropDown) {
                    close(elem.children[0], elem.children[1]);
                }
            });
        };

        characteristicsList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('characteristics__title')) {
                const parent = target.closest('.characteristics__item');
                const desc = parent.querySelector('.characteristics__description');
                desc.classList.contains('active') ? open(target, desc) : close(target, desc);
            }
            
        });
    };

    tubs();
    
    accordion();
});