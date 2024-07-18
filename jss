document.addEventListener('DOMContentLoaded', function() {
    const profileImages = [
        'https://forgealumnus.com/storage/Gallery/mentor//Kp3rucbc2qyUeKcBQhpae7atlQR1gi8map6pBEpD.jpg',
        'https://forgealumnus.com/storage/Gallery/mentor//ReFURQKxdklBLHt1AIcE4Hb7WeGoutcXi6HjvuT5.jpg',
        'https://forgealumnus.com/storage/Gallery/mentor//orhW5X7KOpXj46Ax475Nf6l76I1aoZDhKLusPUIs.jpg',
        'https://forgealumnus.com/storage/Gallery/mentor//Kp3rucbc2qyUeKcBQhpae7atlQR1gi8map6pBEpD.jpg',
        'https://forgealumnus.com/storage/Gallery/mentor//ReFURQKxdklBLHt1AIcE4Hb7WeGoutcXi6HjvuT5.jpg',
        'https://forgealumnus.com/storage/Gallery/mentor//orhW5X7KOpXj46Ax475Nf6l76I1aoZDhKLusPUIs.jpg'
    ];

    const backgroundContainer = document.querySelector('.background-images');

    profileImages.forEach((imageUrl) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.classList.add('profile-image');
        imgElement.style.top = `${Math.random() * 100}%`;
        imgElement.style.left = `${Math.random() * 100}%`;
        backgroundContainer.appendChild(imgElement);
    });


    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const form = e.target.closest('form');
            form.querySelector('.action-buttons').style.display = 'flex';
            e.target.style.display = 'none';
        });
    });

    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const form = e.target.closest('form');
            form.querySelector('.action-buttons').style.display = 'none';
            form.querySelector('.next-btn').style.display = 'block';
        });
    });

    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    phoneInputs.forEach(input => {
        intlTelInput(input, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
        });
    });
});
