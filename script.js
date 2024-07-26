const images = [
    'images/isabella soler.zip - 1.png', 'images/isabella soler.zip - 2.png', 'images/isabella soler.zip - 3.png', 'images/isabella soler.zip - 4.png', 'images/isabella soler.zip - 5.png',
    'images/isabella soler.zip - 6.png', 'images/isabella soler.zip - 7.png', 'images/isabella soler.zip - 8.png', 'images/isabella soler.zip - 9.png', 'images/isabella soler.zip - 10.png'
];

const wheel = document.getElementById('wheel');

images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.transform = `rotate(${index * (360 / images.length)}deg) translateY(-150px)`;
    wheel.appendChild(img);
});

document.getElementById('spinButton').addEventListener('click', () => {
    const randomDegree = Math.floor(Math.random() * 3600) + 360; // Spin multiple times
    const segmentDegree = 360 / images.length; // Degree per image segment
    const finalDegree = randomDegree + (segmentDegree / 2); // Center on an image

    wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
    wheel.style.transform = `rotate(${finalDegree}deg)`;

    setTimeout(() => {
        const actualRotation = finalDegree % 360; // The rotation within the final circle
        const imageIndex = Math.floor(actualRotation / segmentDegree);
        const winningImage = images[imageIndex];

        // Show the winning image popup
        const winningImagePopup = document.getElementById('winningImagePopup');
        const winningImageElement = winningImagePopup.querySelector('img');
        winningImageElement.src = winningImage;
        winningImagePopup.style.display = 'block';
    }, 4000); // Match the timeout duration with the CSS transition duration
});

// Hide the popup when the close button is clicked
document.getElementById('closePopupButton').addEventListener('click', () => {
    document.getElementById('winningImagePopup').style.display = 'none';
});
