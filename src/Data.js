class Data {
    eventsData = [
        {
            id: 1,
            title: 'Концерт гурту "Рок-зорі"',
            category: 'Концерти',
            image: 'https://www.kontramarka.de/upload/img/soundofukraine_432x610-1.jpg',
            date: '2024-02-01',
            description: 'Неймовірний концерт у вашому місті! Не пропустіть!',
        },
        {
            id: 2,
            title: 'Театральний спектакль "Любов і трагедія"',
            category: 'Спектаклі',
            image: 'https://tickikids.ams3.cdn.digitaloceanspaces.com/z1.cache/gallery/activities/57508/image_61f7a11f206268.58474684.jpg',
            date: '2024-02-10',
            description: 'Захоплююча театральна подія, яка залишить вас у захваті.',
        },
        {
            id: 3,
            title: 'Прем\'єра фільму "Загадкова пригода"',
            category: 'Кіно',
            image: 'https://www.afisha.uz/uploads/media/2023/12/e69188a4d3147e31ff3af0a4b4ece11f_s.jpg',
            date: '2024-02-15',
            description: 'Першодивовижна прем\'єра фільму, який вас вразить!',
        },
        {
            id: 4,
            title: 'Вистава "Мрія про майбутнє"',
            category: 'Спектаклі',
            image: 'https://bzh.life/static/img/2/0/2097225922_imagebig638019690134331658_438x619.jpg',
            date: '2024-02-20',
            description: 'Емоційна вистава, яка залишить багато вражень.',
        },
        {
            id: 5,
            title: 'Фестиваль короткометражних фільмів',
            category: 'Кіно',
            image: 'https://arthousetraffic.com/modules/pages//pictures/220x270/1660130373_6081.jpg',
            date: '2024-03-01',
            description: 'Зустрічайте нових творців та їхні захоплюючі короткометражки.',
        },
        {
            id: 6,
            title: 'Живий виступ коміка "Сміх народу"',
            category: 'Концерти',
            image: 'https://focus.ua/static/storage/thumbs/920x465/1/40/eda583ce-d7bb2d7c54302c47f09d68e727415401.jpg?v=2632_1',
            date: '2024-03-10',
            description: 'Неймовірний вечір сміху та гумору від талановитого коміка.',
        },
    ];

    getItemById = (id) => {
        const idS = parseInt(id);
        return this.eventsData.find((item) => item.id === idS);
    }

    getItemByCategory = (category) => {
        return this.eventsData.filter((item) => item.category === category);
    }

    addAction = (action) => {
        this.eventsData.push(action);
    }
}

export default new Data();
